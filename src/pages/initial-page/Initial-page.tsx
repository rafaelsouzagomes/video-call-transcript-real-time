import React from 'react';
import styled from 'styled-components';
import { defaultThemes,Theme } from '../../themes';
import logo from '../../assets/general/logo-2.png'
import IonIcon from '@reacticons/ionicons';
import UserSettings from '../../components/user-settings/user-settings';
import Rooms from '../../components/rooms/rooms';

const InitialPage: React.FC = () => {
  return (
    <Container>
      <Menu> 
        <LogoContainer>
          <Logo  src={logo} alt="Logo" />
        </LogoContainer>
        <VideoChat>
          Video Chat
        </VideoChat>
      </Menu>
      <Content>
        <Rooms />
        <UserSettings />
      </Content>
   </Container>);
}

export default InitialPage;

const Logo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
`;

const LogoContainer = styled.div`
  background-color: yellow;
  border-radius: 50%;
  padding: 0.1rem;
  box-shadow: 0 0 10px yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  gap:2rem;
`;

const Content =styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${defaultThemes.primaryColor}
`;

const VideoChat = styled.div`
  color: ${defaultThemes.fontColor};
  font-size: 1.2rem;
  font-weight: 800;
`;  
