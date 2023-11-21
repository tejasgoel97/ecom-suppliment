import firebase_app from "./config";
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";

const db = getFirestore(firebase_app)



export default async function addData(colllectionName, data) {
    let result = null;
    let error = null;
    const myCollection = collection(db, colllectionName);
    try {
        result = await addDoc(myCollection, data);
        console.log("order createx")
    } catch (e) {
        console.log(e)
        error = e;
    }


    return { result, error };
}