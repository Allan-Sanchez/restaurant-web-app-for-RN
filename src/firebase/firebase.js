import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }

  async getCollections(nameCollection) {
    const citiesCol = await collection(this.db, nameCollection);
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return cityList;
  }
}

const firebase = new Firebase();
export default firebase;
