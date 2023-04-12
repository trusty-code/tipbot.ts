const Keyv = require('keyv')
const KeyvFile = require('keyv-file').KeyvFile
const path = require('path');

let keyv = new Keyv({
  store: new KeyvFile()
});

// More options with default value:
const customKeyv = new Keyv({
  store: new KeyvFile({
    filename: `${Math.random().toString(36).slice(2)}.json`, // the file path to store the data
    expiredCheckDelay: 24 * 3600 * 1000, // ms, check and remove expired data in each ms
    writeDelay: 100, // ms, batch write to disk in a specific duration, enhance write performance.
    encode: JSON.stringify, // serialize function
    decode: JSON.parse // deserialize function
  })
})


export async function setUserAndAddress(user: string, address: string) {
  console.log("keyv", keyv)  
  await keyv.set(user, address)
}

export async function deleteUser(user: string) {
  console.log("keyv", keyv)
  await keyv.delete(user)
}

export async function getAddress(user: string) {
    console.log("keyv", keyv)
    let address = await keyv.get(user)
    return address;
}
export function setDB(database: string) {
  console.log("database", database)

  keyv = new Keyv(database);
}