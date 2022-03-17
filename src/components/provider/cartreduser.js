const cartreduser=(state,action)=>{
switch(action.type){
    case "ADD-TO-CART":
        {   const updatedcart =[...state.cart]
            const updateditemindex= updatedcart.findIndex((item)=>item.id === action.payload.id)
            if(updateditemindex < 0){
                updatedcart.push({...action.payload,quantity:1})
            }else{
             const updateditem={...updatedcart[updateditemindex]}
             updateditem.quantity++
             updatedcart[updateditemindex]=updateditem
            }
 
        return {...state,cart:updatedcart}
    }
        case "REMOVE-PRODUCT":
            {const updatedcart =[...state.cart]
                const updateditemindex= updatedcart.findIndex((item)=>item.id === action.payload.id)    
                const updateditem={...updatedcart[updateditemindex]}
            if(updateditem.quantity === 1){
               const filterd= updatedcart.filter(item=>item.id !==action.payload.id)
               return {...state,cart:filterd}
            }else{
                const updateditem={...updatedcart[updateditemindex]}
             updateditem.quantity--
             updatedcart[updateditemindex]=updateditem  
             return {...state,cart:updatedcart}
            }
            }
                    
        default: return state
}
}
export default cartreduser