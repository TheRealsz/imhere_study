import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export function ParticipantCard() {
    return (
        <View style={styles.participantCard}>
            <Text style={styles.participantName}>
                Robson Diego
            </Text>
            <TouchableOpacity style={styles.deleteParticipantButton}>
                <Text style={styles.deleteParticipantButtonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}