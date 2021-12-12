import * as React from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { ASSETS } from '../../contants/ASSETS';
interface Props {
    navigation: any,
    route: any
}
export default (props: Props) => {
    const data = props.route.params.data;
    return (
        <View>
            <MapView
                provider={PROVIDER_GOOGLE}
                mapType="standard"
                initialRegion={{
                    latitude: data.region.latitude,
                    longitude: data.region.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
                region={{
                    latitude: data.region.latitude,
                    longitude: data.region.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
                showsUserLocation={true}
                style={{ width: '100%', height: "100%" }}
            >
                <Marker coordinate={{
                    latitude: data.region.latitude,
                    longitude: data.region.longitude,
                }}
                >
                    <Image style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'contain',
                    }} source={ASSETS.icLocationRed} />
                </Marker>
            </MapView>
        </View >
    )
}