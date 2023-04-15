import { View, Text, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { ParamListBase } from '../navigation/AppNavigator';
import { Button } from '../components/Button';
import styled from 'styled-components/native';
import colors from '../constants/colors';
import { DateFormated } from '../utils/Date';

type ProductDetailProps = StackScreenProps<ParamListBase, 'ProductDetail'>;

export const ProductDetail = ({ navigation, route }: ProductDetailProps) => {
  const {
    params: {
      product: { image, product, createdAt, points },
    },
  } = route;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Header>
        <H1>{product}</H1>
      </Header>
      <ImageContainer
        style={{
          elevation: 4,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        }}
      >
        <StyledImage source={{ uri: image }} />
      </ImageContainer>
      <ProductDetailsContainer>
        <TextSecondary>Detalles del producto:</TextSecondary>
        <Text>Comprado el {DateFormated(createdAt)} </Text>
        <TextSecondary>Con esta compra acumulaste:</TextSecondary>
        <H1>{points} puntos</H1>
      </ProductDetailsContainer>
      <Button
        label="Aceptar"
        onPress={() => navigation.goBack()}
        size="large"
      />
    </SafeAreaView>
  );
};

const Header = styled.View`
  background-color: ${colors.secondary};
  height: ${hp('16%')}px;
  width: ${wp('100%')}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${hp('2%')}px;
`;

const StyledImage = styled.Image`
  height: ${hp('25%')}px;
  width: ${wp('55%')}px;
  border-radius: ${hp('1%')}px;
`;

const ImageContainer = styled.View`
  height: ${hp('40%')}px;
  width: ${wp('80%')}px;
  justify-content: center;
  align-items: center;
  border-radius: ${hp('1%')}px;
  background-color: ${colors.white};
`;

const ProductDetailsContainer = styled.View`
  width: ${wp('80%')}px;
  margin-bottom: ${hp('7%')}px;
`;

const TextSecondary = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${hp('2%')}px;
  font-weight: bold;
  margin-top: ${hp('3.5%')}px;
  margin-bottom: ${hp('2%')}px;
`;

const H1 = styled.Text`
  font-size: ${hp('3%')}px;
  font-weight: bold;
`;
