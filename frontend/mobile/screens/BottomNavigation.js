import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';



const BottomNavigation = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Home');


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Map' ? styles.activeTab : null]}
        onPress={() => {
          navigation.navigate('Map')
      }}
      >
        <Feather name="map-pin" size={24} color="#ffff" />
        <Text style={[styles.tabText, activeTab === 'Map' ? styles.activeTabText : null]}>
          Map
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Favoris' ? styles.activeTab : null]}
        onPress={() =>{
          navigation.navigate('Favoris')
      }}
      >
        <MaterialIcons name="favorite-border" size={24} color="#ffff" />
        <Text style={[styles.tabText, activeTab === 'Favoris' ? styles.activeTabText : null]}>
        Favoris
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Settings' ? styles.activeTab : null]}
        onPress={() => {
          navigation.navigate('Settings')
        }}
      >
        <Feather name="settings" size={24} color="#ffff" />
        <Text style={[styles.tabText, activeTab === 'Settings' ? styles.activeTabText : null]}>
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3F7CA1',
    alignContent: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#88ACC3',
  },
  tabText: {
    fontSize: 14,
    color: '#ffff'
  },
  activeTabText: {
    borderRadius: 1,
  },
});

export default BottomNavigation;
