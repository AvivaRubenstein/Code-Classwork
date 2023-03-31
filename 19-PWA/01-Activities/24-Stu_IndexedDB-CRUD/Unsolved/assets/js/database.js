import { openDB } from 'idb';

//open a connection to the database
const initdb = async () =>
  openDB('todos', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      //todos database, with an object store called todos as well
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

//post request to the database 
export const postDb = async (content) => {
  console.log('Post to the database');
  //open connection to database --- it is asynchronous
  //idb allows us to interface with indexedDB
  const todosDb = await openDB('todos', 1);
  //set up a transaction to the db objectstore
  //set up permissions (to be able to read and write, not read only)
  const tx = todosDb.transaction('todos', 'readwrite');
  const store = tx.objectStore('todos');
   //add data to the store
  const request = store.add({ todo: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

//getting the data from the db
//we will do stuff with the data separately
export const getAllDb = async () => {
  console.log('GET all from the database');
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readonly');
  const store = tx.objectStore('todos');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};


export const getOneDb = async (id) => {
  console.log('GET from the database');
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readonly');
  const store = tx.objectStore('todos');
  const request = store.get(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

// TODO: Fix the function below:
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);
  const todosDb = await openDB('todos', 1);
  //need readwrite permissions for deleting and for editing
  const tx = todosDb.transaction('todos', 'readwrite');
  const store = tx.objectStore('todos');
  //.delete(specify the key)
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

// TODO: Fix the function below:
export const putDb = async (id, content) => {
  console.log('PUT to the database');
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readwrite');
  const store = tx.objectStore('todos');
  const request = store.put({ id: id, todo: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

initdb();
