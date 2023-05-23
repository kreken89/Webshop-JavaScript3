import { db } from "../../../firebase/config"
import { addDoc, collection, getDocs, getDoc } from 'firebase/firestore';

const createOrder = async (orderData) => {
    const collectionRef = collection(db, 'orders')
    const docRef = await addDoc(collectionRef, orderData)

    if(!docRef.id) throw new Error('Something went wrong')

    console.log(docRef)
    return {id: docRef.id, ...orderData}
    
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

const shoppingCartService = { 
    createOrder,
    getOrderAsync
   
}

export default shoppingCartService