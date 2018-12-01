import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image,

} from 'react-native';
import Topo from './components/Topo';
import Icone from './components/Icone';

class App3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    }
  }

  jokenpo(escolhaUsuario) {

    //gera número aleatório ( 0, 1, 2)
    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';

    if (escolhaComputador == 'pedra') {
      if (escolhaUsuario == 'pedra') {
        resultado = 'Tie!';
      }

      if (escolhaUsuario == 'papel') {
        resultado = 'You Win!';
      }

      if (escolhaUsuario == 'tesoura') {
        resultado = 'You Lose!';
      }
    }

    if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'papel') {
        resultado = 'Tie!';
      }

      if (escolhaUsuario == 'tesoura') {
        resultado = 'You Win!';
      }

      if (escolhaUsuario == 'pedra') {
        resultado = 'You Lose!';
      }
    }

    if (escolhaComputador == 'tesoura') {
      if (escolhaUsuario == 'tesoura') {
        resultado = 'Tie!';
      }

      if (escolhaUsuario == 'pedra') {
        resultado = 'You Win!';
      }

      if (escolhaUsuario == 'papel') {
        resultado = 'You Lose!';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });


  }

  render() {
    return (
      <View>
        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.opcoes}>
            <Button title="pedra" onPress={() => { this.jokenpo('pedra') }} />
          </View>
          <View style={styles.opcoes}>
            <Button title="papel" onPress={() => { this.jokenpo('papel') }} />
          </View>
          <View style={styles.opcoes}>
            <Button title="tesoura" onPress={() => { this.jokenpo('tesoura') }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}> {this.state.resultado}</Text>

          <Icone esolha={this.state.escolhaComputador} jogador="COM" />
          <Icone esolha={this.state.escolhaUsuario} jogador="Player" />


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  opcoes: {
    width: 90,

  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  palco: {
    marginTop: 20,
    alignItems: 'center',
  },
  txtResultado: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 25,
    height: 60,
  },

})





AppRegistry.registerComponent('App3', () => App3);