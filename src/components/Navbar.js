import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incrementByAmount,
  increase,
} from "../feature/cart/counterSlice";
// import  from ;
import logo from ".././img/blog-4.jpg";
import Modal from './Modal';
import { openModal } from "../feature/cart/modalSlice";
import { Suspense } from "react";
import { lazy } from "react";
const CartItems=lazy(()=>defaultParams(import("./CartItem")))
const Navbar = ({ id }) => {
  const { value, amount, people } = useSelector((state) => state.carts);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1 className="text">{value}</h1>
        <h2>{amount}</h2>
        <div>
          {people.map((item) => {
            return (
              <Suspense fallback={<Loading/>}>
                <CartItems key={item.id} {...item} />
              </Suspense>
            )
          })}
        </div>

        
          <div>
           {isOpen && <Modal/>}
            <button
              onClick={() => {
                dispatch(incrementByAmount(10));
                dispatch(openModal());
              }}
            >
              increment
            </button>
          </div>


          <div>
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <button onClick={() => dispatch(increase(id))}>increase</button>
        </div>
        <img src={logo} alt="reacr" width='200px' />
      </div>
    </>
  );
};

export default Navbar;
const Loading = () => {
  return <h2>loading....</h2>;
};
const defaultParams=(promise)=>{
 return new Promise((resolve)=>setTimeout(resolve,3000)).then(()=>promise)
}
