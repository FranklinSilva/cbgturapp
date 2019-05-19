import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Variables.colors.white,
        alignItems: "stretch",
    },
    pageTitle:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "300",
        color: Variables.colors.white,
        marginBottom: -20
    },
    header: {
        flex: 2,
        alignItems: "stretch",
        justifyContent: "space-around",
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
    programacaoList: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }, 
    programacaoListItem: {
        padding: 10,
        borderRadius: 30,
        width: 50,
        backgroundColor: Variables.colors.whitesh,
        shadowColor: Variables.colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    programacaoListItemText:{
        fontSize: 16,
        color: Variables.colors.primary,
        textAlign: "center"
    },
    programacaoListItemTextMonth:{
        fontSize: 9,
        color: Variables.colors.primary,
        textAlign: "center",
        marginTop: -5
    },
    programacaoListItemUn: {
        padding: 10,
        borderRadius: 30,
        width: 50,
    },
    programacaoListItemTextUn:{
        fontSize: 16,
        color: Variables.colors.whitesh,
        textAlign: "center"
    },
    programacaoListItemTextMonthUn:{
        fontSize: 9,
        color: Variables.colors.whitesh,
        textAlign: "center",
        marginTop: -5
    },
    body: {
        flex: 10,
        backgroundColor: Variables.colors.whitesh,

    },
})