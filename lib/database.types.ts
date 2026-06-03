export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          display_name: string | null;
          avatar_url: string | null;
          bio: string | null;
          city: string | null;
          country: string | null;
          rating: number;
          review_count: number;
          is_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          city?: string | null;
          country?: string | null;
          rating?: number;
          review_count?: number;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          city?: string | null;
          country?: string | null;
          rating?: number;
          review_count?: number;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      items: {
        Row: {
          id: string;
          owner_id: string;
          title: string;
          description: string | null;
          category: string;
          size: string | null;
          condition: Database['public']['Enums']['item_condition'];
          brand: string | null;
          color: string | null;
          style_tags: string[];
          location_city: string | null;
          location_country: string | null;
          visibility: Database['public']['Enums']['item_visibility'];
          status: Database['public']['Enums']['item_status'];
          ai_style_tip: string | null;
          created_at: string;
          updated_at: string;
          published_at: string | null;
        };
        Insert: {
          id?: string;
          owner_id: string;
          title: string;
          description?: string | null;
          category: string;
          size?: string | null;
          condition?: Database['public']['Enums']['item_condition'];
          brand?: string | null;
          color?: string | null;
          style_tags?: string[];
          location_city?: string | null;
          location_country?: string | null;
          visibility?: Database['public']['Enums']['item_visibility'];
          status?: Database['public']['Enums']['item_status'];
          ai_style_tip?: string | null;
          created_at?: string;
          updated_at?: string;
          published_at?: string | null;
        };
        Update: {
          id?: string;
          owner_id?: string;
          title?: string;
          description?: string | null;
          category?: string;
          size?: string | null;
          condition?: Database['public']['Enums']['item_condition'];
          brand?: string | null;
          color?: string | null;
          style_tags?: string[];
          location_city?: string | null;
          location_country?: string | null;
          visibility?: Database['public']['Enums']['item_visibility'];
          status?: Database['public']['Enums']['item_status'];
          ai_style_tip?: string | null;
          created_at?: string;
          updated_at?: string;
          published_at?: string | null;
        };
      };
      item_images: {
        Row: {
          id: string;
          item_id: string;
          storage_path: string;
          image_url: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          item_id: string;
          storage_path: string;
          image_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          item_id?: string;
          storage_path?: string;
          image_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
      };
      item_listing_options: {
        Row: {
          item_id: string;
          can_borrow: boolean;
          can_buy: boolean;
          can_swap: boolean;
          borrow_price_per_day: number | null;
          sale_price: number | null;
          deposit_amount: number | null;
          currency: string;
          swap_preferences: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          item_id: string;
          can_borrow?: boolean;
          can_buy?: boolean;
          can_swap?: boolean;
          borrow_price_per_day?: number | null;
          sale_price?: number | null;
          deposit_amount?: number | null;
          currency?: string;
          swap_preferences?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          item_id?: string;
          can_borrow?: boolean;
          can_buy?: boolean;
          can_swap?: boolean;
          borrow_price_per_day?: number | null;
          sale_price?: number | null;
          deposit_amount?: number | null;
          currency?: string;
          swap_preferences?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      saved_items: {
        Row: {
          id: string;
          user_id: string;
          item_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          item_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          item_id?: string;
          created_at?: string;
        };
      };
      requests: {
        Row: {
          id: string;
          item_id: string;
          sender_id: string;
          receiver_id: string;
          type: Database['public']['Enums']['request_type'];
          status: Database['public']['Enums']['request_status'];
          message: string | null;
          start_date: string | null;
          end_date: string | null;
          offered_item_id: string | null;
          price_snapshot: number | null;
          currency: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          item_id: string;
          sender_id: string;
          receiver_id: string;
          type: Database['public']['Enums']['request_type'];
          status?: Database['public']['Enums']['request_status'];
          message?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          offered_item_id?: string | null;
          price_snapshot?: number | null;
          currency?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          item_id?: string;
          sender_id?: string;
          receiver_id?: string;
          type?: Database['public']['Enums']['request_type'];
          status?: Database['public']['Enums']['request_status'];
          message?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          offered_item_id?: string | null;
          price_snapshot?: number | null;
          currency?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      request_messages: {
        Row: {
          id: string;
          request_id: string;
          sender_id: string;
          body: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          request_id: string;
          sender_id: string;
          body: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          request_id?: string;
          sender_id?: string;
          body?: string;
          created_at?: string;
        };
      };
      follows: {
        Row: {
          id: string;
          follower_id: string;
          following_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          follower_id: string;
          following_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          follower_id?: string;
          following_id?: string;
          created_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          request_id: string | null;
          reviewer_id: string;
          reviewee_id: string;
          rating: number;
          comment: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          request_id?: string | null;
          reviewer_id: string;
          reviewee_id: string;
          rating: number;
          comment?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          request_id?: string | null;
          reviewer_id?: string;
          reviewee_id?: string;
          rating?: number;
          comment?: string | null;
          created_at?: string;
        };
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          actor_id: string | null;
          type: Database['public']['Enums']['notification_type'];
          title: string;
          body: string | null;
          item_id: string | null;
          request_id: string | null;
          read_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          actor_id?: string | null;
          type: Database['public']['Enums']['notification_type'];
          title: string;
          body?: string | null;
          item_id?: string | null;
          request_id?: string | null;
          read_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          actor_id?: string | null;
          type?: Database['public']['Enums']['notification_type'];
          title?: string;
          body?: string | null;
          item_id?: string | null;
          request_id?: string | null;
          read_at?: string | null;
          created_at?: string;
        };
      };
    };
    Views: {
      feed_items: {
        Row: {
          id: string | null;
          owner_id: string | null;
          title: string | null;
          description: string | null;
          category: string | null;
          size: string | null;
          condition: Database['public']['Enums']['item_condition'] | null;
          brand: string | null;
          color: string | null;
          style_tags: string[] | null;
          location_city: string | null;
          location_country: string | null;
          ai_style_tip: string | null;
          created_at: string | null;
          published_at: string | null;
          owner_username: string | null;
          owner_display_name: string | null;
          owner_avatar_url: string | null;
          owner_rating: number | null;
          owner_review_count: number | null;
          owner_is_verified: boolean | null;
          can_borrow: boolean | null;
          can_buy: boolean | null;
          can_swap: boolean | null;
          borrow_price_per_day: number | null;
          sale_price: number | null;
          currency: string | null;
          cover_image_url: string | null;
          save_count: number | null;
        };
      };
      profile_closet_stats: {
        Row: {
          profile_id: string | null;
          total_items: number | null;
          jackets_count: number | null;
          tops_count: number | null;
          pants_count: number | null;
          shoes_count: number | null;
          accessories_count: number | null;
        };
      };
    };
    Functions: Record<string, never>;
    Enums: {
      item_visibility: 'private' | 'public' | 'unlisted';
      item_status:
        | 'draft'
        | 'active'
        | 'reserved'
        | 'borrowed'
        | 'sold'
        | 'swapped'
        | 'paused'
        | 'archived';
      item_condition: 'new' | 'like_new' | 'good' | 'fair';
      request_type: 'borrow' | 'buy' | 'swap';
      request_status:
        | 'pending'
        | 'accepted'
        | 'declined'
        | 'cancelled'
        | 'completed';
      notification_type:
        | 'borrow_request'
        | 'buy_request'
        | 'swap_offer'
        | 'request_accepted'
        | 'request_declined'
        | 'message'
        | 'saved_item'
        | 'follow';
    };
    CompositeTypes: Record<string, never>;
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never;
