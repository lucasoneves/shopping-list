import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../theme";

type ItemProps = {
  name: string;
  isCompleted?: boolean;
};

export default function ShoppingListItem({ name, isCompleted }: ItemProps) {
  const handleDelete = () => {
    Alert.alert(
      `Are you want to delete ${name}? This action is not reversible`,
      "Vai deletar mesmo",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => console.log("Deleting..."),
          style: "destructive",
        },
      ]
    );
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        activeOpacity={0.8}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 12,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "1a759f",
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: "100%",
    boxShadow: "1 1 6 #ccc",
  },
  completedContainer: {
    backgroundColor: theme.colorGreyLight,
    borderBottomColor: theme.colorGreyLight,
  },
  itemText: {
    flex: 2,
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colorBlackLighten,
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    flex: 1,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
  buttonText: {
    fontSize: 14,
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
});
