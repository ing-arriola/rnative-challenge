import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import colors from '../../constants/colors';

export const Header = styled.View`
  background-color: ${colors.secondary};
  height: ${hp('16%')}px;
  width: ${wp('100%')}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${hp('2%')}px;
`;

export const StyledImage = styled.Image`
  height: ${hp('25%')}px;
  width: ${wp('55%')}px;
  border-radius: ${hp('1%')}px;
`;

export const ImageContainer = styled.View`
  height: ${hp('40%')}px;
  width: ${wp('80%')}px;
  justify-content: center;
  align-items: center;
  border-radius: ${hp('1%')}px;
  background-color: ${colors.white};
`;

export const ProductDetailsContainer = styled.View`
  width: ${wp('80%')}px;
  margin-bottom: ${hp('7%')}px;
`;

export const TextSecondary = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${hp('2%')}px;
  font-weight: bold;
  margin-top: ${hp('3.5%')}px;
  margin-bottom: ${hp('2%')}px;
`;

export const H1 = styled.Text`
  font-size: ${hp('3%')}px;
  font-weight: bold;
`;
