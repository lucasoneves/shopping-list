import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { theme } from "./theme";

// To do: Create a button and the press function to show the alert with a message.

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you want to delete? This action is not reversible",
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
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
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
