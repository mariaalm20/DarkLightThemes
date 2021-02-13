import React, {useContext, useState} from 'react';
import {Container} from './styles';
import ThemeContext from '../themes/ThemeContext'
import Icon from 'react-native-vector-icons/Ionicons'
import Toggle from 'react-native-toggle-element';

const Home = () => {
  const [toggleValue, setToggleValue] = useState(true);
  const {switchTheme} = useContext(ThemeContext);

  return (
    <Container>
      <Toggle
        value={toggleValue}
        onPress={() => setToggleValue(switchTheme)}
        thumbActiveComponent={
          <Icon name="sunny" size={26} color="#FFC142" style={{marginTop: 8, marginLeft: 9}}/>
        }
        thumbInActiveComponent={
          <Icon name="moon" size={26} color="#3E4457" style={{marginTop: 8, marginLeft: 9}}/>
        }
        thumbButton = {{activeBackgroundColor: "#ffff", inActiveBackgroundColor: "#FFF" }}
        trackBar={{
          activeBackgroundColor: '#FFEFBB',
          inActiveBackgroundColor: '#383E52',
          borderActiveColor: '#FFF5D7',
          borderInActiveColor: '#3E4457',
          borderWidth: 3,
          width: 120
        }}
        trackBarStyle={{elevation: 8}}
      />
    </Container>
  );
};

export default Home;
