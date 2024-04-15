import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text ,Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const rwandaCoordinates = { latitude: -1.9403, longitude: 29.8739 };
const burundiCoordinates = { latitude: -2.9403, longitude: 34.8739 };
const RwandaMap = ({navigation}) => {
    const navigate=useNavigation
    return (
        <View style={styles.container}>
            <View style={{ height: 30 }}></View>
           
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -1.9403, 
                    longitude: 29.8739, 
                    latitudeDelta: 1.5, 
                    longitudeDelta: 1.5, 
                }}
            >
              <Marker coordinate={rwandaCoordinates}>
      <Marker coordinate={burundiCoordinates}>
        <Image source={require('../img/locator.jpg')} style={styles.markerImage} />
      </Marker>
      </Marker> 
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 5,
        marginTop: 5,


    },
    markerImage: {
        width: 40,
        height: 40,
      },
    map: {
        flex: 1,
    },
});

export default RwandaMap;
