import React from 'react';
import {View, StyleSheet , Text} from 'react-native';
import BottomNavigation from './BottomNavigation';

const Favoris = ({navigation}) => {
    return (
        <>
        <View>
            <Text>Favoris</Text>
        </View>
        <BottomNavigation navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({})

export default Favoris;
