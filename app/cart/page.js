import Hi from '../Hi'
import age from './data'

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta', 'Alio ulio']
  return (
    <div>
      <Hi></Hi>
      <h4 className="title">Cart{age}</h4>
      <CartItem 장바구니={장바구니[0]} />
      <CartItem 장바구니={장바구니[1]} />
      <CartItem 장바구니={장바구니[2]} />
      <Banner content="롯데카드"/>
      <Banner content="현대카드"/>
    </div>
  )
}

const Banner = (props)=>{
  return <h5>{props.content} 결제 행사중</h5>
}

const CartItem = ({장바구니})=>{
  return(
    <div className="cart-item">
      <p>{장바구니}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}