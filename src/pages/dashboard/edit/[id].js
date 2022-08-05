import FormProduct from '@common/FormProduct';
import endPoints from '@services/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Edit() {
  const [product, setProduct] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    try {
      getProduct(id);
    } catch (error) {
      console.log(error);
    }
  }, [router?.isReady, router?.query]);

  return <FormProduct product={product} />;
}
