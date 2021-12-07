// ./src/components/Header.tsx
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import React from "react";

export const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
});
