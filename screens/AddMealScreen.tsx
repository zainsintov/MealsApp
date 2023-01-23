import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomInput } from "../components/CustomInput";

export const AddMeal = () => {
  const [mealInfo, setMealInfo] = useState({
    name: "",
    affordability: "",
    difficulty: "",
    ratting: "",
  });

  const handleAddInfo = (identifier: string, extractedValue: string) => {
    setMealInfo((currentValue) => {
      return { ...currentValue, [identifier]: extractedValue };
    });
  };
  return (
    <View style={styles.formBox}>
      <Text>Enter you meal details</Text>
      <CustomInput
        onChangeText={handleAddInfo.bind(this, "name")}
        value={mealInfo.name}
        label="Enter Meal Name"
      />
      <CustomInput
        label="Enter Meal Affordability"
        onChangeText={handleAddInfo.bind(this, "affordability")}
        value={mealInfo.affordability}
      />
      <CustomInput
        label="Enter Meal Difficulty"
        onChangeText={handleAddInfo.bind(this, "difficulty")}
        value={mealInfo.difficulty}
      />
      <CustomInput
        label="Enter Meal Ratting"
        onChangeText={handleAddInfo.bind(this, "ratting")}
        value={mealInfo.ratting}
      />

      <Text>Name: {mealInfo.name}</Text>
      <Text>Affordability: {mealInfo.affordability}</Text>
      <Text>Difficulty: {mealInfo.difficulty}</Text>
      <Text>Ratting: {mealInfo.ratting}</Text>
      {Object.keys(mealInfo).map((key) => {
        return <Text key={key}>{key}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  formBox: {
    padding: 16,
  },
});
