import { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigatorProps } from "../App";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<StackNavigatorProps, "MealDetails">;

export const MealDetails = ({ route }: Props) => {
  const id = route.params.mealId;

  const displayMeal = MEALS.find((item) => item.id === id);
  const ingredients = displayMeal?.ingredients;
  const recipeSteps = displayMeal?.steps;

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: displayMeal?.imageUrl }} />
        <View style={styles.displayDetails}>
          <Text style={styles.title}>{displayMeal && displayMeal.title}</Text>
          <Text style={styles.ingredients}>Ingredients</Text>
          {ingredients.map((item: string) => (
            <Text key={item}>
              {"\u2022 "}
              {item}
            </Text>
          ))}
          <Text style={styles.ingredients}>Recipe</Text>
          {recipeSteps.map((item: string) => (
            <Text key={item}>
              {"\u2022 "}
              {item}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  displayDetails: {
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  ingredients: {
    fontSize: 20,
    marginTop: 16,
  },
});
