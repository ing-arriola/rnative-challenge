import { Text, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { ParamListBase } from '../../navigation/AppNavigator';
import { Button } from '../../components/Button';
import { DateFormated } from '../../utils/Date';
import {
  COMPRADO_EL,
  CON_ESTA_COMPRA,
  DETALLES_PRODUCTO,
  PUNTOS,
} from '../../constants/Labels';
import * as S from './styles';

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
      <S.Header>
        <S.H1>{product}</S.H1>
      </S.Header>
      <S.ImageContainer
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
        <S.StyledImage source={{ uri: image }} />
      </S.ImageContainer>
      <S.ProductDetailsContainer>
        <S.TextSecondary>{DETALLES_PRODUCTO}</S.TextSecondary>
        <Text>
          {COMPRADO_EL} {DateFormated(createdAt)}{' '}
        </Text>
        <S.TextSecondary>{CON_ESTA_COMPRA}</S.TextSecondary>
        <S.H1>
          {points} {PUNTOS}
        </S.H1>
      </S.ProductDetailsContainer>
      <Button
        label="Aceptar"
        onPress={() => navigation.goBack()}
        size="large"
      />
    </SafeAreaView>
  );
};
