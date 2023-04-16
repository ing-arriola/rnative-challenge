import { Text, FlatList, ActivityIndicator, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { Products } from '../../../interfaces/Products';
import colors from '../../../constants/colors';
import { DateFormated } from '../../../utils/Date';
import { productsApi } from '../../../api/Api';
import * as S from './styles';
import { TUS_MOVIMIENTOS } from '../../../constants/Labels';

interface MovementsProps {
  GotoDetail: (product: Products) => any;
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  products: Products[];
}

type FlatlistItem = {
  item: Products;
};

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
        <S.ItemContainer onPress={() => GotoDetail(item)}>
          {loading ? (
            <ActivityIndicator color={colors.secondary} size={80} />
          ) : (
            <S.StyledImage source={{ uri: item.image }} />
          )}
          <S.NameAndDate>
            <S.BoldText numberOfLines={1} ellipsizeMode="tail">
              {item.product}
            </S.BoldText>
            <Text>{DateFormated(item.createdAt)}</Text>
          </S.NameAndDate>
          <S.RedemtionPoints>
            <Text
              style={{
                color: item.is_redemption ? colors.danger : colors.success,
              }}
            >{`${item.is_redemption ? '-' : '+'}`}</Text>
            <Text style={{ marginRight: 10 }}>{item.points}</Text>
            <S.BoldText>{'>'}</S.BoldText>
          </S.RedemtionPoints>
        </S.ItemContainer>
      );
    },
    [loading, GotoDetail]
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.MovementsContainer>
      <S.TextSecondary>{TUS_MOVIMIENTOS}</S.TextSecondary>
      <S.MovementsCard>
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
      </S.MovementsCard>
    </S.MovementsContainer>
  );
};
