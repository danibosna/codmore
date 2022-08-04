import { useState } from 'react';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import useAlert from './useAlert';
import { deleteProduct } from '@services/api/products';

const PRODUCTS_LIMITS = 20;

const useProducts = () => {
  const { setAlert } = useAlert();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const products = useFetch(endPoints.products.getProducts(0, 0));
  const productsPerPage = useFetch(endPoints.products.getProducts(PRODUCTS_LIMITS, offset));
  const totalPages = calcPages(products.length);
  let buttonsPages = [];

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        setAlert({
          active: true,
          message: 'Delete product successfully',
          type: 'error',
          autoClose: true,
        });
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: 'error',
          autoClose: false,
        });
      });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOffset(currentPage * PRODUCTS_LIMITS);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOffset((currentPage - 2) * PRODUCTS_LIMITS);
    }
  };

  function getClassActive(i) {
    return i === currentPage ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';
  }

  numberPageGenerator(totalPages);
  function numberPageGenerator(pages) {
    for (let i = 1; i <= pages; i++) {
      buttonsPages.push(
        <button
          key={i}
          onClick={() => {
            setCurrentPage(i);
            setOffset(i * PRODUCTS_LIMITS - PRODUCTS_LIMITS);
          }}
          className={`${getClassActive(i)} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        >
          {i}
        </button>
      );
    }
  }

  function calcPages(total) {
    return Math.ceil(total / PRODUCTS_LIMITS);
  }

  return {
    products,
    totalPages,
    buttonsPages,
    setOffset,
    currentPage,
    productsPerPage,
    nextPage,
    prevPage,
    handleDelete,
  };
};

export default useProducts;
