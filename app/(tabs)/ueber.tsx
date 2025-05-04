import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#fff'
  }
});

export default function ÜberAnsicht() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Informationen über die App finden Sie hier.
      </Text>
      {/* <Link href="/" style={styles.button}>
        Zurück zur Start-Ansicht
      </Link> */}
    </View>
  );
}
