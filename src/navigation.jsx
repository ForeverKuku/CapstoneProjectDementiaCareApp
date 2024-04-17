import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './onboardingScreens/SplashScreen';
import GetStarted from './onboardingScreens/GetStarted';
import { SignIn } from './RegistrationScreens/SignIn';
import { CreateAccount } from './RegistrationScreens/CreateAccount';
import WelcomeScreen from './onboardingScreens/WelcomeScreen';
import CaregiverDashboard from './AllCareGiverScreens/CaregiverDashboard';
import PatientDashboard from './AllPatientScreens/PatientDashboard';
import EmergencyCall from './AllPatientScreens/EmergencyCall';
import PatientProfile from './AllPatientScreens/PatientProfile';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditPatientProfile from './AllPatientScreens/EditPatientProfile';



const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return(

  <Stack.Navigator initialRouteName="Edit">
    <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}}/>
     <Stack.Screen name="GetStarted" component={GetStarted}  options={{headerShown: false}}/>
     <Stack.Screen name="SignIn" component={SignIn}  options={{headerShown: false}}/>
     <Stack.Screen name="CreateAccount" component={CreateAccount}  options={{headerShown: false}}/>
     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{headerShown: false}}/>
     <Stack.Screen name="CaregiverDashboard" component={CaregiverDashboard}  options={{headerShown: false}}/>
    <Stack.Screen name="Edit" component={EditPatientProfile} options={{headerShown:false}}/>
    <Stack.Screen name="PatientProfile" component={TabNavigator} options={{headerShown:false}}/> 

    <Tab.Screen name="PatientDashboard" component={TabNavigator}  options={{tabBarShowLabel:false}} /> 
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
