import { db } from "../../../firebase/config"
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { getDatabase, push, ref, set } from "firebase/database";

const createOrder = async (orderData) => {

    const collectionRef = collection(db, 'orders')
    const docRef = await addDoc(collectionRef, orderData)

    if(!docRef.id) throw new Error('Something went wrong')

    
    const order = { uid: userCredential.user.uid, id: docRef.id, ...orderData}
    return order
    
}

const getOrderAsync = async (col, uid) => {
    const q = query(collection(db, col), where("userId", "==", uid))
    const querySnapshot = await getDocs(q)

    const orders = []
    querySnapshot.forEach(doc => {
        orders.push({...doc.data()})
    })
    return orders
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