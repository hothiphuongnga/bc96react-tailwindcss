import { create } from "zustand";
import productApi from "../api/productApi";

const useProductStore = create((set, get) => ({
  // =============
  // STATE
  // =============
  products: [],
  pageSize: 10,
  pageIndex: 1,
  keywords: "",
  totalRow: 0,

  // =============
  // ACTION
  // =============
  getProducts: async () => {
    try {
      // tạm thời không truyền tham số để test trước
      // không truyền thì lấy default trong hàm getpaging
      // lay ra bang get
      const {pageIndex, pageSize, keywords} = get()
      var response = await productApi.getPaging(pageIndex,pageSize, keywords);

      // console.log("👉 response", response.data.content.items);

      // set product = response.data.content.items
      set({
        products: response.data.content.items,
        totalRow: response.data.content.totalRow,
      });
    } catch (err) {
      console.log(err);
    }
  },
  setPageIndex: (pIndex)=>{
    set({
        pageIndex: pIndex
    })
  },
  setPageSize: (pageSize)=>{
    set({pageSize})
  },
  setKeyword: (keywords)=>{
    set({keywords})
  }

}));

export default useProductStore;
