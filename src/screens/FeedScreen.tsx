import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";

import { data } from "../../api/data";

const FeedScreen = () => {
  const renderItem = ({ item }: any) => (
    <Item
      name={item.name}
      model={item.model}
      crew={item.crew}
      hyperdrive_rating={item.hyperdrive_rating}
      cost_in_credits={item.cost_in_credits}
    />
  );
  const Item = (
    { name }: any,
    { model }: any,
    { crew }: any,
    { hyperdrive_rating }: any,
    { cost_in_credits }: any
  ) => (
    <View>
      <Text>{name}</Text>
      <Text>{model}</Text>
      <Text>{crew}</Text>
      <Text>{hyperdrive_rating}</Text>
      <Text>{cost_in_credits}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default FeedScreen;
