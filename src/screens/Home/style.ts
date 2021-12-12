import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    textTitleHome: { fontSize: 18, fontWeight: "bold", padding: 10 },
    touchItem: { padding: 10, borderBottomWidth: 0.5, flexDirection: "row", },
    imageItem: { height: 100, width: 100, resizeMode: "contain", marginRight: 10 },
    viewRightItem: { flex: 1 },
    textTitle: { marginBottom: 5, fontWeight: "bold" },
    textValue: { fontWeight: "normal" }
})