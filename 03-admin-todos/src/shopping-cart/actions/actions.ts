
import { getCookie, hasCookie, setCookie } from "cookies-next";
export const getCookieCart = ():{ [id: string]:number } => {
  if ( hasCookie('cart') ) {
    const cookieCart = JSON.parse( getCookie('cart') as string ?? '{}' );
    return cookieCart;
  }
  return {};
}

export const addProductToCart = ( id: string ) => {
  const cookieCart = getCookieCart();

  if ( cookieCart[id] ) {
    cookieCart[id] = cookieCart[id] + 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie('cart', JSON.stringify(cookieCart));
}

export const removeProductFromCart = ( id: string ) => {
  const cookieCart = getCookieCart();
  // const newCookieCart = Object.entries(cookieCart).filter(product=> product[0]!==id);
  
  // setCookie('cart', JSON.stringify(Object.fromEntries(newCookieCart)));
  delete cookieCart[id];
  setCookie('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = (id:string) =>{
  const cookieCart = getCookieCart();
  if(!cookieCart[id])return;
  
  const product = cookieCart[id];
  if (product === 1) {
    delete cookieCart[id];
  }else{
    cookieCart[id] = product - 1;
  }
  
  setCookie('cart', JSON.stringify(cookieCart));
}