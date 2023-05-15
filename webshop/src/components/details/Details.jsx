import {useState} from "react";
import detailsImg from "../../assets/placeholders/501x430.svg";
import styles from "./Details.module.scss"
import {MdOutlineAddShoppingCart} from "react-icons/md"



   
    
const QuantityButton = () => {
    const [quantity, setQuantity] = useState(0)
   
   
    const increment = () => {
       setQuantity(quantity +1)
   };
   const decrement = () => {
       if (quantity > 0){
           setQuantity(quantity -1)
       }
   }
   return (
    <div className={styles['quantity-group']}>
      <button className={styles['quantity-decrement']} onClick={decrement}>-</button>
      <span className={styles['quantity']} >{quantity}</span>
      <button className={styles['quantity-increment']}  onClick={increment}>+</button>
    </div>
  );
   
   }

   const SizeDropdown = ()=> {
    const [selectedSize, setSelectedSize] = useState('')
    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value)
    }
    return (
        <>
        <label htmlFor="size" className={styles["selector"]}>Select Size:</label>
        <select value={selectedSize} id="size" onChange={handleSizeChange}>
        <option value=""> Select</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        </select>
        <p className={styles["size-selector"]}>{selectedSize}</p>
    
        </>
    )
   }










const Details = () => {
 
    
  return (
    <>
      <div className={styles['container-details']}>
        <div className="imgBox">
          <img src={detailsImg} alt="" />
        </div>
        <div className= {styles["textContainer"]}>
          <div className={styles['detailsTextInfo']}>
            <h4>Young Star Smart Shoe in Fashion</h4>
          </div>
          <div className={styles["text-box"]}>
          <p className={styles["detailsTextInfo"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
            voluptatibus voluptatibus voluptatibus voluptatibus voluptatibus
            voluptatibus voluptatibus voluptatibus voluptatibus voluptatibus

          </p>
          </div>
          <p className={styles["price"]}>$30</p>
          <div className={styles["dropDown-box"]}>
             <SizeDropdown/>
         </div>
          <div className={styles["cart-bnt-box"]}>
          <div className={styles["quantityButton"]}>
            <QuantityButton/>
            <button className={styles["addToCart-bnt"]}>Add to Cart  <MdOutlineAddShoppingCart className={styles['fa-shopping-cart']} /></button>
          </div>
          </div>
        
        </div>
    
      </div>
      
  
    </>
  );
};

export default Details;
