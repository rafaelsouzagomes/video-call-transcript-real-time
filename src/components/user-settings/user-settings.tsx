import React, { useEffect } from 'react';
import RadioButtonOption from '../RadioButtonOption/RadioButtonOption';
import UserAvatarIcon from '../user-avatar-icon/user-avatar-icon';
import FlagIcon from '../Flag-icon/flag-icon';
import { defaultThemes } from '../../themes';
import styled from 'styled-components';

import avatar1 from '../../assets/user/icon-1-lion.png'
import avatar2 from '../../assets/user/icon-2.png'
import avatar3 from '../../assets/user/icon-3.png'
import avatar4 from '../../assets/user/icon-4.png'

import eua from '../../assets/flags/UM.png'
import es from '../../assets/flags/ES.png'
import br from '../../assets/flags/BR.png'


const UserSettings: React.FC = () => {

  const [selectedOption, setSelectedOption] = React.useState('option1');
  const [selectLanguageOption, setSelectLanguageOption] = React.useState('option2');
  const [usuario, setUsuario] = React.useState<string>('user10');

  useEffect(() => {
    setUserDefaultInfos();
  }, []);

  function setUserDefaultInfos() {
    localStorage.setItem('avatarIcon', JSON.stringify(avatar1));
    localStorage.setItem('idUser', JSON.stringify(generateRandomNumber(1000000000, 9999999999)));
    localStorage.setItem('username', JSON.stringify('user001'));
    localStorage.setItem('language', JSON.stringify('en-US'));
  }
  
  function generateRandomNumber(min: number, max: number): number {
    const random = Math.random() * (max - min) + min;
    return Math.floor(random);
  }

  const handleOptionChange = (e:any, avatar:string) => {
    setSelectedOption(e.target.value);
    localStorage.setItem('avatarIcon', JSON.stringify(avatar));
  };

  const handleOptionLanguageChange = (e:any, languange:string) => {
    setSelectLanguageOption(e.target.value);
    localStorage.setItem('language', JSON.stringify(languange));
  };

  const OnChangeUser = (e: any) => {
    setUsuario(e.target.value);
    localStorage.setItem('username', JSON.stringify(usuario));
  }

  return (
  <UserSetitngs>
    <USText> Escolha o seu Avatar </USText>
    <USAvatars>
      <RadioButtonOption
        label="Opção 1"
        value="option1"
        name="options"
        checked={selectedOption === 'option1'}
        onChange={(e) => handleOptionChange(e, avatar1)}
        icon={<UserAvatarIcon avatar={avatar1} checked={selectedOption === 'option1'} />}
      />
      <RadioButtonOption
        label="Opção 2"
        value="option2"
        name="options"
        checked={selectedOption === 'option2'}
        onChange={(e) => handleOptionChange(e, avatar2)}
        icon={<UserAvatarIcon avatar={avatar2}  checked={selectedOption === 'option2'} />}
      />
      <RadioButtonOption
        label="Opção 3"
        value="option3"
        name="options"
        checked={selectedOption === 'option3'}
        onChange={(e) => handleOptionChange(e, avatar3)}
        icon={<UserAvatarIcon avatar={avatar3}  checked={selectedOption === 'option3'} />}
      />
      <RadioButtonOption
        label="Opção 4"
        value="option4"
        name="options"
        checked={selectedOption === 'option4'}
        onChange={(e) => handleOptionChange(e, avatar4)}
        icon={<UserAvatarIcon avatar={avatar4}  checked={selectedOption === 'option4'} />}
      />
    </USAvatars>
    <InputContainer>
      <InputLabel>Usuário</InputLabel>
      <Input placeholder="Digite o seu usuário" value={usuario} onChange={(e) =>OnChangeUser(e)} />
    </InputContainer>
    <Flags>
      <FlagDescription> Choose your Language</FlagDescription>
      <FlagsLanguages>
        <RadioButtonOption
            label="Opção 1"
            value="option1"
            name="optionsLang"
            checked={selectLanguageOption === 'option1'}
            onChange={(e) => handleOptionLanguageChange(e, 'pt-br')}
            icon={<FlagIcon img={br} label='Portuguese (BR)' checked={selectLanguageOption === 'option1'} />}
          />
          <RadioButtonOption
            label="Opção 2"
            value="option2"
            name="optionsLang"
            checked={selectLanguageOption === 'option2'}
            onChange={(e) => handleOptionLanguageChange(e, 'en-US')}
            icon={<FlagIcon img={eua} label='English (US)' checked={selectLanguageOption === 'option2'} />}
          />
           <RadioButtonOption
            label="Opção 3"
            value="option3"
            name="optionsLang"
            checked={selectLanguageOption === 'option3'}
            onChange={(e) => handleOptionLanguageChange(e, 'es-AR')}
            icon={<FlagIcon img={es} label='Spanish (ES)' checked={selectLanguageOption === 'option3'} />}
          />
      </FlagsLanguages>
    </Flags>

  </UserSetitngs>);
}

export default UserSettings;

const FlagLangName = styled.div`
  color:gray;
`;
const Flags = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
`;
const FlagDescription = styled.div`
  color: #fff;
`;
const FlagsLanguages = styled.div`
  display: flex;
  gap: 1rem;
`;
const Flag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:0.5rem;
`;

const FlagImage = styled.img`
  width: 4rem;
  height: 3.5rem;
`;


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;

`;

const Input = styled.input`
  width: 60%;
  border-radius: 50px;
  padding: 0.5rem;
`;




const UserSettingsName =styled.div`
 
`;
const USAvatars = styled.div`
  display: flex;
  gap:1rem;

`;
const USText = styled.div`
  color: #fff;
`;

const UserSetitngs =styled.div`
  background-color: ${defaultThemes.secondaryColor};
  border-radius: 20px;
  width: 50%;
  height: 30rem;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap:2rem;
  overflow: hidden;
`;

