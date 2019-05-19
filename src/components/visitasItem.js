import React, { Component } from 'react';

import { Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Variables from '../styles';


export default class VisitasItem extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return(
            <View style={styles.card}>
                    
                <Image resizeMode='cover' source={this.props.image} style={styles.image} />                

                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.day}>{this.props.days}</Text>
                <Text style={styles.tax}>{this.props.taxa}</Text>

                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("Visita", {id: this.props.id})}>
                    <Text style={styles.btnText}>MAIS DETALHES</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const win = Dimensions.get('window');
console.log(win)

const styles = StyleSheet.create({
    card:{
        margin: 10,
        padding: 15,
        borderRadius: 3,
        shadowColor: Variables.colors.whitesh,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        elevation: 3,
        backgroundColor: Variables.colors.white
    },
    hour: {
        color: Variables.colors.brown,
        fontSize: 10,
        fontWeight: '800'
    },
    cardDisplayContainer:{
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        width: 'auto',//win.width - 23,
        height: 200,
    },
    icon:{
        marginRight: 15,
    },
    containerLeft:{
        flexWrap: 'wrap',
        flexDirection: 'column',
        flex: 1
    },
    title: {
        color: Variables.colors.regular,
        fontSize: 16,
        fontWeight: '600',
        textAlign: "center",
        marginTop: 10
    },
    day: {
        color: Variables.colors.gray,
        fontSize: 12,
        fontWeight: '300',
        textAlign: "center"
    },
    tax: {
        color: Variables.colors.regular,
        fontSize: 14,
        fontWeight: '400',
        textAlign: "center",
        marginBottom: 10
    },
    subtitle:{
        color: Variables.colors.gray,
        fontSize: 12,
        fontWeight: '400'
    },
    obs:{
        marginVertical: 5,
        fontSize: 10,
        color: Variables.colors.dark,

    },
    btn:{
        backgroundColor: Variables.colors.primary,
        padding: 10,
        borderRadius: 3,
    },
    btnText:{
        color: Variables.colors.whitesh,
        fontSize: 12,
        fontWeight: "500",
        textAlign: "center"
    },
})