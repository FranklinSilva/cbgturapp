import React, { Component } from 'react';

import { FlatList, Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';

import VisitasData from '../../components/visitasData';

import styles from './styles';

import VisitasItem from '../../components/visitasItem';

import Variables from '../../styles';

export default class Palestrantes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daySelected: 0
         };
    }

    renderItem = ({item}) => (
        <VisitasItem
            title={item.title}
            days={item.days}
            taxa={item.taxa}
            image={item.image}
            navigation={this.props.navigation}
            id={item.id}
        />
    )

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: Variables.colors.primary}}></SafeAreaView>
                <View style={styles.header}>
                    <Text style={styles.pageTitle}>V I S I T A S  T É C N I C A S</Text>
                </View>
                <View  style={styles.body}>
                    <ScrollView>
                        <FlatList 
                                data={VisitasData}
                                renderItem={this.renderItem} />
                    </ScrollView>
                </View>

            </View>
        )
    }
}