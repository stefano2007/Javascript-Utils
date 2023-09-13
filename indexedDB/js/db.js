//https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
let db;
const tableNameUsers = 'users'
const databaseName = 'github-users'
const request = indexedDB.open(databaseName, 1);

request.onupgradeneeded = function() {
  // The database did not previously exist, so create object stores and indexes.
  const db = request.result;
  /*const store = */
  db.createObjectStore(tableNameUsers, {keyPath: "username"});
  /*
  const titleIndex = store.createIndex("by_title", "title", {unique: true});
  const authorIndex = store.createIndex("by_author", "author");
  */
};

request.onsuccess = function() {
  db = request.result;
  //tx = db.transaction("users", "readwrite");
  //tbUsers = tx.objectStore("users");
  console.log('db change success');
};

function saveUser(data){
  if(db == undefined) return;

  const tx = db.transaction(tableNameUsers, "readwrite");
  const tbUsers = tx.objectStore(tableNameUsers);

  tbUsers.put(data);

  tx.oncomplete = function() {
    console.log('Save User success');
  };
}

function removeUser(username){
  const request = db
    .transaction(tableNameUsers, "readwrite")
    .objectStore(tableNameUsers)
    .delete(username);

  request.onsuccess = (event) => {    
    console.log('Remove User success', username);
  };
  request.onerror = (error) => {
    console.error('error Remove User', error);
  };
}

function getAllUsers(){
  const objectStore = db
    .transaction(tableNameUsers)
    .objectStore(tableNameUsers);

  objectStore.getAll().onsuccess = (event) => {
    console.log(`Got all customers: ${event.target.result}`);
    event.target.result.forEach(element => {
      console.log('user', element);
    });
  };
}