import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class dadosCliente extends Component {
    render(){
        state = {
            text: ''
        };
        return(
            <View>
                <LinearGradient colors={['#edfdfc', '#8ef2f2', '#127ca6']} style={styles.gradient}>
                    <Image style={styles.logo} source={require('./img/Logo.png')}/>
                    <Text style={styles.textTitle}>
                        Dados do Cliente
                    </Text>
                    <View style={{marginBottom: 25, marginTop: 15, flexDirection: 'row'}}>
                        <Text style={styles.text}>
                            Nome:
                        </Text>
                        <TextInput onChangeText={text => this.setState({ text })} style={styles.textInput}/>
                    </View>
                    <View style={{marginBottom: 25, marginTop: 15, flexDirection: 'row'}}>
                        <Text style={styles.text}>
                            Email:
                        </Text>
                        <TextInput onChangeText={text => this.setState({ text })} style={styles.textInput}/>
                    </View>
                    <TouchableOpacity style={styles.btnInicial} onPress={ () => this.props.navigation.navigate('Projeto')}>
                        <Text style={styles.btnText}>
                            Avançar
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
        marginEnd: 10,
        width: 80,
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
    textInput: {
        fontSize: 20,
        width: 250,
        color: '#000000',
        backgroundColor: '#FFFFFF'
    },
});