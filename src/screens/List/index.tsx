import React, { useState } from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    Alert, 
    Modal,
    Pressable,
    TextInput
} from 'react-native';
import { styles } from './styles';
import { StackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<StackParamList,'List' >;
};



export default function List({ navigation }: Props) {
  const [event, setNewEvent] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  

  // function handleEventAdd() {
  //   if(participants.includes(newParticipant)){
  //     return Alert.alert("Participante Existe", 
  //     "Já existe um participante na lista com esse nome")
  //   }

  //   setParticipants(prevState => [...prevState, newParticipant]);
  //   setNewParticipant('');
  // }

  return (
    <View style={styles.Container}>

      <Text style={styles.Title}>Events</Text>

      <TouchableOpacity 
        style={styles.addEvent}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.textButton}>
          Add New Event
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Preencha os dados do evento</Text>

            <TextInput 
              style={styles.input} 
              placeholder='Nome do evento'
              placeholderTextColor="#6B6B6B"
              // onChangeText={setNewEvent}
              // value={newParticipant}
            />

            <TextInput 
              style={styles.input} 
              placeholder='Data do evento'
              placeholderTextColor="#6B6B6B"
              // onChangeText={setNewEvent}
              // value={newParticipant}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Criar Evento</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <TouchableOpacity 
      style={styles.containerEvents} 
      onPress={() => navigation.navigate('List')}>
        <Text style={styles.nameEvent}>
          Leaders Meeting 
        </Text>

        <Text style={styles.eventDate}>
          March 29, 2024
        </Text>
      </TouchableOpacity>        

    </View>
  );
}