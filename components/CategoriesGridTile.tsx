import { FC } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

interface CategoriesGridTileProps {
  title: string;
  color: string;
  onPress: () => void;
}

export const CategoriesGridTile: FC<CategoriesGridTileProps> = ({
  title,
  color,
  onPress,
}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#FFC72C",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
