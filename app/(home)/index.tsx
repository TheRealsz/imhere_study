import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { colors } from "@/utils/theme";
import { ParticipantCard } from "@/components/home/participant-card/participant-card";
import { useState } from "react";
import { Formik } from 'formik';
import Toast from 'react-native-root-toast';
import { addParticipantSchema, IAddParticipant, initialAddParticipantValue } from "@/schemas/addParticipant.schema";

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const todayDate = new Date()
  const formattedDate = todayDate.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  const handleAddParticipant = ({ name }: IAddParticipant) => {
    const isNameAdded = participants.find(participant => participant === name)
    if (isNameAdded) {
      return Toast.show('Nome já adicionado a lista.', {
        backgroundColor: "#d45454",
      });
    }

    if (participants.length > 0) {
      setParticipants([...participants, name])
    } else {
      setParticipants([name])
    }

  }

  const handleRemoveParticipant = (index: number) => {
    if (participants) {
      const newParticipants = participants.filter((_, i) => i !== index)
      setParticipants(newParticipants)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.eventName}>ImHere</Text>
        <Text style={styles.eventDate}>{formattedDate}</Text>
      </View>
      <Formik
        initialValues={initialAddParticipantValue}
        onSubmit={addParticipantValue => handleAddParticipant(addParticipantValue)}
        validationSchema={addParticipantSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <View style={styles.insertNameInputContainer}>
              <TextInput
                style={styles.insertNameInput}
                placeholder="Insira o nome do participante"
                placeholderTextColor={colors.zinc[500]}
                onChangeText={handleChange('name')}
                value={values.name}
                onBlur={handleBlur('name')}
                keyboardType="default"
              />
              <TouchableOpacity
                style={styles.insertNameButton}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.insertNameButtonText}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
            {errors.name && touched.name && <Text style={{ color: "#d45454" }}>{errors.name}</Text>}
          </View>
        )}
      </Formik>
      <View style={styles.participantsContainer}>
        <Text style={styles.participantsTitle}>Participantes</Text>
        {
          participants.length > 0 ?
            participants.map((name, index) => (
              <ParticipantCard
                key={index}
                index={index}
                participantName={name}
                handleRemoveParticipant={handleRemoveParticipant}
              />
            ))
            :
            <Text style={styles.participantsInitialText}>
              Ninguém chegou no evento ainda? {"\n"} Adicione participantes a sua lista de presença
            </Text>
        }
      </View>
    </View>
  );
}
