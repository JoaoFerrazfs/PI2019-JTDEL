import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class informacaoProjeto extends Component {
    render(){
        state = {
            text: ''
        };
        return(
            <View>
                <LinearGradient colors={['#edfdfc', '#8ef2f2', '#127ca6']} style={styles.gradient}>
                    <Image style={styles.logo} source={require('./img/Logo.png')}/>
                    <Text style={styles.textTitle}>
                        Informações do Projeto
                    </Text>
                    <View>
                        <Text style={styles.text}>
                            Quantidade de Cômodos
                        </Text>
                        <TextInput onChangeText={text => this.setState({ text })} style={styles.textInput}/>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Tamanho da Casa
                        </Text>
                        <View style={{marginBottom: 25, marginTop: 15, flexDirection: 'row'}}>
                            <TextInput onChangeText={text => this.setState({ text })} style={styles.textInputTamanho}/>
                            <Text style={styles.textX}>
                                X
                            </Text>
                            <TextInput onChangeText={text => this.setState({ text })} style={styles.textInputTamanho}/>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnInicial}>
                        <Text style={styles.btnText}>
                            Calcular
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
        padding: 8,
        alignItems: 'center',
    },
    btnInicial:{
        backgroundColor: '#931010',
        margin: 20,
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
        padding: '20%',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontSize: 24,
        width: 300,
        textAlign: 'center',
        color: '#000000',
    },
    textTitle: {
        marginBottom: 40, 
        fontSize: 24, 
        textAlign: 'center', 
        width: 300, 
        fontWeight: 'bold'
    },
    textX: {
        fontSize: 24, 
        textAlign: 'center',
        marginEnd: 15,
        marginStart: 15
    },
    textInput: {
        fontSize: 20,
        width: 300,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        marginBottom: 25,
        marginTop: 15,
        textAlign: 'center',
    },
    textInputTamanho: {
        fontSize: 20,
        width: 125,
        color: '#000000',
        backgroundColor: '#FFFFFF'
    },
});