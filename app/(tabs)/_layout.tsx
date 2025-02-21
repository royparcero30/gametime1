import {Tabs} from "expo-router";

export default function tabslayout() {
  return (
     <Tabs>
      <Tabs.Screen
       name= "index"
        options={{
        headerTitle: "roy parcero",
        HeaderLeft: {} => <></>,
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
