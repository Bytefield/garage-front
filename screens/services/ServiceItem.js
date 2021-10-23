import React from 'react';
import { TouchableOpacity, View, Dimensions, Image, Text, Button, StyleSheet } from 'react-native';

const ServiceItem = (props) => {

    const { name, price, description } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>
                {name.length > 20 ? name.substring(0, 20 - 3) + '...' : name}
            </Text>
            <Text>{description}</Text>
            <Text>{`Precio: ${price}`}</Text>
        </View>
    )
}

const halfWidth = Dimensions.get('window').width / 2 - 2;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#FFF',
        width: halfWidth - 5,
        margin: 2.5

    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ServiceItem;