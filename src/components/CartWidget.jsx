// src/components/CartWidget.jsx
import React from 'react'
import Button  from 'react-bootstrap/Button'
import {useContext} from 'react'
import {cartContext} from '../context/cartContext'
import {Link} from 'react-router-dom'

function CartWidget (){
    const {getQuantity} = useContext(cartContext)
   return(
   
        <Button variant='ligth'
        as={Link}
        to='/cart'
        >  🛒 {getQuantity()}
        </Button>
   )
}
   

export default CartWidget;
