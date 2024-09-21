import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskItem = ({ id, task, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task}</Text>
      <Button title="Delete" onPress={() => onDelete(id)} color="#ff5c5c" />
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
});

export default TaskItem;
