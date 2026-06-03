# Supabase setup for Cloyva

The Expo app now has a reusable Supabase client in `lib/supabase.ts`.

## Required environment variables

Create a local `.env` file in the project root. Do not commit it.

```bash
EXPO_PUBLIC_SUPABASE_URL=https://gztnqzolkzoyrwlxhpbh.supabase.co
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_or_anon_key_here
```

You can find the publishable key or anon key in the Supabase dashboard under the project API settings.

After editing `.env`, restart Expo with:

```bash
npm run start:clear
```

## Client import

Use this import anywhere in the app:

```ts
import { supabase } from '@/lib/supabase';
```

## Storage buckets

The backend has two public buckets:

```text
item-images
avatars
```

Uploads are protected by RLS policies. User uploads should use a path that starts with the authenticated user id:

```text
item-images/<user-id>/<filename>
avatars/<user-id>/<filename>
```

Use `buildUserStoragePath(userId, fileName)` from `lib/supabase.ts` to create a valid path.
