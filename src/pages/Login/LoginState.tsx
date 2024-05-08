import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../store/users/store';

const LoginState: React.FC = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cafegory.robinjoon.xyz/oauth2/kakao?code=${code}`,
        );
        localStorage.setItem(
          'accessToken',
          JSON.stringify(response.data.accessToken),
        );
        localStorage.setItem(
          'refreshToken',
          JSON.stringify(response.data.refreshToken),
        );
        setIsLoggedIn(true);
        const accessToken = response.data.accessToken;
        getMemberId(accessToken);
        navigate('/');
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function decodeJWT(token) {
    try {
      if (!token) {
        return;
      }
      const tokenParts = token?.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      return payload;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  function getMemberId(accessToken) {
    const decodedPayload = decodeJWT(accessToken);
    const memberId = decodedPayload ? decodedPayload.memberId : null;
    localStorage.setItem('memberId', memberId);
  }

  return <></>;
};

export default LoginState;
