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
    name: 'Pharmacie 11',
    address: 'Rue 1',
    phone: '12345678',
    email: 'pharmacia@gmail.com',
    img: require('../assets/images/pharmacie1.jpg'),
    reviews: [
      {
        id: 1,
        name: 'User 1',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc.'
      },
      {
        id: 2,
        name: 'User 2',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc.'
      },
      {
        id: 3,
        name: 'User 3',
        rating: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc.'
      },
      {
        id: 4,
        name: 'User 4',
        rating: 2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc.'
      },
      {

        id: 5,
        name: 'User 5',
        rating: 1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nunc nunc vel nunc.'
      },
    ]
  }
]



PharmacieDetails = () => {
  return (
    <View style={
      {
        flex: 1,
        // backgroundColor: '#aaa', 
        alignItems: 'center',
        // paddingBottom: 60,

        // justifyContent: 'center',
      }
    }>
      <Text
        style={
          {
            fontSize: 30,
            color: 'green',
            fontWeight: 'bold',
            paddingTop: 40,
            paddingBottom: 20,
          }
        }
      >Pharmacie Details</Text>
      <View style={
        {
          flex: 1,
          // backgroundColor: '#fff', 
          alignItems: 'center',
          // justifyContent: 'center',
          width: '100%',
          height: '100%',
          // paddingTop: 60,
        }
      }>
        {/* image */}
        <Image
          style={
            {
              width: 400,
              height: 200,
              borderRadius: 20,
            }
          }
          source={data[0].img}
        />
        <View style={
          {
            flex: 1,

            backgroundColor: 'aliceblue',
            // backgroundColor: 'powderblue',
            alignItems: 'center',
            // justifyContent: 'center',
            width: '100%',
            height: '100%',
            // paddingTop: 60,
          }
        }>
          <Text
            style={
              {
                fontSize: 20,
                color: 'green',
                fontWeight: 'bold',
                paddingTop: 40,
                paddingBottom: 20,
              }
            }
          >{data[0].name}</Text>
          <Text
            style={
              {
                paddingBottom: 40,
              }
            }

          >
            <Icon
              name='star'
              type='font-awesome'
              color='gold'
            />
            <Icon
              name='star'
              type='font-awesome'
              color='gold'
            />
            <Icon
              name='star'
              type='font-awesome'
              color='gold'
            />
            <Icon
              name='star'
              type='font-awesome'
              color='gold'
            />
            <Icon
              name='star'
              type='font-awesome'
              color='gold'
            />
          </Text>
          <Text
            style={
              {

                fontSize: 15,
                color: 'green',
                fontWeight: 'bold',
                paddingBottom: 20,
              }
            }
          >{data[0].address}</Text>
          <Text
            style={
              {

                fontSize: 15,
                color: 'green',
                fontWeight: 'bold',
                paddingBottom: 20,
              }
            }
          >{data[0].phone}</Text>
          <Text
            style={
              {
                fontSize: 15,
                color: 'green',
                fontWeight: 'bold',
                paddingBottom: 20,
              }
            }
          >{data[0].email}</Text>

        </View>
        
        {/* add comments */}
        <View style={
          {
            flex: 1,
            backgroundColor: 'aliceblue',
            // backgroundColor: 'powderblue',
            alignItems: 'center',
            // justifyContent: 'center',
            width: '100%',
            height: '100%',
            // paddingTop: 60,
          }
        }>
          <Text
            style={
              {

                fontSize: 15,
                color: 'green',
                fontWeight: 'bold',
                paddingBottom: 20,
              }
            }
          >Comments</Text>
          <View style={
            {
              flex: 1,
              backgroundColor: 'aliceblue',
              // backgroundColor: 'powderblue',
              alignItems: 'center',
              // justifyContent: 'center',
              width: '100%',
              height: '100%',
              // paddingTop: 60,
            }
          }>
            <FlatList
              data={data[0].reviews}
              renderItem={({ item }) => (
                <View style={
                  {
                    flex: 1,
                    backgroundColor: 'aliceblue',
                    // backgroundColor: 'powderblue',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    // paddingTop: 60,
                  }
                }>
                  <Text
                    style={
                      {
                        fontSize: 15,
                        color: 'green',
                        fontWeight: 'bold',
                        paddingBottom: 20,
                      }
                    }
                  >{item.name}</Text>
                  <Text
                    style={
                      {
                        fontSize: 15,
                        color: 'green',
                        fontWeight: 'bold',
                        paddingBottom: 20,
                      }
                    }
                  >{item.review}</Text>

                </View>
              )}
            />

            </View>


          </View>


        </View>
      </View>






      )



}


      export default PharmacieDetails