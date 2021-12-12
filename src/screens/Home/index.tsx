import * as React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { navigate } from '../../navigation/RootNavigation';
import { Screens } from '../../navigation/Screens';
import { ListLocation, LocationDetail, NoImage } from '../../contants/Common';
import Geolocation from '@react-native-community/geolocation';
import getDistance from 'geolib/es/getDistance';
import { style } from './style';

export default () => {
    const [data, setData] = React.useState<LocationDetail[]>([])
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        setLoading(true);
        Geolocation.getCurrentPosition((position: any) => {
            const x = ListLocation.map((item, index) => {
                const distance = getDistance({ latitude: 20.981963222263882, longitude: 105.78819429807179 }, { latitude: item.region.latitude, longitude: item.region.longitude });
                return ListLocation[index] = {
                    ...item,
                    distance: distance
                }
            });
            setData(x.sort((a, b) => a?.distance - b?.distance))
        });
        setLoading(false);
    }, []);

    const renderItem = (item: LocationDetail) => {
        return (
            <TouchableOpacity
                style={style.touchItem}
                onPress={() => navigate(Screens.MapView, { data: item })}>
                <Image source={{ uri: item.image || NoImage }} style={style.imageItem} />
                <View style={style.viewRightItem}>
                    <Text style={style.textTitle}>Tên nhà thuốc:  <Text style={style.textValue}>{item.name}</Text></Text>
                    <Text style={style.textTitle}>Địa chỉ:  <Text style={style.textValue}>{item.address}</Text></Text>
                    <Text style={style.textTitle}>Cách bạn:  <Text style={style.textValue}>{item.distance ? item.distance / 1000 : 0}</Text> km</Text>

                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={style.container}>
            <Text style={style.textTitleHome}>Danh sách nhà thuốc</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => `${index}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}