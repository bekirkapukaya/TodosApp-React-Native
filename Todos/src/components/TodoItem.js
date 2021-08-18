import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const TodoItem = ({data}) => {
  console.log(data)
  const renderItem = itemdata => (
    <View style={styles.listItem}>
      <Text>{itemdata.item.value}</Text>
    </View>
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
