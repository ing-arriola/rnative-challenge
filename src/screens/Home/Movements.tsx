import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useCallback, useEffect, useState } from 'react';

import { Products } from '../../interfaces/Products';
import colors from '../../constants/colors';
import { DateFormated } from '../../utils/Date';
import { productsApi } from '../../api/Api';

interface MovementsProps {
  GotoDetail: (product: Products) => any;
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  products: Products[];
}

type FlatlistItem = {
  item: Products;
};

const TITLE = 'TUS MOVIMIENTOS';

export const Movements = ({
  GotoDetail,
  setProducts,
  setFilteredProducts,
  products,
}: MovementsProps) => {
  const [loading, setloading] = useState(false);

  const getData = useCallback(async () => {
    setloading(true);
    const res = await productsApi.get<Products[]>('/products');
    setloading(false);
    setProducts(res.data);
    setFilteredProducts(res.data);
  }, []);

  const renderItem = useCallback(
    ({ item }: FlatlistItem) => {
      return (
        <ItemContainer onPress={() => GotoDetail(item)}>
          {loading ? (
            <ActivityIndicator color={colors.secondary} size={80} />
          ) : (
            <StyledImage source={{ uri: item.image }} />
          )}
          <View style={{ width: 144 }}>
            <ProductName numberOfLines={1} ellipsizeMode="tail">
              {item.product}
            </ProductName>
            <Text>{DateFormated(item.createdAt)}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20 }}>
            <Text
              style={{
                color: item.is_redemption ? colors.danger : colors.success,
              }}
            >{`${item.is_redemption ? '-' : '+'}`}</Text>
            <Text style={{ marginRight: 10 }}>{item.points}</Text>
            <ProductName>{'>'}</ProductName>
          </View>
        </ItemContainer>
      );
    },
    [loading, GotoDetail]
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <MovementsContainer>
      <TextSecondary>{TITLE}</TextSecondary>
      <MovementsCard>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={true}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={30}
          windowSize={10}
        />
      </MovementsCard>
    </MovementsContainer>
  );
};

const TextSecondary = styled.Text`
  color: ${colors.textSecondary};
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MovementsContainer = styled.View`
  height: ${hp('40%')}px;
  margin-bottom: ${hp('10%')}px;
  align-items: center;
`;

const MovementsCard = styled.View`
  background-color: ${colors.white};
  border-radius: 10px;
  width: 320px;
  height: ${hp('40%')}px;
  padding-top: 23px;
  padding-bottom: 20px;
  padding-left: 10px;
`;

const StyledImage = styled.Image`
  height: 55px;
  width: 55px;
  border-radius: 10px;
  margin-right: 11px;
`;

const ItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const ProductName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
