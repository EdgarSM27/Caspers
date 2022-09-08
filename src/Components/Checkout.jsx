import React, {useState} from 'react'
import { useCartContext } from './Context'
import Form from './Form'

const Checkout = () => {
   const [orderID, setOrderID] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const {cartList, sumaPrecioItems} = useCartContext()
    

    const generarOrden = (e) => {
        e.preventDefault()

        // GENERA BUYER, ITEMS Y TOTAL PRICE
        const ordenCompra = {}
        ordenCompra.buyer = { name, email, phone }
        ordenCompra.total = sumaPrecioItems()
        ordenCompra.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.
            setOrderID(id)
           // const date = firebase.firestore.Timestamp.fromDate(new Date())
            return {id, title, price, date}
        })

    }       
    
    const notValid = 
        !(name.length &&
        email.length &&
        phone.length &&
        emailValid.length > 0 &&
        email === emailValid
        )


    return (
        <div className="checkout-container">
            <h2 className="title">Completa tus datos</h2>
            <p className="pb-4">Para poder confirmar la compra, ingresa tus datos:</p>
            <Form
                generarOrden={generarOrden}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                emailValid={emailValid}
                setEmailValid={setEmailValid}
                notValid={notValid}/>

        </div>
    )
}
export default Checkout