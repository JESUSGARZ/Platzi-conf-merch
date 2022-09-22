import React, { useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const {state, addToBuyer} = useContext(AppContext);
  const form = useRef(null);
  const history = useNavigate();


  const { cart } = state;

  const handleSubmit = () => {
    const fromData = new FormData(form.current);
    const buyer = {
      'name': fromData.get('name'),
      'email':fromData.get('email'),
      'address':fromData.get('address'),
      'apto':fromData.get('apto'),
      'city':fromData.get('city'),
      'country':fromData.get('country'),
      'state':fromData.get('state'),
      'cp':fromData.get('cp'),
      'phone':fromData.get('phone'),
    }
    addToBuyer(buyer);
    history('/checkout/payment');
  }
  
  return (
    <div className='Information'>
      <div className="Information-content">
        <div className="Information-head">
          <h2>Information de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder='Nombre completo' name="name"/>
            <input type="text" placeholder='Correo Electronico' name="email"/>
            <input type="text" placeholder='Direccion' name="address"/>
            <input type="text" placeholder='Apto' name="apto"/>
            <input type="text" placeholder='Ciudad' name="city"/>
            <input type="text" placeholder='Pais' name="country"/>
            <input type="text" placeholder='Estado' name="state"/>
            <input type="text" placeholder='Codigo postal' name="cp"/>
            <input type="text" placeholder='Telefono' name="phone"/>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}> Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => ( 
          <div className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information