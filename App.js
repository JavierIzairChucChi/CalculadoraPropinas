import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import OneAccount from "./components/OneAccount";
import MultipleAccountsScreen from "./components/MultipleAccountsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="OneAccount"
        component={OneAccount}
        options={{title:"Una Cuenta"}}
        />
        <Tab.Screen name="MultipleAccountsScreen"
        component={MultipleAccountsScreen}
        options={{title:"Multiples Cuentas"}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}