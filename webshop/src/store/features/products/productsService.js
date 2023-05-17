import { db } from "../../../firebase/utils"
import { addDoc, collection, getDocs, getDoc } from 'firebase/firestore';

const createProduct = async (productData) => {
    const collectionRef = collection(db, 'products')
    const docRef = await addDoc(collectionRef, productData)

    if(!docRef.id) throw new Error('Something went wrong')

    console.log(docRef)
    return {id: docRef.id, ...productData}
    
}

const getAllAsync = async (col) => {
    const colRef = collection(db, col )
    const querySnapshot = await getDocs(colRef)

    const products = []
    querySnapshot.forEach(doc => {
        products.push({id: doc.id, ...doc.data()})
    })
    
    return products
}

/* const getSpecificAsync = async (col, id) => {
    const docRef = doc(db, col, id)
    const docSnapshot = await getDoc(docRef)
    return {id: docSnapshot.id, ...docSnapshot.data()}
} */





const productService = { 
    createProduct,
    getAllAsync
   
}

export default productService