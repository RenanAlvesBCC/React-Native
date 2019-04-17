import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from '../estilo/Padrao';

export default class Evento extends Component {
    
    state = {
        texto: ''
    }

    alterarTexto = str => {
        this.setState({ texto: str })
    }


    render() {
        return (
            <View>
                <Text style={Padrao.input}>{this.state.texto}</Text>
                <TextInput value={this.setState.texto} style={Padrao.input} onChangeText={this.alterarTexto} />
            </View>
        )
    }
}