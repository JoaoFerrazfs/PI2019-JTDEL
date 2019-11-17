import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Main extends Component {
    render(){
        return(
            <View>
                <LinearGradient colors={['#edfdfc', '#8ef2f2', '#127ca6']} style={styles.gradient}>
                    <Image style={styles.logo} source={require('./img/Logo.png')}/>
                    <TouchableOpacity style={styles.btnInicial} onPress={ () => this.props.navigation.navigate('Cliente')}>
                        <Text style={styles.btnText}>
                            Criar novo Projeto
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInicial}>
                        <Text style={styles.btnText}>
                            Orçamento
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInicial} onPress={ () => this.props.navigation.navigate('Projeto')}>
                        <Text style={styles.btnText}>
                            Projeto Simples
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inicial: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 15,
        alignItems: 'center',
    },
    btnInicial:{
        backgroundColor: '#931010',
        margin: 30,
        height: 80,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        margin: 24,
        fontSize: 24,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    logo: {
        maxHeight: 150,
        maxWidth: 150,
        marginBottom: 20,
    },
    gradient: {
        padding: '15%',
        alignItems: 'center',
        borderRadius: 5
    },
});