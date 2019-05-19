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
    },
    speakerName: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600",
        color: Variables.colors.white,
        marginTop: -20
    },
    header: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: Variables.colors.primary,
        padding: 10,
        paddingHorizontal: 20,
    },
    body: {
        flex: 8,
        backgroundColor: Variables.colors.whitesh,

    },
    aboutCard:{
        padding: 15,
        borderRadius: 6,
        margin: 20,
        backgroundColor: Variables.colors.white
    },
    aboutText:{
        fontSize: 14,
        color: Variables.colors.gray,
        lineHeight: 20,
        marginTop: 10
    },
    aboutTitle:{
        fontSize: 12,
        color: Variables.colors.regular,
        fontWeight: "600",
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 70,
        shadowColor: Variables.colors.whitesh,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.84,
        alignSelf: 'center'
    },
})