import {View, StyleSheet} from "react-native";
import {Link, Stack} from "expo-router";

export default function NotFoundScreen() {
    return (
     <>
     <Stack.Screen options={{ title: "mayo ni!"}} />
     <View style={style.container}>
    <Link href="/" style={style.button}>
    go back to homie
    </Link>
    </View>
    </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },

});