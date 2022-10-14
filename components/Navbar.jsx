import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"> JSM HeadPhones</Link>
      </p>

    <div>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}> 
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      </div>

      { showCart && <Cart/>}
    </div>
  )
}

export default Navbar
