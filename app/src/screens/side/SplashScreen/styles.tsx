import { Colors } from "@constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.text,
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Domine-Bold',
  }
})

export default styles;