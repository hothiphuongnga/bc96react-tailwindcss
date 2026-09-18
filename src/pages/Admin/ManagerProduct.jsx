import React, { useEffect } from "react";
import useProductStore from "../../zustand/productStore";

export default function ManagerProduct() {
  //   const getProducts = useProductStore((state)=> state.getProducts)
  // const products =  useProductStore((state)=> state.products)

  // ten_cũ : ten_rename
  const {
    getProducts: getA,
    products,
    pageSize,
    pageIndex,
    totalRow,
    keywords,
    //  action
    setPageIndex,
    setPageSize,
    setKeyword,
  } = useProductStore();

  console.log("👉 pageIndex", pageIndex);
  const totalPage = Math.ceil(totalRow / pageSize);

  console.log("👉 products", products);
  useEffect(() => {
    getA();
  }, [pageIndex]); // lần đầu khi render, và chạy lại khi pageIndex thay đổi
  return (
    <div>
      {/*  tiêu đề và button thêm mới */}
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-slate-800">Quản lý sản phẩm</h3>
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 cursor-pointer text-sm">
          Thêm mới +
        </button>
      </div>
      {/*  danh sách */}

      <div className="overflow-hidden rounded-xl bg-white shadow-sm my-3">
        <table className="w-full">
          <thead className="bg-slate-50 text-left">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Hình</th>
              <th className="px-4 py-3">Tên sản phẩm</th>
              <th className="px-4 py-3">Giá</th>
              <th className="px-4 py-3">Số lượng</th>
              <th className="px-4 py-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index} className="">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">
                    <img src={item.image} className="w-14 h-14" alt="" />
                  </td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">
                    {item.price.toLocaleString()} VNĐ
                  </td>
                  <td className="px-4 py-3">{item.quantity}</td>
                  <td className="px-4 py-3"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/*  PHAN TRANG - PAGINATION */}
        <div className="my-5 px-2 flex justify-between items-center">
          <p className="text-sm text-slate-500">
            Trang {pageIndex}/{totalPage}
          </p>
          <div className="flex gap-2 justify-between">
            <button
              className="text-sm font-bold rounded-lg border px-4 py-2 disabled:opacity-40 cursor-pointer"
              disabled={pageIndex == 1}
              onClick={() => {
                setPageIndex(1);
              }}
            >
              Đầu
            </button>
            <button
              className="text-sm font-bold rounded-lg border px-4 py-2 disabled:opacity-40 cursor-pointer"
              disabled={pageIndex == 1}
              onClick={() => {
                setPageIndex(pageIndex - 1);
              }}
            >
              Trước
            </button>
            <button
              className="text-sm font-bold rounded-lg border px-4 py-2 disabled:opacity-40 cursor-pointer"
              disabled={pageIndex == totalPage}
              onClick={() => {
                setPageIndex(pageIndex + 1);
              }}
            >
              Sau
            </button>
            <button
              className="text-sm font-bold rounded-lg border px-4 py-2 disabled:opacity-40 cursor-pointer"
              disabled={pageIndex == totalPage}
              onClick={() => {
                setPageIndex(totalPage);
              }}
            >
              Cuối
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
