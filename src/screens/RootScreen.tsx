import React from "react";
import { NetworkProvider } from "react-native-offline";
import { Navigator } from "../navigation/Navigator";
import { AppLayout } from "../../AppLayout";
// import { FeedScreen } from "./FeedScreen";
import { LoginScreen } from "./LoginScreen";

export const RootScreen = () => {
  // Query data with fetchAsync
  // const { status, error, data } = useQuery('starships', () =>
  //   fetchAsync(`https://swapi.dev/api/starships/`)
  // );

  return (
    <NetworkProvider>
      <Navigator />
    </NetworkProvider>
  );
};
