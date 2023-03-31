// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () =>
  openDB('contactCard', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('contactCard')) {
        console.log('contactCard database already exists');
        return;
      }
      //todos database, with an object store called todos as well
      db.createObjectStore('contactCard', { keyPath: 'id', autoIncrement: true });
      console.log('contactCard database created');
    },
  });


// TODO: Complete the postDb() function below:
//post request to the database 
export const postDb = async (name, home, cell, email)  => {
    console.log('Post to the database');
    //open connection to database --- it is asynchronous
    //idb allows us to interface with indexedDB
    const todosDb = await openDB('contactCard', 1);
    //set up a transaction to the db objectstore
    //set up permissions (to be able to read and write, not read only)
    const tx = todosDb.transaction('contactCard', 'readwrite');
    const store = tx.objectStore('contactCard');
     //add data to the store
    const request = store.add({ name: name, home: home, cell: cell, email: email  });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  };
// TODO: Complete the getDb() function below:
export const getDb = async () => {
    console.log('GET all from the database');
  const todosDb = await openDB('contactCard', 1);
  const tx = todosDb.transaction('contactCard', 'readonly');
  const store = tx.objectStore('contactCard');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    console.log('DELETE from the database', id);
    const todosDb = await openDB('contactCard', 1);
    //need readwrite permissions for deleting and for editing
    const tx = todosDb.transaction('contactCard', 'readwrite');
    const store = tx.objectStore('contactCard');
    //.delete(specify the key)
    const request = store.delete(id);
    const result = await request;
    console.log('result.value', result);
    return result;
};

initdb();
