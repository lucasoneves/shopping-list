import { StyleSheet, View } from "react-native";
import ShoppingListItem from "./components/ShoppingListItem";

// To do: Create a button and the press function to show the alert with a message.

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
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
});
