import styled from 'styled-components/native';
import { Button } from '../../components/Button';
import { Products } from '../../interfaces/Products';

interface EarnAndUsedButtons {
  setFilteredProducts: React.Dispatch<React.SetStateAction<Products[]>>;
  products: Products[];
  handleShowAllOrOne: (newState: boolean) => void;
  allOrOne: boolean;
}

export const TwoButtons = ({
  setFilteredProducts,
  products,
  handleShowAllOrOne,
  allOrOne,
}: EarnAndUsedButtons) => {
  const handleRedemptionProducts = () => {
    const redemptionProducts = products.filter(
      (product) => product.is_redemption
    );
    setFilteredProducts(redemptionProducts);
  };

  const handleNonRedemptionProducts = () => {
    const nonRedemptionProducts = products.filter(
      (product) => !product.is_redemption
    );
    setFilteredProducts(nonRedemptionProducts);
  };
  return (
    <TwoButtonsContainer>
      <Button
        label="Ganados"
        onPress={() => {
          handleNonRedemptionProducts();
          handleShowAllOrOne(!allOrOne);
        }}
        size="small"
      />
      <Button
        label="Canjeados"
        onPress={() => {
          handleShowAllOrOne(!allOrOne);
          handleRedemptionProducts();
        }}
        size="small"
      />
    </TwoButtonsContainer>
  );
};

const TwoButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  column-gap: 13px;
`;
