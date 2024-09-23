import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface IParticipantCard {
    index: number
    participantName: string
    handleRemoveParticipant: (index: number) => void
}

export function ParticipantCard({ participantName, handleRemoveParticipant, index }: IParticipantCard) {
    return (
        <View style={styles.participantCard}>
            <Text style={styles.participantName}>
                {participantName}
            </Text>
            <TouchableOpacity
                style={styles.deleteParticipantButton}
                onPress={() => handleRemoveParticipant(index)}>
                <Text style={styles.deleteParticipantButtonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}