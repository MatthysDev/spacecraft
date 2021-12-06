import React from "react";
import { Text, View } from "react-native";
import AppLayout from "./AppLayout";
import Offline from "./src/components/Offline";

const App = () => {
  // Query data with fetchAsync
  // const { status, error, data } = useQuery('starships', () =>
  //   fetchAsync(`https://swapi.dev/api/starships/`)
  // );

  return (
    <AppLayout title="Starships">
      <Text></Text>
    </AppLayout>
  );
};

export default App;
