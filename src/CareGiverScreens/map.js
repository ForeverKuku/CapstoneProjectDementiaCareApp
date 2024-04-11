import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RwandaMap = ({navigation}) => {
    const navigate=useNavigation
    return (
        <View style={styles.container}>
            <View style={{ marginLeft: 300 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <Fontisto name="bell" size={32} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ height: 30 }}></View>
            <Text style={{ fontWeight: '400', fontSize: 24 }}>Hi!!</Text>
            <View style={{ height: 40 }}></View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -1.9403, 
                    longitude: 29.8739, 
                    latitudeDelta: 1.5, 
                    longitudeDelta: 1.5, 
                }}
            >
               
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 40,
        marginBottom: 300,
        marginTop: 50,


    },
    map: {
        flex: 1,
    },
});

export default RwandaMap;
