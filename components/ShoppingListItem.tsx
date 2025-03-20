import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../theme";

type ItemProps = {
  name: string;
};

export default function ShoppingListItem({ name }: ItemProps) {
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
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "1a759f",
    paddingHorizontal: 8,
    paddingVertical: 16,
    width: "100%",
  },
  itemText: {
    flex: 2,
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
