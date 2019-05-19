import React, { Component } from 'react';

import { FlatList, Text, Image, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';

import ProgramacaoData from '../../components/programacaoData';

import styles from './styles';

import ProgramacaoItem from '../../components/programacaoItem';

export default class Programacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daySelected: 0
         };
    }

    renderItem = ({item}) => (
        <ProgramacaoItem
            hour={item.hour}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            icon={item.icon}
            obs={item.obs}
            navigation={this.props.navigation}
            speakerId={item.speakerId}
            formLink={item.formLink}
        />
    )

    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: "#fff"}} />
                <View style={styles.header}>
                    <Text style={styles.pageTitle}>P R O G R A M A Ç Ã O</Text>
                    <View style={styles.programacaoList}>
                        <TouchableOpacity onPress={() => this.setState({daySelected: 0})} 
                            style={this.state.daySelected == 0 ? styles.programacaoListItem : styles.programacaoListItemUn}>
                            <Text style={this.state.daySelected == 0 ? styles.programacaoListItemText : styles.programacaoListItemTextUn}>22</Text>
                            <Text style={this.state.daySelected == 0 ? styles.programacaoListItemTextMonth : styles.programacaoListItemTextMonthUn}>MAIO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({daySelected: 1})} 
                            style={this.state.daySelected == 1 ? styles.programacaoListItem : styles.programacaoListItemUn}>
                            <Text style={this.state.daySelected == 1 ? styles.programacaoListItemText : styles.programacaoListItemTextUn}>23</Text>
                            <Text style={this.state.daySelected == 1 ? styles.programacaoListItemTextMonth : styles.programacaoListItemTextMonthUn}>MAIO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({daySelected: 2})} 
                            style={this.state.daySelected == 2 ? styles.programacaoListItem : styles.programacaoListItemUn}>
                            <Text style={this.state.daySelected == 2 ? styles.programacaoListItemText : styles.programacaoListItemTextUn}>24</Text>
                            <Text style={this.state.daySelected == 2 ? styles.programacaoListItemTextMonth : styles.programacaoListItemTextMonthUn}>MAIO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({daySelected: 3})} 
                            style={this.state.daySelected == 3 ? styles.programacaoListItem : styles.programacaoListItemUn}>
                            <Text style={this.state.daySelected == 3 ? styles.programacaoListItemText : styles.programacaoListItemTextUn}>25</Text>
                            <Text style={this.state.daySelected == 3 ? styles.programacaoListItemTextMonth : styles.programacaoListItemTextMonthUn}>MAIO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({daySelected: 4})} 
                            style={this.state.daySelected == 4 ? styles.programacaoListItem : styles.programacaoListItemUn}>
                            <Text style={this.state.daySelected == 4 ? styles.programacaoListItemText : styles.programacaoListItemTextUn}>26</Text>
                            <Text style={this.state.daySelected == 4 ? styles.programacaoListItemTextMonth :styles. programacaoListItemTextMonthUn}>MAIO</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <View  style={styles.body}>
                    <ScrollView>
                        <FlatList 
                                data={ProgramacaoData[this.state.daySelected]}
                                renderItem={this.renderItem} />
                    </ScrollView>
                </View>

            </View>
        )
    }
}