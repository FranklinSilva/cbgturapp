import React, { Component } from 'react';

import { FlatList, Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';

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

    componentWillMount(){
        palestrante = PalestrantesData.filter(e => e.id == this.props.navigation.state.params.speakerId)[0];
        this.setState({palestrante})
    }

    render() {
        console.log(this.state.palestrante)
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Variables.colors.primary}}></SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}}>
                        <FontAwesomeIcon color={Variables.colors.whitesh} size={20} icon={faAngleLeft} />
                        <Text style={styles.pageTitle}>P A L E S T R A N T E </Text>
                        <View>
                        </View>
                    </TouchableOpacity>
                    <Image resizeMode='contain' source={this.state.palestrante.image} style={styles.image} />                
                    
                    <Text style={styles.speakerName}>{this.state.palestrante.name}</Text>

                </View>

                <View  style={styles.body}>
                    <ScrollView>
                        <View style={styles.aboutCard}>
                            <Text style={styles.aboutTitle}>SOBRE O PALESTRANTE</Text>
                            <Text style={styles.aboutText}>{this.state.palestrante.about}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}