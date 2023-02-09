import React from "react"
import {
  StyleSheet, Text,
  View, Image, ScrollView,
  TouchableHighlight, FlatList,
  TouchableOpacity, Pressable,
  Modal, TextInput, Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const data = [
  {
    id: 1,
    name: 'Pharmacie E-Zarwali',
    address: 'Rue 1 quartier elbahraine n33',
    phone: '+2126-34-56-78-90',
    email: 'pharmacia@gmail.com',
    img: require('../assets/images/pharmacie1.jpg'),

  }
]



PharmacieDetails = () => {
  return (
    <View style={{  flex: 1,  alignItems: 'center',}}>
      <Text style={{  fontSize: 30, color: 'green', fontWeight: 'bold', paddingTop: 20, paddingBottom: 20,} }>Pharmacie Details</Text>
      <View style={{  flex: 1, alignItems: 'center', width: '100%', height: '100%',}}>
        {/* image */}
        <Image
          style={ { width: 400, height: 200, borderRadius: 20,}  }
          source={data[0].img}
        />
        <View style={{flex: 1,backgroundColor: 'aliceblue',alignItems: 'center',width: '100%',height: '100%'}}>
          <Text style={{fontSize: 20,color: 'green',fontWeight: 'bold', paddingTop: 40,paddingBottom: 20,}}>{data[0].name}</Text>
          <Text style={{  paddingBottom: 10,}}>
            <Icon name='star' type='font-awesome' color='gold'/>
            <Icon  name='star'  type='font-awesome'  color='gold'/>
            <Icon  name='star'  type='font-awesome'  color='gold'/>
            <Icon  name='star'  type='font-awesome'  color='gold'/>
            <Icon  name='star'  type='font-awesome'  color='gold'/>
          </Text>
          <Text style={{ fontSize: 15,  color: 'green',  fontWeight: 'bold',  paddingBottom: 20,}} >{data[0].address}</Text>
          <Text style={{ fontSize: 15,  color: 'green',  fontWeight: 'bold',  paddingBottom: 20,}} >{data[0].phone}</Text>
          <Text style={{  fontSize: 15,  color: 'green',  fontWeight: 'bold',  paddingBottom: 20,}} >{data[0].email}</Text>
        </View>
      </View>
    </View>






  )



}


export default PharmacieDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});