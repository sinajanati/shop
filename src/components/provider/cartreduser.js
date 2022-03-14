const cartreduser=(state,action)=>{
switch(action.type){
    case "ADD-TO-CART":
        
    const updatedcart =[...state.cart]
   const updateditemindex= updatedcart.findIndex((item)=>item.id === action.payload.id)
   if(updateditemindex < 0){
       updatedcart.push({...action.payload,quantity:1})
   }else{
    const updateditem={...updatedcart[updateditemindex]}
    updateditem.quantity++
    updatedcart[updateditemindex]=updateditem
   }
        return {...state,cart:updatedcart}
       
        default: return state
}
}
export default cartreduser