import type { ReactNode } from "react";
import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";
import { useIsConnected } from "react-native-offline";
import { Colors, Headline } from "react-native-paper";

interface Props {
  title: string;
  children?: ReactNode;
  withFooter?: boolean;
}

export const AppLayout = ({ title, children, withFooter = false }: Props) => {
  //const isConnected = useIsConnected();
  // return <>{isConnected ? <Text>oui</Text> : <Text>Non</Text>}</>;
  // if (isConnected) {
  //   return (
  //     <SafeAreaView style={styles.safeArea}>
  //       <Headline style={styles.headerText}>{title}</Headline>
  //       {children}
  //       {withFooter && <View style={styles.footer} />}
  //     </SafeAreaView>
  //   );
  // }
  return <Text style={styles.test}>Not connected</Text>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey200,
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  footer: {
    paddingBottom: 256,
  },
  test: {
    marginTop: 200,
  },
  safeArea: {
    backgroundColor: "black",
    flex: 1,
  },
});
