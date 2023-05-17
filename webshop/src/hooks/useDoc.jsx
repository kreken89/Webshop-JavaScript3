import React, { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/utils'

export const useDoc = (collection, id) => {
 
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const getDocAsync = async () => {
        setLoading(true)
        const docRef = doc(db, collection, id)
        const docSnapshot = await getDoc(docRef)

        if(!docSnapshot.exists()){
            setLoading(false)
            setError('Could not find document')
        }

        setData({id: docSnapshot.id, ...docSnapshot.data()})
        setLoading(false)
    }
    getDocAsync()
  }, [])
  
  
    return {data, error, loading}
}

export default useDoc