// src/components/SocialLogin.jsx
import React from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

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
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </Container>
  );
};

export default SocialLogin;
