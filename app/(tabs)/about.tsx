import { Text, View, StyleSheet} from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
    backgroundColor: "#25297e",
  },
});