import { deleteCookie, getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

export const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(true);

  const accessToken = getCookie('accessToken');

  function verifyToken() {
    try {
      const token = getCookie('accessToken');

      if (!token) {
        throw new Error('token not found');
      }
      const decoded = jwtDecode(token);

      if (decoded?.exp && Date.now() >= decoded.exp * 1000) {
        deleteCookie('accessToken');
        throw new Error('token expired found');
      }
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    verifyToken();
  }, [accessToken]);

  return {
    isAuthenticated,
    isPending,
  };
};
