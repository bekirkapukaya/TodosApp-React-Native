import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const TodoInput = ({addTodo}) => {
  const [todo, setTodo] = useState('');

  const getTodo = enteredText => {
    setTodo(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={getTodo}
        value={todo}></TextInput>
      <Button onPress={() => addTodo(todo)} title="Ekle"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default TodoInput;
