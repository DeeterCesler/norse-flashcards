import { useState } from 'react';
import { StyleSheet, Image, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ImageBox from '../components/ImageBox';
import SubmitButton from '../components/SubmitButton';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const imageBoxWidth = 200;
  const [input, setInput] = useState('');
  const [warning, setWarning] = useState('');

  const handleSubmit = () => {
    if (input.length > 2) {
      setWarning('Input must be 2 characters or less');
    } else {
      setWarning('');
      // submit input
    }
  };

  return (
    <View style={styles.container}>
      <ImageBox />
      <View style={styles.formContainer}>
        {warning !== '' && (
          <Text style={styles.warning}>{warning}</Text>
        )}
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          maxLength={2}
        />
        <SubmitButton width={imageBoxWidth} onPress={handleSubmit} />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ede7e4',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  warning: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'none',
    borderRadius: 5,
    padding: 10,
  },
});
