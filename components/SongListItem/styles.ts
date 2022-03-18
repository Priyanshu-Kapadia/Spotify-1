import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15,
    },
    rightContainer:{
        justifyContent: 'center',
        marginLeft: 15,
    },
    image:{
        width: 75,
        height: 75,
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginBottom: 5,
    },
    artist: {
        color: 'lightgray',
        fontSize: 14,
    }
})

export default styles;