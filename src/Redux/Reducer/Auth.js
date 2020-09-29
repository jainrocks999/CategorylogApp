import { act } from "react-test-renderer"

initialstate={
  isFetching:false,
  MainKey:[],
  UserDetails:null,
  CopyRight:[],
  ProductDetails:[],
  Home:null,
}
export default (state=initialstate,action)=>{
  switch(action.type){
    //token Status Value
    case 'User_Main_Request':
    return{...state,isFetching:true}
    case 'User_Main_Success':
    return{...state,isFetching:false,MainKey:action.payload}
    case 'User_Main_Error':
    return {...state,isFetching:false}
 //product details
   case 'User_Product_Details_Request':
   return{...state,isFetching:true}
   case 'User_Product_Details_Success':
   return{...state,isFetching:false,ProductDetails:action.payload}
   case 'User_Product_Details_Failure':
   return{...state,isFetching:false}
// home Page data
   case 'User_Home_Page_Request':
   return{...state,isFetching:true}
   case 'User_Home_Page_Success':
    return{...state,isFetching:false,Home:action.payload}
    case 'User_Home_Page_Failure':
    return{...state,isFetching:false}

    
    default:         
    return state;
  }
}
