 import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import { Inverter, MegaSena } from './componentes/Multi';
import Menu from './Menu';

const Root = createStackNavigator({
  Menu,
})
const App = createAppContainer(Root);
export default App;
// export default class App extends Component {
//   render() {
//     return(
//         <View style={styles.container}>
//           <Simples texto='Flexivel'/>
//           <ParImpar numero={31}/>
//           <Inverter texto='React Nativo'/>
//           <MegaSena numeros={8}/>
//         </View>
//     )
//   }
// }

