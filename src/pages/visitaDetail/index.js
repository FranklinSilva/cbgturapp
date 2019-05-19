import React, { Component } from 'react';

import { FlatList, Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';

import VisitasData from '../../components/visitasData';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Variables from '../../styles';

export default class VisitaDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visita: {},
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeoj7wpgL4wm2MniqEb-rKY97IX281mduVN81IepkzFCfmaAQ/viewform?usp=sf_link"
         };
    }

    componentWillMount(){
        visita = VisitasData.filter(e => e.id == this.props.navigation.state.params.id)[0];
        this.setState({visita})
    }

    render() {
        console.log(this.state.visita)
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Variables.colors.primary}}></SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                        <View style={[{flex:1}]}>
                            <FontAwesomeIcon color={Variables.colors.whitesh} size={20} icon={faAngleLeft} />
                        </View>
                        <Text style={[{flex:2}, styles.pageTitle]}>V I S I T A</Text>
                        <View style={[{flex:1}]}>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.speakerName}>{this.state.visita.title}</Text>
                        <Text style={styles.day}>{this.state.visita.days}</Text>
                        <Text style={styles.tax}>{this.state.visita.taxa}</Text>
                    </View>

                </View>

                <View  style={styles.body}>
                    <Image resizeMode='cover' source={this.state.visita.image} style={styles.image} />                

                    <ScrollView style={styles.aboutCard}>
                        <Text style={styles.aboutTitle}>SOBRE A VISITA</Text>
                        {this.state.visita.content.map((e, i) => <Text key={i} style={styles.aboutText}>{e}</Text>)}

                        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("VisitaReservar", {formLink: this.state.link})}>
                            <Text style={styles.btnText}>Realizar Reserva</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}