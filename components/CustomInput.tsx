import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface ChangeInputProps {
  onChangeText: (title: string) => void;
  value: string;
  label: string;
}

export const CustomInput = ({
  value,
  onChangeText,
  label,
}: ChangeInputProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textArea}
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter Meal Name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  textArea: {
    paddingLeft: 8,
    height: 40,
    width: "100%",
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 1,
  },
});
