import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "./MealDetails";
import { MealItem } from "./MealItem";

interface MealsOverviewProps {
  route: any;
  navigation: any;
}

export const MealsOverview: FC<MealsOverviewProps> = ({
  route,
  navigation,
}) => {
  const id = route.params.categoryID;

  const displayMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(id) >= 0
  );

  const renderItemHelper = ({
    item,
  }: {
    item: {
      id: string;
      title: string;
      imageUrl: string;
      duration: string;
      complexity: string;
      affordability: string;
    };
  }) => {
    const handleMealDetailsDisplay = () => {
      navigation.navigate("MealDetails", { mealId: item.id });
    };
    return (
      <MealItem
        title={item.title}
        imageURL={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onPress={handleMealDetailsDisplay}
      />
    );
  };

  return (
    <FlatList
      data={displayMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderItemHelper}
    />
  );
};
