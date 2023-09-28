import app from "./firebase-app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

//function returns names and ids
export async function getSortedList() {
 const snapshot = await getDocs( collection(db, "persons") ); 
  const jsonObj = snapshot.docs.map(
    (d) => (
      {
        id: d.id,
        ...d.data() //capture email: and name:
      }
    )
  );

  //sort json array by name property
jsonObj.sort(
  function(a,b){
    return a.name.localeCompare(b.name);
  }
);

    //use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(
    function(item){
      return {
        id: item.id.toString(),
        name: item.name
      };
    }
  );
  
}

//function returns names and ids
export async function getAllIds() {

}

//function return ALL of the properties for one single object with a match id prop value
export async function getData(idRequested){
  
}