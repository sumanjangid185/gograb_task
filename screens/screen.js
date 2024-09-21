import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import { createTable, getTasks, addTask, deleteTask } from '../database/db';

const HomeScreen = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    createTable();
    fetchTasks();
  }, []);

  // Fetch tasks from the database
  const fetchTasks = () => {
    getTasks(
      tasks => setTaskList(tasks),
      error => console.log('Error fetching tasks:', error)
    );
  };

  // Add task to the database
  const handleAddTask = () => {
    if (task.length === 0) return;

    addTask(
      task,
      () => {
        setTask('');
        fetchTasks();
      },
      error => console.log('Error adding task:', error)
    );
  };

  // Delete task from the database
  const handleDeleteTask = (id) => {
    deleteTask(
      id,
      () => fetchTasks(),
      error => console.log('Error deleting task:', error)
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a new task"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />

      <FlatList
        data={taskList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem id={item.id} task={item.task} onDelete={handleDeleteTask} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
