import React, { Component } from 'react';

import { Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Variables from '../styles';


export default class PalestranteItem extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Palestrante", {speakerId: this.props.speakerId})} style={styles.card}>
                <View style={styles.cardDisplayContainer}>
                    
                    <Image resizeMode='contain' source={this.props.image} style={styles.image} />                

                    <View style={styles.containerLeft}>
                        <Text style={styles.title}>{this.props.title}</Text>

                        {!!this.props.subtitle ?
                        <Text style={styles.subtitle}>{this.props.subtitle}</Text> : null }
                    </View>
                    <View style={styles.icon}>
                        <FontAwesomeIcon color={Variables.colors.dark} size={20} icon={faAngleRight} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

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
        width: 70,
        height: 70,
        borderRadius: 70,
        marginRight: 15,
        shadowColor: Variables.colors.whitesh,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
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
        fontWeight: '600'
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