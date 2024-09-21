import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { colors } from "@/utils/theme";
import { ParticipantCard } from "@/components/home/participant-card/participant-card";

export default function Home() {

  const handleAddParticipant = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sexta, 27 de Novembro de 2024.</Text>
      </View>
      <View style={styles.insertNameInputContainer}>
        <TextInput
          style={styles.insertNameInput}
          placeholder="Insira o nome do participante"
          placeholderTextColor={colors.zinc[500]}
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.insertNameButton}
          onPress={handleAddParticipant}
        >
          <Text style={styles.insertNameButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.participantsContainer}>
        <Text style={styles.participantsTitle}>Participantes</Text>
        {/* <Text style={styles.participantsInitialText}>
          Ninguém chegou no evento ainda? {"\n"} Adicione participantes a sua lista de presença
        </Text> */}
        <ParticipantCard />
      </View>
    </View>
  );
}
