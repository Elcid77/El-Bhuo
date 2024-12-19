
import { async } from "@firebase/util";
import { getFirestore, collection, getDocs,query, where,doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async (setItems) => {
  const documents = await getDocs(collection(db, "items"));
  const products = [];
  documents.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return setItems(products);
}



export const getFilter= async(genero, setItems)=>{

    const q = query(collection(db, "items"), where("genero", "==", genero));
    const products = [];

const documentos = await getDocs(q);
documentos.forEach((doc) => {
 
    products.push({ id: doc.id, ...doc.data() });
})
setItems(products);

}


export const getDetail= async(id, setDetail)=>{

const docRef = doc(db, "items", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  setDetail(docSnap.data());
} 

}


  export const createOrder = async (order) =>{
    try {
        const docRef = await addDoc(collection(db, "orders"), order) 
        console.log("Document writtern with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e);
      }

  }