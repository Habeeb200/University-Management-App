import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './Screens/Landing';
import Landing2 from './Screens/Landing2';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import ForgotPassword from './Screens/ForgotPassword';
import Nother from './Screens/Nother';
import Profile from './Screens/Profile';
import Top from './Screens/Top';
import Combine from './Screens/Combine';
import Home from './Screens/Home';
import Transport from './Screens/Transport';
import Library from './Screens/Library';
import BookDescription from './Screens/BookDescription';
import Emergency from './Screens/Emergency';
import Event from './Screens/Event';
import Payment from './Screens/Payment';
import RegistrationForm from './Screens/RegistrationForm';
import UserProfile from './Screens/UserProfile';
import PaymentHistory from './Screens/PaymentHistory';
import ViewCourses from './Screens/ViewCourses';
import SeeResult from './Screens/SeeResult';
import Payments3 from './Screens/Payments3';
import ChatScreeen from './Screens/ChatScreeen';
const Stack = createNativeStackNavigator();
export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Landing} />
        <Stack.Screen name="Landing2" component={Landing2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={SignUp} />
        <Stack.Screen name="Forget" component={ForgotPassword} />
        <Stack.Screen name="Homer" component={Nother} />
        <Stack.Screen name="top" component={Combine} />
        <Stack.Screen name="hom" component={Home} />
        <Stack.Screen name="transport" component={Transport} />
        <Stack.Screen name="library" component={Library} />
        <Stack.Screen name="bookdescription" component={BookDescription} />
        <Stack.Screen name="emergency" component={Emergency} />
        <Stack.Screen name="event" component={Event} />
        <Stack.Screen name="pay" component={Payment} />
        <Stack.Screen name="pay3" component={Payments3} />
        <Stack.Screen name="register" component={RegistrationForm} />
        <Stack.Screen name="user" component={UserProfile} />
        <Stack.Screen name="history" component={PaymentHistory} />
        <Stack.Screen name="view" component={ViewCourses} />
        <Stack.Screen name="result" component={SeeResult} />
        <Stack.Screen name="chat" component={ChatScreeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
