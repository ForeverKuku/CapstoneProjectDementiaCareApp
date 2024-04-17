// import React, { useEffect, useState } from 'react';
// import { View, Button, Alert } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// //import Geolocation from '@react-native-community/geolocation';
// import Share from 'react-native-share';

// const MyMapComponent = () => {
//   const [initialRegion, setInitialRegion] = useState(null);

//   useEffect(() => {
//     // Get user's current location
//     Geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;
//         setInitialRegion({
//           latitude,
//           longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         });
//       },
//       error => Alert.alert('Error', error.message),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   }, []);

//   const handleShareLocation = () => {
//     if (initialRegion) {
//       const { latitude, longitude } = initialRegion;
//       const shareOptions = {
//         latitude,
//         longitude,
//         title: 'My Location',
//         message: 'Check out my location!',
//       };
//       Share.open(shareOptions)
//         .then(res => console.log('Shared:', res))
//         .catch(err => console.log('Error sharing:', err));
//     } else {
//       Alert.alert('Location not available', 'Please wait for location data to load.');
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {initialRegion && (
//         <MapView
//           style={{ flex: 1 }}
//           initialRegion={initialRegion}
//           showsUserLocation
//           followsUserLocation
//         >
//           <Marker coordinate={initialRegion} title="My Location" />
//         </MapView>
//       )}
//       <Button title="Share Location" onPress={handleShareLocation} />
//     </View>
//   );
// };

// export default MyMapComponent;
