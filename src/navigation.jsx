import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './onboardingScreens/SplashScreen';
import GetStarted from './onboardingScreens/GetStarted';
import { SignIn } from './RegistrationScreens/SignIn';
import { CreateAccount } from './RegistrationScreens/CreateAccount';
import WelcomeScreen from './onboardingScreens/WelcomeScreen';
import PatientDashboard from './AllPatientScreens/PatientDashboard';
import EmergencyCall from './AllPatientScreens/EmergencyCall';
import PatientProfile from './PatientScreens/PatientProfile';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryPickerTextInput from './onboardingScreens/phone';
import VerificationCodeInput from './onboardingScreens/verification';
import CareGiverProfile from './CareGiverScreens/profile';
import RwandaMap from './CareGiverScreens/map';
import Call from './CareGiverScreens/call';
import MyCalendar from './CareGiverScreens/carecalender';




const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return(

  <Stack.Navigator initialRouteName="RwandaMap">
    <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}}/>
     <Stack.Screen name="GetStarted" component={GetStarted}  options={{headerShown: false}}/>
     <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
     <Stack.Screen name="CreateAccount" component={CreateAccount}  options={{headerShown: false}}/>
     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{headerShown: false}}/>
     <Stack.Screen name="EmergencyCall" component={TabNavigator}  options={{headerShown: false}}/>   
    <Stack.Screen name="PatientProfile" component={TabNavigator}  options={{headerShown: false}}/> 
    <Tab.Screen name="PatientDashboard" component={TabNavigator}  options={{tabBarShowLabel:false}} /> 
    <Tab.Screen name="CountryPickerTextInput" component={CountryPickerTextInput}  options={{tabBarShowLabel:false}} /> 
    <Tab.Screen name=" VerificationCodeInput" component={ VerificationCodeInput}  options={{tabBarShowLabel:false}} /> 
    <Stack.Screen name="CareGiverProfile" component={BottomNavigator}  options={{headerShown: false}}/> 
    <Stack.Screen name="RwandaMap" component={BottomNavigator}  options={{headerShown: false}}/> 
    <Stack.Screen name="Call" component={BottomNavigator}  options={{headerShown: false}}/> 
    <Stack.Screen name="MyCalendar" component={BottomNavigator}  options={{headerShown: false}}/> 
     </Stack.Navigator>
 )
}


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PatientHomeScreen') {
            iconName = 'home';
          } else if (route.name === 'EmergencyCall') {
            iconName = 'phone-call';
          }   else if (route.name === 'PatientProfile') {
            iconName = 'user';
          }
          
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'rgba(242, 210, 189, 0.7)',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#d8bfd8', 
          borderTopColor: '#d8bfd8',
        },
       headerShown: false,
      })}
  >
    <Tab.Screen name="PatientHomeScreen" component={PatientDashboard}  options={{tabBarShowLabel:false}}/>
    <Tab.Screen name="EmergencyCall" component={EmergencyCall}  options={{tabBarShowLabel:false}} />
    <Tab.Screen name="PatientProfile" component={PatientProfile}  options={{tabBarShowLabel:false}} /> 
  </Tab.Navigator>
  );

    }


  function BottomNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'RwandaMap') {
              iconName = 'home';
            } else if (route.name === 'MyCalendar') {
              iconName = 'calendar'
            } else if (route.name === 'Call') {
              iconName = 'phone-call';
            }  else if (route.name === 'CareGiverProfile') {
              iconName = 'user'
            } 
           
            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarActiveBackgroundColor: '',
          tabBarInactiveTintColor: '#ffccff',
          tabBarShowLabel: false,
          tabBarStyle: {
           
          },
         headerShown: false,
        })}
    >
      <Tab.Screen name="RwandaMap" component={RwandaMap}  options={{tabBarShowLabel:false}}/>
      <Tab.Screen name="MyCalendar" component={MyCalendar}  options={{tabBarShowLabel:false}} /> 
      <Tab.Screen name="Call" component={Call}  options={{tabBarShowLabel:false}} />
      <Tab.Screen name="CareGiverProfile" component={CareGiverProfile}  options={{tabBarShowLabel:false}} />
    </Tab.Navigator>
    );
  }
  
