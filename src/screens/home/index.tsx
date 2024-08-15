import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./main";
import { Participant } from "../../components/Participant";

export default function Home(){

  const participants = ['Bryan', 'Társio', 'Deivid', 'Bruno', 'Gabriel', 'Elessandro', 'Tárcila', 'Dalma']

  function handleParticipantClick(){
    if(participants.includes('Bryan')){
      return Alert.alert('Participante existe', 'Já existe um participante cadastrado com esse nome.')
    }

    console.log('Cadastrado com sucesso !')
  }

  function handleRemove(name: string){
   Alert.alert('Remover Participante', `Deseja remover ${name} ?`, [
    {
      text: 'Sim',
      onPress: ()=>Alert.alert('Deletado !')
    },
    {
      text: 'Não',
      style: 'cancel'
    }
   ])
  }

  return (

    <View style={styles.container}>

    <Text style={styles.eventName}>
        Níver do Bryan
    </Text>

    <Text style={styles.eventDate}>
        Terça-feira, 27 de agosto de 2024
    </Text>

    <View style={styles.form}>
    
    <TextInput style={styles.input}
    placeholder= "Nome do participante"
    placeholderTextColor= "#6b6b6b"
    />

    <TouchableOpacity style={styles.inputStyle} onPress={handleParticipantClick} >
      <Text style={styles.inputText}>
        +
      </Text>
    </TouchableOpacity>

    </View>

    <FlatList

    data={participants}
    keyExtractor={item => item}
    renderItem={({item})=> (
    <Participant
    key={item}
    name={item} 
    onRemove={() => handleRemove(item)}/>
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={
      <Text style={styles.listEmpty}>
        Ninguem confirmou presença no niver do Bryan ainda ? Adicione seu nome na lista.
      </Text>
    }
    />

    </View>

  );
}