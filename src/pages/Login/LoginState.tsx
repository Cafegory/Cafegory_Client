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
        console.log(response.data);
        setIsLoggedIn(true);
        navigate('/main');
      } catch (error) {
        console.error(error);
        console.log('실패?');
      }
    };

    fetchData();
  }, []);

  return <></>;
};

export default LoginState;
