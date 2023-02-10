import React from 'react';
import {View, StyleSheet , Text} from 'react-native';
import BottomNavigation from './BottomNavigation';

const Settings = ({navigation}) => {
    return (
        <>
        <View>
            <Text>Settings</Text>
        </View>
        <BottomNavigation navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({})

export default Settings;
