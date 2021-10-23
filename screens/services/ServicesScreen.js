import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import ServicesList from './ServicesList';

const data = require('../../data/services.json');

const ServicesScreen = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(data.services);

        return() => {
            setServices([]);
        }

    }, []);

    return (
        <View style={style.container}>
            <Text style={style.text}>Available Services:</Text>
            <FlatList
                style={style.flatListContainer}
                data={services}
                renderItem={({ item }) => <ServicesList services={item} key={item.id} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
    },
    text: {
        color: '#FFF',
        fontSize: 20
    }
});

export default ServicesScreen;