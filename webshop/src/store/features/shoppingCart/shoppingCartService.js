import { db } from "../../../firebase/config"
import { addDoc, collection, getDocs, } from 'firebase/firestore';
import { getDatabase, push, ref, set } from "firebase/database";

const createOrder = async (orderData) => {

    const collectionRef = collection(db, 'orders')
    const docRef = await addDoc(collectionRef, orderData)

    if(!docRef.id) throw new Error('Something went wrong')

    console.log(docRef) // VI FÅR IN::: 
    const order = { uid: userCredential.user.uid, id: docRef.id, ...orderData}
    return order
    
}

const getOrderAsync = async (col) => {
    const colRef = collection(db, col )
    const querySnapshot = await getDocs(colRef)

    const order = []
    querySnapshot.forEach(doc => {
        order.push({id: doc.id, ...doc.data()})
    })
    
    return order
}

const saveOrderToDatabase = async(orderData) => {
try {

    const collectionRef = collection(db, 'orders')
    const docRef = await addDoc(collectionRef, orderData)

    if(!docRef.id) throw new Error('Something went wrong')

    const database = getDatabase();
    const userId = userCredential.user.uid;

    const orderRef = push(ref(database, `user/${userId}/orders`));
    await set(orderRef, {
      id: docRef.id,
      productName: orderData.product, 
      quantity: orderData.quantity, 
      status: orderData.status
    })

   return orderData

} catch (error) {
        throw new Error('Failed to save order to the database');
}
}



const shoppingCartService = { 
    createOrder,
    getOrderAsync,
    saveOrderToDatabase
   
}

export default shoppingCartService