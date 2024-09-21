import { StyleSheet } from "react-native";
import { colors } from '@/utils/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 70,
        paddingHorizontal: 30,
        backgroundColor: colors.zinc[950],
        gap: 44,
    },
    headerContainer: {
        backgroundColor: colors.zinc[950]
    },
    eventName: {
        fontSize: 30,
        color: colors.zinc[50],
        fontWeight: "700",
    },
    eventDate: {
        fontSize: 18,
        color: colors.zinc[600]
    },
    insertNameInputContainer: {
        flexDirection: "row",
        gap: 8,
    },
    insertNameInput: {
        backgroundColor: colors.zinc[800],
        height: 56,
        flex: 1,
        color: colors.zinc[50],
        padding: 16,
        borderRadius: 4,
        fontSize: 14,
    },
    insertNameButton: {
        width: 56,
        height: 56,
        backgroundColor: colors.charlotte[400],
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    insertNameButtonText: {
        color: colors.zinc[50],
        fontSize: 24
    },
    participantsContainer: {
        gap: 24
    },
    participantsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.zinc[50]
    },
    participantsInitialText: {
        fontSize: 14,
        textAlign: "center",
        color: colors.zinc[50]
    }
});