import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const TodoItem = ({data, removeTodo}) => {
  const renderItem = itemdata => (
    <TouchableOpacity onPress={() => removeTodo(itemdata.item.id)}>
      <View style={styles.listItem}>
        <Text>{itemdata.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TodoItem;
