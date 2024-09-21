import { colors } from "@/utils/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    participantCard: {
        flexDirection: "row",
        backgroundColor: colors.zinc[800],
        justifyContent: "space-between",
        height: 60,
        alignItems: "center",
        borderRadius: 5
    },
    participantName: {
        color: colors.zinc[50],
        paddingHorizontal: 16,
        fontSize: 16,
    },
    deleteParticipantButton: {
        width: 56,
        backgroundColor: "#E23C44",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    deleteParticipantButtonText: {
        color: colors.zinc[50],
        fontSize: 30
    },
})