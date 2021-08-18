import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';

import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = todo => {
    setTodoList([...todoList, {id: Math.random().toString(), value: todo}]);
  };

  return (
    <View style={styles.screen}>
      <TodoInput addTodo={addTodo} />
      <TodoItem data={todoList} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
