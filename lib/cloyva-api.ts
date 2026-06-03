import { supabase } from './supabase';

import type { Tables, TablesInsert } from './database.types';

export type FeedItem = Tables<'feed_items'>;
export type ClosetItem = Tables<'items'> & {
  item_images: Tables<'item_images'>[];
  item_listing_options: Tables<'item_listing_options'> | null;
};
export type NewItem = TablesInsert<'items'>;
export type NewItemListingOptions = TablesInsert<'item_listing_options'>;
export type NewItemImage = TablesInsert<'item_images'>;

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return data.user;
}

export async function getFeedItems() {
  const { data, error } = await supabase
    .from('feed_items')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function getMyClosetItems() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error('You must be signed in to view your closet.');
  }

  const { data, error } = await supabase
    .from('items')
    .select('*, item_images(*), item_listing_options(*)')
    .eq('owner_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data as ClosetItem[];
}

export async function createPublishedItem(input: {
  item: Omit<NewItem, 'owner_id' | 'visibility' | 'status' | 'published_at'>;
  listingOptions: Omit<NewItemListingOptions, 'item_id'>;
  images?: Omit<NewItemImage, 'item_id'>[];
}) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error('You must be signed in to publish an item.');
  }

  const { data: item, error: itemError } = await supabase
    .from('items')
    .insert({
      ...input.item,
      owner_id: user.id,
      visibility: 'public',
      status: 'active',
      published_at: new Date().toISOString(),
    })
    .select('*')
    .single();

  if (itemError) {
    throw itemError;
  }

  const { error: listingError } = await supabase
    .from('item_listing_options')
    .insert({
      ...input.listingOptions,
      item_id: item.id,
    });

  if (listingError) {
    throw listingError;
  }

  if (input.images?.length) {
    const { error: imagesError } = await supabase.from('item_images').insert(
      input.images.map((image, index) => ({
        ...image,
        item_id: item.id,
        sort_order: image.sort_order ?? index,
      })),
    );

    if (imagesError) {
      throw imagesError;
    }
  }

  return item;
}
