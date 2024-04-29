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
        const response = await axios.get(`/oauth2/kakao?code=${code}`);
        localStorage.setItem(
          'accessToken',
          JSON.stringify(response.data.accessToken),
        );
        localStorage.setItem(
          'refreashToken',
          JSON.stringify(response.data.refreshToken),
        );
        setIsLoggedIn(true);
        navigate('/main');
        window.location.reload();
      } catch (error) {
        console.error(error);
        console.log('실패?');
      }
    };

    fetchData();
  }, []);

  const accessToken = JSON.parse(localStorage.getItem('accessToken'));

  function decodeJWT(token) {
    try {
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      return payload;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  const decodedPayload = decodeJWT(accessToken);
  const memberId = decodedPayload ? decodedPayload.memberId : null;
  localStorage.setItem('memberId', memberId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`profile/${memberId}`, {
          headers: {
            Authorization: accessToken,
          },
        });
        console.log(response.data);
        const { name } = response.data;
        localStorage.setItem('userName', name);
      } catch (error) {
        console.error('요청 중 에러 발생:', error);
      }
    };

    fetchData();
  }, [accessToken]);

  return <></>;
};

export default LoginState;
