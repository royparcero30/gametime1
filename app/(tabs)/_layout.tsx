import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
export default function tabslayout() {
  return (
     <Tabs
     screenOptions={{
        tabBarActiveBackgroundColor: "#ffd33d",
        headerStyle: {
            backgroundColor: "#25292e",
        },
     }}
     >
      <Tabs.Screen
       name= "index"
        options={{
        headerTitle: "roy parcero",
       tabBarIcon: ({focused, color }) => (
         <Ionicons
          name={focused ? "home-sharp" : "home-outline"}
          color={color}
        size={30}
         />
       ),
      }}
      />
      <Tabs.Screen
       name="about"
      options={{
        headerTitle: "About",
      }}
      />
      <Tabs.Screen name="not-found" options={{}} />
      </Tabs>
  );
}
