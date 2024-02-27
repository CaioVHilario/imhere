import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    FlatList, 
    Alert,
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    if(participants.includes(newParticipant)){
      return Alert.alert("Participante Existe", 
      "Já existe um participante na lista com esse nome")
    }

    setParticipants(prevState => [...prevState, newParticipant]);
    setNewParticipant('');
  }

  function handleParticipantRemove(name : string) {

    Alert.alert("Remover", 
    `Tem certeza que deseja remover ${name} da lista?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(
          prevState => prevState.filter(participant => participant !== name)
          )
      },
      {
        text: "Não",
        style: "cancel",
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventTitle}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
          Quarta, 28 de Fevereiro de 2024.
      </Text>

      <View style={styles.form}>
          <TextInput 
              style={styles.input} 
              placeholder='Nome do participante'
              placeholderTextColor="#6B6B6B"
              onChangeText={setNewParticipant}
              value={newParticipant}
          />

          <TouchableOpacity 
          style={styles.button} 
          onPress={handleParticipantAdd}
          >
              <Text style={styles.buttonText}>
                  +
              </Text>
          </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes à sua 
            lista de presença.
          </Text>
        )}
      />
  
    </View>
  );
}