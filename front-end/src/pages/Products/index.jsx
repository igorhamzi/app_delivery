import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';
import ProductsCard from '../../components/ProductsCard';
import MyContext from '../../context/MyContext';

export default function Products() {
  const { total } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <S.Container>
      <button
        type="button"
        onClick={ () => navigate('/customer/checkout') }
        data-testid="customer_products__checkout-bottom-value"
      >
        Ver Carrinho: R$:
        {total}
      </button>
      <S.Container>
        <ProductsCard />
      </S.Container>
    </S.Container>
  );
}
