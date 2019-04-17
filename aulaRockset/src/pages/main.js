import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    
    state = {
        docs: [],
        page: 1
    };

    componentDidMount() {
        this.carregaAlunos();
    };

    carregaAlunos = async (page = 1) => {
        const response = await api.get(`/alunos/page=${page}`);

        const docs = response.data;
        this.setState({ docs: [...this.state.docs, ...docs], page });
    };

    carregaMaisAlunos = () => {
        const { page } = this.state;

        if (page === 3) return;

        const pageNumber = page+1;
        this.carregaAlunos(pageNumber)
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.nome}</Text>
            <Text style={styles.productDescription}>{item.matricula}</Text>
            <TouchableOpacity  style={styles.productButton} onPress={() => {this.props.navigation.navigate('Aluno',{aluno: item})}}> 
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    data={this.state.docs} 
                    keyExtractor={item => `${item.id}`}
                    renderItem={this.renderItem}
                    onEndReached={this.carregaMaisAlunos}
                    onEndReachedThreshold={0.1} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold'
    }
});