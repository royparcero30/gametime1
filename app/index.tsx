import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello po</Text>
     
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25297e',
  },
  text: {
    color: 'white',
  },
  button:{
    fontSize:20,
    textDecorationLine: "underline",
    color: "#fff",
  
  },
});
