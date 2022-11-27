import React, { useContext, useState, createContext, ReactNode } from 'react';
import Cookie from 'js-cookie';
import endPoints from '@services/api';
import axios from 'axios';

const AuthContext = createContext({});
interface Props {
  children: ReactNode;
}

export function ProviderAuth({ children }: Props) {
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email: string, password: string) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const {
      data: { access_token },
    } = await axios.post(endPoints.auth.login, { email, password }, options);

    if (access_token) {
      const token = access_token;
      Cookie.set('token', access_token, { expires: 5 });
      axios.defaults.headers.options = {
        Authorization: `Bearer ${token}`,
      };
      const {
        data: { user },
      } = await axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    axios.defaults.headers.delete;
    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    logout,
  };
}
