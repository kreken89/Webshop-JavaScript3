import { db } from "../../../firebase/utils"
import { addDoc, collection } from 'firebase/firestore';

const createProduct = async (productData) => {
    const collectionRef = collection(db, 'products')
    const docRef = await addDoc(collectionRef, productData)

    if(!docRef.id) throw new Error('Something went wrong')

    console.log(docRef)
    return {id: docRef.id, ...productData}
    
}




const productService = { 
    createProduct
}

export default productService