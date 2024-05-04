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
        console.log('hi');
        console.log(response);
        console.log(response.data);
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
    getUserName(memberId, accessToken);
  }

  function getUserName(memberId, accessToken) {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cafegory.robinjoon.xyz/profile/${memberId}`,
          {
            headers: {
              Authorization: accessToken,
            },
          },
        );
        console.log(response.data);
        const { name } = response.data;
        localStorage.setItem('userName', name);
      } catch (error) {
        console.error('요청 중 에러 발생:', error);
      }
    };

    fetchData();
  }

  return <></>;
};

export default LoginState;
