import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://evpvhvgiieqtkjultcdr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2cHZodmdpaWVxdGtqdWx0Y2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MjY2ODQsImV4cCI6MjA5MDMwMjY4NH0.-DcFn4Y-OtLW_dJyH6lv39kteTdJkqo9Y3Qdy5FpQN4";

export const supabase = createClient(supabaseUrl, supabaseKey);