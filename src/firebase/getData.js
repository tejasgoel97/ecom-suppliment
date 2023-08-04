import firebase_app from "./config";
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getDoument(collection, id) {
    console.log(collection, id)
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
        // console.log(result);
        result = result.data();
        // console.log(result)
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getDocumentsbyFilter(collectionName, field, value){

    let result = null;
    let error = null;
    try {
        const db = getFirestore();
        const collectionRef = collection(db, collectionName);
    
        // Replace 'field' and 'value' with your desired filter criteria
        // const field = 'name';
        // const value = 'John';
    
        // Use the query function to apply filters.
        const q = query(collectionRef, where(field, '==', value));
        const querySnapshot = await getDocs(q);
    
        const filteredData = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
          filteredData.push(doc.data());
        });
    
        result = filteredData
      } catch (error) {
        console.error('Error retrieving filtered data:', error);
        error = error
        // throw error;
      }
      return {error, result}


}