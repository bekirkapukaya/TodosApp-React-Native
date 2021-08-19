import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const hideModal = () => {
    setIsAddMode(false);
  };

  const addTodo = todo => {
    setTodoList([...todoList, {id: Math.random().toString(), value: todo}]);
    setIsAddMode(false);
  };

  const removeTodo = id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.screen}>
      <Button title="Görev Ekle" onPress={() => setIsAddMode(true)}></Button>
      <TodoInput addTodo={addTodo} visible={isAddMode} hide={hideModal} />
      <TodoItem data={todoList} removeTodo={removeTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
