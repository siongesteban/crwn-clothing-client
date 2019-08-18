import localforage from 'localforage';

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'crwn-clothing',
  version: 1.0,
  storeName: 'app_state',
});

export { localforage };
