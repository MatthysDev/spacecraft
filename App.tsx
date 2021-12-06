import React from "react";
import { Text, View } from "react-native";
import AppLayout from "./AppLayout";

import { NetworkProvider } from "react-native-offline";
import FeedScreen from "./src/screens/FeedScreen";

const App = () => {
  // Query data with fetchAsync
  // const { status, error, data } = useQuery('starships', () =>
  //   fetchAsync(`https://swapi.dev/api/starships/`)
  // );

  return (
    <NetworkProvider>
      <AppLayout title="Starships">
        <FeedScreen />
      </AppLayout>
    </NetworkProvider>
  );
};

export default App;
