import React, { Component } from 'react';

import { Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

import PalestrantesData from '../../components/palestrantesData';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Variables from '../../styles';

export default class PalestranteDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palestrante: {}
         };
    }

    render() {
        console.log(this.state.palestrante)
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Variables.colors.primary}}></SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                        <FontAwesomeIcon color={Variables.colors.whitesh} size={20} icon={faAngleLeft} />
                        <Text style={styles.pageTitle}>39º C B G T U R </Text>
                        <View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View  style={styles.body}>
                    <WebView source={{uri: this.props.navigation.state.params.formLink}} />
                </View>
            </View>
        )
    }
}