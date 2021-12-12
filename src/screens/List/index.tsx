import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { navigate } from '../../navigation/RootNavigation';
import { Screens } from '../../navigation/Screens';

export default () => {
    return (
        <View>
            <Text>Vị trí của bạn</Text>
            <TouchableOpacity onPress={() => { navigate(Screens.Home) }}>
                <Text>Trở về trang chủ</Text>
            </TouchableOpacity>
        </View>
    )
}