import React, { Component } from 'react';

import {
    Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView
  } from 'react-native';

import styles from './styles';
import openMap from 'react-native-open-maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";

export default class Evento extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    _goToPestana = () => {
        //openMap({ latitude: -12.9897241, longitude: -38.5221223 });
        openMap({ latitude: -12.968759, longitude: -38.5074646 });
      }
      
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: "#fff"}} />
                <View style={styles.header}>
                    <View style={styles.logoView}>
                        <Image resizeMode='contain' source={require('../../images/logo.png')} style={styles.logo} />                
                    </View>
                </View>
                <View  style={styles.body}>
                    <ScrollView>
                        {moment().format('DDMMYYYY') >= '26052019' ?
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("EventoAvaliacao", {formLink: 'https://docs.google.com/forms/d/1EKUf5CA9jt6g1kxS3xoC2CJlhvM0wTYmmhnhM0hBZXs/edit'})} style={styles.card}>
                            <View style={styles.cardDisplayContainer}>
                                <View style={styles.containerLeft}>
                                    <Text style={styles.title}>Avalie o 39º CBGTUR</Text>
                                    <Text style={styles.subTitle}>Sua opinião é muito importante para nós</Text>
                                </View>
                                <View style={styles.icon}>
                                    <FontAwesomeIcon color={Variables.colors.dark} size={20} icon={faAngleRight} />
                                </View>
                            </View>
                        </TouchableOpacity> : null }

                        <View style={styles.normalCard}>
                            <Text style={styles.normalCardTitle}>O Evento</Text>
                            <Text style={styles.normalCardBody}>
                                O Congresso Brasileiro de Guias de Turismo –
                                CBGTUR, é um evento anual promovido pela Federação Nacional dos Guias de
                                Turismo do Brasil – FENAGTUR e organizado pelos sindicatos estaduais. A sua
                                39ª edição acontecerá no Centro Histórico de Salvador, de 22 a 26 de maio de
                                2019, no Hotel Pestana Convento do Carmo.
                            </Text>
                        </View>

                        <View style={styles.normalCard}>
                            <Text style={styles.normalCardTitle}>O Local</Text>
                            <Text style={styles.normalCardBody}>
                                O Pestana Convento do Carmo, localizado no Centro Histórico de Salvador, no
                                bairro do Santo Antônio, foi instalado num prédio tombado pela UNESCO como
                                Patrimônio Histórico da Humanidade, o Convento do Carmo, que começou a ser
                                construído em 1586 pela Ordem Primeira dos Freis Carmelitas. Bem próximo
                                ao Pelourinho, é o primeiro hotel histórico de luxo do Brasil.
                            </Text>
                            <Text style={styles.normalCardBody}>
                                O Aeroporto Internacional Luiz Eduardo Magalhães, em Salvador, fica a 35
                                quilômetros de distância.
                            </Text>
                            <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                                <Image resizeMode='contain' source={require('../../images/pestanaBack.jpg')} style={styles.pestana} />                
                                <Image resizeMode='contain' source={require('../../images/pestanaNight.jpg')} style={styles.pestana} />                
                            </View>
                            <TouchableOpacity style={styles.primaryButton} onPress={() => this._goToPestana()}>
                                <Text style={styles.primaryButtonText}>VEJA A LOCALIZAÇÃO</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Acessos")} style={styles.card}>
                            <View style={styles.cardDisplayContainer}>
                                <View style={styles.containerLeft}>
                                    <Text style={styles.title}>Congressista Cbgtur tem Acesso Gratuito a Pontos Turísticos da Cidade</Text>
                                </View>
                                <View style={styles.icon}>
                                    <FontAwesomeIcon color={Variables.colors.dark} size={20} icon={faAngleRight} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.normalCard}>
                            <Text style={styles.normalCardTitle}>Dúvidas e Questionamentos?</Text>
                            <Text style={styles.normalCardBody}>
                                Contate-nos pelo (71) 99994-6954 ou através do contato@cbgtur2019.com.br
                            </Text>
                        </View>

                        <View style={styles.normalCard}>
                            <Text style={styles.normalCardTitle}>Patrocínio</Text>
                            <View style={{flexDirection: 'column', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                                <Image resizeMode='contain' source={require('../../images/bahiatursa.jpg')} style={styles.patrocinio2} />                
                                <Image resizeMode='contain' source={require('../../images/secultssa.jpg')} style={styles.patrocinio} />                
                            </View>
                        </View>

                        <View style={styles.normalCard}>
                            <Text style={styles.normalCardTitle}>Realização</Text>
                            <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                                <Image resizeMode='contain' source={require('../../images/fenagtur.jpg')} style={styles.pestana} />                
                                <Image resizeMode='contain' source={require('../../images/singtur.jpg')} style={styles.pestana} />                
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                                <Image resizeMode='contain' source={require('../../images/sole.jpg')} style={styles.pestana} />               
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Parceiros")} style={styles.card}>
                            <View style={styles.cardDisplayContainer}>
                                <View style={styles.containerLeft}>
                                    <Text style={styles.title}>Confira nossos Parceiros</Text>
                                </View>
                                <View style={styles.icon}>
                                    <FontAwesomeIcon color={Variables.colors.dark} size={20} icon={faAngleRight} />
                                </View>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

            </View>
        )
    }
}