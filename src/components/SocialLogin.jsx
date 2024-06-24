import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Container } from '../styles/SocialLoginStyles';

const SocialLogin = () => {
  const responseFacebook = response => {
    console.log(response);
  };

  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <Container>
      <h2>Увійти через соціальні мережі</h2>
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </Container>
  );
};

export default SocialLogin;
