import {StyleSheet} from 'react-native';
import Variables from '../../styles';

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Variables.colors.white,
        alignItems: "stretch",
    },
    header: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Variables.colors.primary,
        shadowColor: Variables.colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20
    },
    logo: {
        width: 200,
        height: 105,
    },
    logoView:{
        backgroundColor: Variables.colors.white,
        borderRadius: 6,
        padding: 10
    },
    body: {
        flex: 8,
        backgroundColor: Variables.colors.whitesh,

    },
    normalCard: {
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: "stretch",
        backgroundColor: Variables.colors.white,
        shadowColor: Variables.colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        borderRadius: 3
    },
    normalCardTitle: {
        fontSize: 22,
        color: Variables.colors.dark,
        marginBottom: 10,
        textAlign: "left"
    },
    normalCardBody: {
        fontSize: 16,
        color: Variables.colors.regular,
        marginBottom: 10,
    },
    pestana: {
        width: 120,
        height: 120,
        marginHorizontal: 5
    },
    patrocinio: {
        width: 150,
        height: 50,
        marginHorizontal: 5

    },
    primaryButton:{
        backgroundColor: Variables.colors.primary,
        padding: 15,
        borderRadius: 6
    },
    primaryButtonText:{
        fontSize: 12,
        fontWeight: "500",
        textAlign: "center",
        color: Variables.colors.white,

    },


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
    cardDisplayContainer:{
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 10
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

})