import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { api } from '../lib/axios';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function validateToken() {
      const token = Cookies.get('token');

      if (!token) {
        router.push('/auth');
        return;
      }

      try {
        const response = await api.get('/auth/me');
        setUser(response.data);
      } catch (error) {
        Cookies.remove('token');
        router.push('/auth');
      } finally {
        setLoading(false);
      }
    }

    validateToken();
  }, [router]);

  return { user, loading };
}