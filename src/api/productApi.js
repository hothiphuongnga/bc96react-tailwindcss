import api from "./axios";


export const getProductPaging= () => { 
    
 }
 export const addProduct= () => { 
    
 }
// GET api/Product/getpaging
// productApi.getPaging
// productApi.addProduct
const productApi = {
  getPaging: (pageIndex = 1, pageSize = 10, keywords = "") => {
    //
    return api.get(`/Product/getpaging?pageIndex=${pageIndex}&pageSize=${pageSize}&keywords=${keywords}`)
  },
  getProductById:() => { 
    
   }
};

export default productApi;