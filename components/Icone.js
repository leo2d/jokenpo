import React, { Component } from 'react';
import { Text, View, Image, AppRegistry, StyleSheet, } from 'react-native';

class Icone extends Component {
    render() {

        if (this.props.esolha == 'pedra') {
            return (
                <View style={styles.iconeContainer}>
                    <Text style={styles.inconeText}>{this.props.jogador}</Text>
                    <Image source={require('../imgs/pedra.png')} />
                </View>);
        } else if (this.props.esolha == 'papel') {
            return (
                <View style={styles.iconeContainer}>
                    <Text style={styles.inconeText}>{this.props.jogador}</Text>
                    <Image source={require('../imgs/papel.png')} />
                </View>);
        } else if (this.props.esolha == 'tesoura') {
            return (
                <View style={styles.iconeContainer}>
                    <Text style={styles.inconeText}>{this.props.jogador}</Text>
                    <Image source={require('../imgs/tesoura.png')} />
                </View>);
        } else {
            return false;
        }
    }
}

const styles = StyleSheet.create({
    iconeContainer: {
        alignItems: 'center',
        marginTop: 10,

    },
    inconeText: {
        fontSize: 16,
        color: 'blue',
        fontWeight: '200',

    },
})

export default Icone;