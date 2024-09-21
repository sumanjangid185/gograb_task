import * as SQLite from 'expo-sqlite';

// Open the database or create it if it doesn't exist
const db = SQLite.openDatabase('todo.db');

// Create table if it doesn't exist
export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT);',
      [],
      () => { console.log('Table created successfully'); },
      (_, error) => { console.log('Error creating table:', error); }
    );
  });
};

// Insert a new task
export const addTask = (task, successCallback, errorCallback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO todos (task) VALUES (?);',
      [task],
      successCallback,
      (_, error) => { errorCallback(error); }
    );
  });
};

// Get all tasks
export const getTasks = (successCallback, errorCallback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM todos;',
      [],
      (_, { rows: { _array } }) => { successCallback(_array); },
      (_, error) => { errorCallback(error); }
    );
  });
};

// Delete a task by id
export const deleteTask = (id, successCallback, errorCallback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM todos WHERE id = ?;',
      [id],
      successCallback,
      (_, error) => { errorCallback(error); }
    );
  });
};
