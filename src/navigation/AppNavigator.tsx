import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home/HomeScreen/HomeScreen';
import { ProductDetail } from '../screens/ProductScreen/ProductDetail';

import { Products } from '../interfaces/Products';

export type ParamListBase = {
  Home: undefined;
  ProductDetail: { product: Products };
};

const MainNavigation = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainNavigation.Navigator initialRouteName="Home">
      <MainNavigation.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainNavigation.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
    </MainNavigation.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
