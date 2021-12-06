import React from "react";
import { useStarships } from "../hooks/useStarships";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

interface propsCard {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
}
const FeedScreen = () => {
  const { isLoading, isError, data } = useStarships();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>:(</Text>;
  }
  const renderItem = ({ item }: any) => (
    <FeedCard
      name={item.name}
      model={item.model}
      crew={item.crew}
      hyperdrive_rating={item.hyperdrive_rating}
      cost_in_credits={item.cost_in_credits}
    />
  );
  const FeedCard = ({
    name,
    model,
    crew,
    hyperdrive_rating,
    cost_in_credits,
  }: propsCard) => (
    <Card style={styles.card}>
      <Card.Title title={name} />
      <Card.Content>
        <Title style={styles.cardTitle}>{model}</Title>

        <Paragraph>{crew}</Paragraph>
        <Paragraph>{hyperdrive_rating}</Paragraph>
        <Paragraph>{cost_in_credits}</Paragraph>
      </Card.Content>
    </Card>
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
    backgroundColor: "#000000",
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    margin: 5,
    padding: 5,
  },
  cardTitle: {
    fontSize: 16,
  },
});

export default FeedScreen;
