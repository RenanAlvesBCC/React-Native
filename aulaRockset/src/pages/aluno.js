import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const aluno = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.textoDoAluno}>Querido {navigation.state.params.aluno.nome}, alteramos o estado da sua aprovação para: {navigation.state.params.aluno.aprovado === true ? 'APROVADO' : 'REPROVADO'}</Text>
    </View>
);

aluno.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.aluno.nome
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },
    textoDoAluno: {
        padding: 20,
        fontSize: 16,
        color: '#333',
        marginTop: 5,
        lineHeight: 24,
    }
});

export default aluno;