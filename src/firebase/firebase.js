import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore/lite";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import firebaseConfig from "./config";
class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.storage = getStorage();
  }

  async getCollections(nameCollection) {
    try {
      const citiesCol = await collection(this.db, nameCollection);
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return cityList;
    } catch (error) {
      console.log(error);
    }
  }

  async setDocument(documentName, data) {
    try {
      await addDoc(collection(this.db, documentName), data);
    } catch (error) {
      console.log(error);
    }
  }

  async uploadImageFirebase(pathName, file) {
    const storege = this.storage
    return new Promise(function(resolve, reject) {
      const storegeRef = ref(storege,pathName)
      const uploadTask = uploadBytesResumable(storegeRef,file)
      uploadTask.on("state_changed",
      null,
      function error(err){
        console.log('error',err);
        reject();
      },
      function complete() {
        // uploadTask.snapshot.ref.getDownloadURL()
        getDownloadURL(uploadTask.snapshot.ref).then(
          function (downloadURL){
            resolve(downloadURL)
          }
        )
      }
      )
    })

   
  }
  //end class
}

const firebase = new Firebase();
export default firebase;
