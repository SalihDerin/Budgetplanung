import { Text, TextInput, View, StyleSheet } from "react-native";

type Props = {
    label: string;
    value: string;
    income: boolean;
}

export default function EmojiSticker({label, value, income}: Props) {
    

    return(
        <View style={styles.inputRow}>
            <Text>{label}</Text>
            <TextInput style={[styles.input, {color: income ? "#50C878" : "#FF3131"}]} value={value}/>
        </View>
    )


}

const styles = StyleSheet.create({
    input: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#FFFFFF",
      },
      inputRow: {
        flexDirection: "row",
        alignItems: "center",
      },
})