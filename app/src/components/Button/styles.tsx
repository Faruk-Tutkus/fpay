import { Colors } from "@constants";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    minWidth: '80%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  text: {
    color: Colors.text,
    fontSize: 18,
    fontFamily: 'Domine-Bold',
  },
  leftImage: {
    width: 22,
    height: 22,
  }
}) 

export default styles