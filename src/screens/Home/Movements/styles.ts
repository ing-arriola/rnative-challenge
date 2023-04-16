import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constants/colors';

export const TextSecondary = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${hp('2%')}px;
  font-weight: bold;
  margin-top: ${hp('3%')}px;
  margin-bottom: ${hp('3%')}px;
`;

export const MovementsContainer = styled.View`
  height: ${hp('40%')}px;
  margin-bottom: ${hp('10%')}px;
  align-items: center;
`;

export const MovementsCard = styled.View`
  background-color: ${colors.white};
  border-radius: ${hp('2%')}px;
  width: ${wp('85%')}px;
  height: ${hp('40%')}px;
  padding-top: ${hp('3%')}px;
  padding-bottom: ${hp('2%')}px;
  padding-left: ${wp('2%')}px;
`;

export const StyledImage = styled.Image`
  height: ${hp('7.8%')}px;
  width: ${hp('7.8%')}px;
  border-radius: ${hp('2%')}px;
  margin-right: ${wp('2%')}px;
`;

export const NameAndDate = styled.View`
  width: ${wp('40%')}px;
`;

export const ItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${hp('1%')}px;
`;

export const RedemtionPoints = styled.View`
  flex-direction: row;
  margin-left: ${wp('3%')}px;
`;

export const BoldText = styled.Text`
  font-size: ${hp('2%')}px;
  font-weight: bold;
`;