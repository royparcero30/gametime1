import { Text, View, StyleSheet} from "react-native";

export default function About() {
  return (
    <View
      style={styles.container}
      <text style={styles.text}>about</Text>
    
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