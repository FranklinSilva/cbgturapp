import React, { Component } from 'react';

import { FlatList, Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';

import PalestrantesData from '../../components/palestrantesData';

import styles from './styles';

import PalestranteItem from '../../components/palestranteItem';

import Variables from '../../styles';

export default class Palestrantes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daySelected: 0
         };
    }

    renderItem = ({item}) => (
        <PalestranteItem
            title={item.name}
            subtitle={item.bio}
            image={item.image}
            navigation={this.props.navigation}
            speakerId={item.id}
        />
    )

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Variables.colors.primary}}></SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.pageTitle}>P A L E S T R A N T E S</Text>
                </View>
                <View  style={styles.body}>
                    <ScrollView>
                        <FlatList 
                                data={PalestrantesData}
                                renderItem={this.renderItem} />
                    </ScrollView>
                </View>

            </View>
        )
    }
}