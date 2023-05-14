import IonIcon from '@reacticons/ionicons';
import React from 'react';
import styled from 'styled-components';
import { defaultThemes } from '../../themes';
import { useNavigate  } from 'react-router-dom';

const Rooms: React.FC = () => {
  const navigate = useNavigate();

  function redirectToVideoRoom1() {
    navigate('/video/1');
  }

  function redirectToVideoRoom2() {
    navigate('/video/2');
  }

  return (
    <Roomsx>
          <Room> 
            <RoomTop> 
              <IonIcon name="videocam-outline" size="large"  />
              <RoomName> Room 1</RoomName>
            </RoomTop>
            <RoomContent>
              <RoomUserSpace>
                 <Avatar />
              </RoomUserSpace>
              <RoomUserSpace>
                <Avatar />
              </RoomUserSpace>
            </RoomContent>
            <RoomFooter>
              <RoomButton onClick={redirectToVideoRoom1}> Entrar </RoomButton>
            </RoomFooter>

          </Room>
          <Room> 
            <RoomTop> 
              <IonIcon name="videocam-outline" size="large"  />
              <RoomName> Room 2</RoomName>
            </RoomTop>
            <RoomContent>
              <RoomUserSpace>
                 <Avatar />
              </RoomUserSpace>
              <RoomUserSpace>
                <Avatar />
              </RoomUserSpace>
            </RoomContent>
            <RoomFooter>
              <RoomButton onClick={redirectToVideoRoom2}> Entrar </RoomButton>
            </RoomFooter>

          </Room>
    </Roomsx>
  )
}

export default Rooms;

const RoomFooter =styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RoomButton =styled.div`
  width:10rem;
  height: 2.4rem;
  border-radius: 20px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const Roomsx =styled.div`
  background-color: ${defaultThemes.secondaryColor};
  width: 50%;
  height: 36rem;
  margin: 1.5rem;
  border-radius: 2%;
  color: ${defaultThemes.fontColor};
  font-weight: 700;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap:2rem;
  overflow: hidden;
`;
const Room =styled.div`
  width: 80%;
  height: 13rem;
  background-color: ${defaultThemes.primaryColor};
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap:1.2rem
`;

const RoomTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:1rem;
  height: 2rem;
`;

const RoomName = styled.div`
  
`;

const RoomContent = styled.div`
   display: flex;
   gap: 1rem;
`;

const Avatar = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  border: 2px dotted black;
`;

const RoomUserSpace = styled.div`
  
`;

const UserName = styled.div`
  
`;