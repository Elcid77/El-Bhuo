import { connectFirestoreEmulator } from 'firebase/firestore';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { cartContext } from '../context/cartContext';
import { getProducts, getFilter } from '../firebase/db';
import {PropagateLoader} from 'react-spinners'
import ItemList from './ItemList';



function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  //const value = useContext(cartContext)
  //console.log(value)
  useEffect(() => {
    getProducts()
    id ? getFilter(id, setItems) : getProducts(setItems)

  }, [id])

  if(items.length==0){
    return(
      <PropagateLoader/>
    )
    }

  return (

    <ItemList items={items} />
  )
}

export default ItemListContainer;
