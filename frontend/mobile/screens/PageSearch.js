import * as React from 'react';
import axios from 'axios';
import {useEffect} from 'react' 
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import styles from "../assets/styles/startContaner"

const PageSearch = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [data, setdata] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    console.log(searchQuery);

    const searchPharm = async () => {
        let key =  searchQuery.toLowerCase();
        await  axios.get(`http://172.16.10.97:5000/api/pharmacy/search/${key}`).then((response) => {
        console.log("rest",response.data);
        setdata(response.data);
    }).catch((err) => {
        console.log(err)
    })
    }

    useEffect(() => {
        if(searchQuery==""){
        setdata("")
        }else searchPharm()
    },[searchQuery])

    return (
        <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <ScrollView style={{}}>
        {data && data.map((item)=>
                <View style={styles.cardContainer}  >
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardaddress}><Feather name="phone" size={17} color="#335E90" /> {item.phoneNumber} </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <AntDesign name="enviromento" size={17} color="#335E90" />
                    <Text style={styles.cardPhone}> {item.address}</Text>
                  </View>
                </View>)}  
              </ScrollView> 
              </View>
    );
    
}

export default PageSearch;