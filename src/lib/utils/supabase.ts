import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';
// Create a single supabase client for interacting with your database

const supabaseUrl = env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);
export default supabase;
