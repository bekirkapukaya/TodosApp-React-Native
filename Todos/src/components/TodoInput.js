import React, {useState} from 'react';
import {View, TextInput, Button, Modal, StyleSheet} from 'react-native';

const TodoInput = ({addTodo, visible, hide}) => {
  const [todo, setTodo] = useState('');

  const getTodo = enteredText => {
    setTodo(enteredText);
  };

  const addTodoAndRemove = () => {
    addTodo(todo);
    setTodo('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={getTodo}
          value={todo}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button onPress={addTodoAndRemove} title="Ekle"></Button>
          </View>
          <View style={styles.buttons}>
            <Button onPress={hide} title="Vazgeç" color="red"></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  buttons: {
    width: '40%',
  },
});

export default TodoInput;
