import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./src/screens/List";
import Events from "./src/screens/Events";

const Stack = createNativeStackNavigator();

export type StackParamList = {

  List: { userId: string };
  
  };

export default function App() {
  return (
    <>
    <NavigationContainer>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        
      <Stack.Navigator>
        <Stack.Screen 
          name="Events" 
          component={List} 
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
        name="List" 
        component={Events}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'black',
            
          },
          headerTintColor: '#147DFB',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} 
        />
      </Stack.Navigator>

    </NavigationContainer>
    </>
  );
}


