import React, { ReactNode } from "react";
import { Text, ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import { useIsConnected } from "react-native-offline";
import { Colors, Headline } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/colors";

interface Props {
  title: string;
  children?: ReactNode;
  withFooter?: boolean;
}

const AppLayout = ({ title, children, withFooter = false }: Props) => {
  const isConnected = useIsConnected();
  return isConnected ? (
    <SafeAreaView style={styles.safeArea}>
      <Headline style={styles.headerText}>{title}</Headline>
      {children}
      {withFooter && <View style={styles.footer} />}
    </SafeAreaView>
  ) : (
    <Text style={styles.test}>Not connected</Text>
  );
};

export default AppLayout;

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
