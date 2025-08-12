'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (error) {
        console.error("Supabase Error:", error.message);
        setErrorMsg(error.message);
      } else {
        setUsers(data);
      }
    })();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Users</h1>
      {errorMsg && <p style={{ color: 'red' }}>Error: {errorMsg}</p>}
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
}
