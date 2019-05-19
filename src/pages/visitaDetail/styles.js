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
        marginTop: 0
    },
    day: {
        color: Variables.colors.white,
        fontSize: 12,
        fontWeight: '300',
        textAlign: "center"
    },
    tax: {
        color: Variables.colors.white,
        fontSize: 14,
        fontWeight: '400',
        textAlign: "center",
        marginBottom: 10
    },
    header: {
        flex: 2,
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
        backgroundColor: Variables.colors.white,
        paddingBottom: 30
    },
    aboutText:{
        fontSize: 14,
        color: Variables.colors.regular,
        lineHeight: 20,
        marginTop: 10
    },
    aboutTitle:{
        fontSize: 12,
        color: Variables.colors.regular,
        fontWeight: "600",
    },
    image: {
        width: 'auto',
        height: 150,
    },
    btn:{
        backgroundColor: Variables.colors.primary,
        padding: 10,
        borderRadius: 3,
        marginHorizontal: 5,
        marginVertical: 15,
        flex:1
    },
    btnText:{
        color: Variables.colors.whitesh,
        fontSize: 12,
        fontWeight: "500",
        textAlign: "center"
    },
})