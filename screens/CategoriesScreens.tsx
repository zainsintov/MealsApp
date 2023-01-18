import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View } from "react-native";
import { FC } from "react";
import { CategoriesGridTile } from "../components/CategoriesGridTile";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigatorProps } from "../App";

type Props = NativeStackScreenProps<StackNavigatorProps, "CategoriesScreen">;

export const CategoriesScreen = ({ navigation }: Props) => {
  const renderItemHelper = ({
    item,
  }: {
    item: {
      id: string;
      title: string;
      color: string;
    };
  }) => {
    const tilePressHandler = () => {
      navigation.navigate("MealsOverview", { categoryID: item.id });
    };
    return (
      <CategoriesGridTile
        title={item.title}
        color={item.color}
        onPress={tilePressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItemHelper}
      numColumns={2}
    />
  );
};
