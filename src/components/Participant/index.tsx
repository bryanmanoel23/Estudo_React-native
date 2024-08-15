import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./main";

type Props =  {
    name: string,
    onRemove: ()=> void,
}

export function Participant({ name, onRemove }: Props){
    return (
    
    <View style={styles.container}>

        <Text style={styles.name}>
            {name}
        </Text>
        
    <TouchableOpacity style={styles.inputStyle} onPress={onRemove} >
      <Text style={styles.inputText}>
        -
      </Text>
    </TouchableOpacity>

    </View>

    );
}