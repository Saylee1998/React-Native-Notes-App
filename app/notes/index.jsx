import { View,Text,StyleSheet } from "react-native-web";

const NoteScreen = () => {
  return ( <View style={styles.container}>
    <Text>Notes</Text>

  </View>);
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  }
})

export default NoteScreen;