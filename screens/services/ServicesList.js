import React from 'react';
import { TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native';

import ServiceItem from './ServiceItem';

var { width } = Dimensions.get('window'); //full width of the screen


const ServicesList = (props) => {

    const {  services } = props;

    return (
        <TouchableOpacity >
            <View style={style.container}>
                <ServiceItem {...services} />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#222E50',
    }
});

export default ServicesList;