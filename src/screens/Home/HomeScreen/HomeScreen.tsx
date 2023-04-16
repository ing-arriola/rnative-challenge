import { useState } from 'react';
import { View } from 'react-native';
import { Movements } from '../Movements/Movements';
import { useNavigation } from '@react-navigation/core';

import { TwoButtons } from '../TwoButtons';
import { Products } from '../../../interfaces/Products';
import { Button } from '../../../components/Button';
import * as S from './styles';
import {
  BIENVENIDO,
  MONTH,
  TUS_PUNTOS,
  USERNAME,
} from '../../../constants/Labels';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [allOrOne, setallOrOne] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const handleShowAllOrOne = (newState: boolean) => {
    setallOrOne(newState);
  };

  const handleAllProducts = () => {
    setFilteredProducts(products);
  };

  const GotoDetail = (product: Products) =>
    navigation.navigate('ProductDetail' as never, { product } as never);

  const totalRedemptionPoints = products
    .filter(
      (product) =>
        product.is_redemption &&
        new Date(product.createdAt).getFullYear() === 2022 &&
        new Date(product.createdAt).getMonth() === 11
    )
    .reduce((total, product) => total + product.points, 0)
    .toLocaleString('en-US');

  return (
    <S.Container>
      <View>
        <S.TitleContainer>
          <S.TitleBold>{BIENVENIDO}</S.TitleBold>
          <S.Title>{USERNAME}</S.Title>
        </S.TitleContainer>
        <S.TextSecondary>{TUS_PUNTOS}</S.TextSecondary>
        <S.CardContainer>
          <S.Card>
            <S.WhiteText>{MONTH}</S.WhiteText>
            <S.Points>{totalRedemptionPoints} pts</S.Points>
          </S.Card>
        </S.CardContainer>
        <Movements
          GotoDetail={GotoDetail}
          setProducts={setProducts}
          products={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
        <S.ButtonContainer>
          {allOrOne ? (
            <Button
              label="Todos"
              onPress={() => {
                handleShowAllOrOne(!allOrOne);
                handleAllProducts();
              }}
              size="large"
            />
          ) : (
            <TwoButtons
              setFilteredProducts={setFilteredProducts}
              products={products}
              handleShowAllOrOne={handleShowAllOrOne}
              allOrOne={allOrOne}
            />
          )}
        </S.ButtonContainer>
      </View>
    </S.Container>
  );
};
