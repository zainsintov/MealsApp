import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CustomButton } from "./components/CustomButton";
import { CategoriesScreen } from "./screens/CategoriesScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverview } from "./screens/MealsOverview";
import { MealDetails } from "./screens/MealDetails";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddMeal } from "./screens/AddMealScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

export type StackNavigatorProps = {
  CategoriesScreen: undefined;
  MealsOverview: { categoryID: {} };
  MealDetails: { mealId: {} };
  AddMeal: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorProps>();
const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();

// const DrawerMenu = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="drawerCategories" component={CategoriesScreen} />
//       <Drawer.Screen name="favorites" component={FavoritesScreen} />
//     </Drawer.Navigator>
//   );
// };

// const TabsMenu = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="drawerCategories"
//         component={CategoriesScreen}
//         options={{ title: "Home" }}
//       />
//       <Tab.Screen name="favorites" component={FavoritesScreen} />
//     </Tab.Navigator>
//   );
// };

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "green" },
          }}
        >
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen name="MealDetails" component={MealDetails} />
          <Stack.Screen name="AddMeal" component={AddMeal} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    width: 300,
    border: "1px solid",
  },
});
