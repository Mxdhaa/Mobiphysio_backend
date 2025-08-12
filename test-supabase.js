import { createClient } from '@supabase/supabase-js';

// Load env variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

(async () => {
  const { data, error } = await supabase.from('users').select('*');
  console.log("Data:", data);
  console.log("Error:", error);
})();
