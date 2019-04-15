import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/Padrao';

function parOuImpar(num) {
    const valor = num % 2 == 0 ? 'Par': 'Impar'
    return <Text style={Padrao.ex}>{valor}</Text>
}

export default props => 
    <View>
        {parOuImpar(props.numero)}
        {/* {
            props.numero % 2 == 0 ? <Text style={Padrao.ex}>Par</Text> : <Text style={Padrao.ex}>Impar</Text>
        } */}
    </View>