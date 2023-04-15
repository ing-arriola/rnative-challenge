import { View, StatusBar, Platform, PixelRatio } from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../../constants/colors';
import { Movements } from './Movements';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Products } from '../../interfaces/Products';
import { TwoButtons } from './TwoButtons';

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
    <Container>
      <View>
        <TitleContainer>
          <TitleBold>Bienvenido de vuelta!</TitleBold>
          <Title>Jaime Arriola</Title>
        </TitleContainer>
        <TextSecondary>TUS PUNTOS</TextSecondary>
        <CardContainer>
          <Card>
            <WhiteText>Diciembre</WhiteText>
            <Points>{totalRedemptionPoints} pts</Points>
          </Card>
        </CardContainer>
        <Movements
          GotoDetail={GotoDetail}
          setProducts={setProducts}
          products={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
        <ButtonContainer>
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
        </ButtonContainer>
      </View>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: ${Platform.OS === 'android'
    ? StatusBar.currentHeight
    : PixelRatio.getPixelSizeForLayoutSize(StatusBar.currentHeight || 0)}px;
`;

const TitleContainer = styled.View`
  margin-bottom: ${hp('1.5%')}px;
`;

const TitleBold = styled.Text`
  font-size: ${hp('3%')}px;
  font-weight: bold;
`;

const Title = styled.Text`
  font-size: ${hp('3%')}px;
`;

const CardContainer = styled.View`
  margin-bottom: ${hp('2%')}px;
  align-items: center;
`;

const Card = styled.View`
  background-color: ${colors.primary};
  width: ${wp('70%')}px;
  height: ${hp('18%')}px;
  border-radius: 20px;
`;

const WhiteText = styled.Text`
  color: ${colors.white};
  font-size: ${hp('2%')}px;
  font-weight: bold;
  margin-left: ${wp('4%')}px;
  margin-bottom: ${hp('1%')}px;
  margin-top: ${hp('3%')}px;
`;

const Points = styled.Text`
  color: ${colors.white};
  font-size: ${hp('5%')}px;
  font-weight: bold;
  text-align: center;
`;

const TextSecondary = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${hp('2%')}px;
  font-weight: bold;
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('2.5%')}px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: ${hp('1%')}px;
`;
