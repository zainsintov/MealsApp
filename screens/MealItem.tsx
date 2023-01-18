import { FC } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

interface MealItemsProps {
  title: string;
  imageURL: string;
  duration: string;
  complexity: string;
  affordability: string;
  onPress: () => void;
}

export const MealItem: FC<MealItemsProps> = ({
  title,
  imageURL,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.outerContainer}>
        <View style={styles.mealItemContainer}>
          <Image style={styles.mealItemBanners} source={{ uri: imageURL }} />
          <Text style={styles.title}>{title}</Text>
          <Text>Duration: {duration} mins</Text>
          <Text>Complexity: {complexity}</Text>
          <Text>Affordability: {affordability}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    padding: 20,
  },
  mealItemBanners: {
    width: "100%",
    height: 200,
  },
  mealItemContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
});
