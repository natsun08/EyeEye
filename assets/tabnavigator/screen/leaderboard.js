import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView,Image,  Item, ScrollView, StyleSheet, Text, View} from 'react-native';
import { Card } from 'react-native-paper';
import { db } from '../../../firebase_config';


DATA = [
  {id:1,
  username: "Mầm",
  image:'../../../assets/mam.jpg',
  score:2
  },
  {id:2,
    username: "Dưa",
    image:'../../../assets/dua.jpg',
    score:9
  },
  {id:3,
    username: "Tôm",
    image:'../../../assets/tom.jpg',
    score:7
  },
  {id:4,
    username: "Ná",
    image:'../../../assets/dua.jpg',
    score:4.5
  },
  {id:5,
    username: "Bo bo",
    image:'../../../assets/dua.jpg',
    score:4.5
  },
  {id:6,
    username: "Moon",
    image:'../../../assets/dua.jpg',
    score:4.5
  },
  {id:7,
    username: "Pate",
    image:'../../../assets/dua.jpg',
    score:4.5
  },
  {id:8,
    username: "Hoshi",
    image:'../../../assets/dua.jpg',
    score:4.5
  }
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  card: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 30
    
  },
  name: {
    padding: 10,
    fontSize: 25,
    fontWeight: '700',
    height: 40,
    color: '#001F70'
  },
  tinyLogo: {
    flex:1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: 30,
    maxWidth: 60,
    height: 60,
    borderRadius: 10,
    overflow: "hidden",
  },
  score: {
    color: '#001F70'
  },  
  text: {
    paddingBottom:12,
    paddingLeft: 15,
    flex:2,
    alignSelf: 'center'
  }
});

const Leaderboard = () => {
  x=1; //để print ra stt 1 2 3 4 5 cho leaderboard

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async() =>{
    setLoading(true)
    const docref = await getDocs(query(collection(db, "user"), where("manager", "!=", "'0'")))
    .catch((error) =>{
      console.log(error.message);
    }

    )
    const res =[]

    docref.forEach(user => {
      res.push(user);
      console.log(user.data());
    })
    if(res.length==0){
      console.log("no data")
    }
    setUsers([...res]);
    setLoading(false)
  }
  useEffect(() =>{
    fetchData();
    },[])
  return (
    <View style={styles.container}>
      <View
                style={[{
                    height: 240,
                    width: 500,
                    borderRadius: 100,
                    marginVertical: 0,
                    marginLeft:-5,
                    backgroundColor: '#006BFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    zIndex:-999
                },
                {
                    transform: [{rotateZ: '170deg'}]
                },
            ]}></View>
      <View style={{
        paddingTop: 30,
        marginTop:-20,
        width:420,
        height:150,
        backgroundColor:'#006BFF',
        flexDirection: 'row'
      }}>  
      <Image  //ảnh ava người dùng
          style={{
            height: 120,
            width:120,
            marginTop:20,
            marginLeft: 20,
            borderRadius: 70,
            overflow: "hidden",
            
          }}
          source={require('../../../assets/mam.jpg')}
      />
      
      <View>
          <Text style={{
            alignSelf:'center',
            fontSize:30,
            color: '#FFFFFF',
            fontWeight: 'bold'
          }}>
            La Sắc Mầm 
          </Text>
          <Text  style= {{
              fontSize: 15,
              alignSelf: 'center',
              color: '#FFFFFF',
              fontWeight: 'bold',
              paddingTop: 10
          }}>
            Bạn xếp thứ
          </Text>
          <View style= {{
            flexDirection:'row',
            justifyContent: 'flex-end',
            alignSelf: 'center',
            paddingLeft: 50
          }}>
            <Text style= {{
                fontSize: 70,
                color: '#FFFFFF',
                fontWeight: 'bold'
                  //điền rank vào nha rip hachi
            }}>
              3
            </Text> 
            <Text style={{
              paddingTop: 20,
              paddingLeft: 20,
              alignSelf: 'flex-start',
              color: '#FFFFFF',
              fontSize: 10,
              fontWeight: '600'
            }}>
              Tăng X bậc so với{"\n"}
              tuần trước
            </Text>
          </View>
        </View>
      </View>
      <Text style= {{
          fontSize: 17,
          alignSelf: 'center',
          paddingTop: 120,
          fontWeight: 500,
          color: '#001F70'
      }}>
        Tuần này
      </Text>
      <Text style={{
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 20,
        color: '#001F70'
      }}>
        Thứ hạng sống khỏe
      </Text>
      <FlatList
        data={DATA} //data ng dùng m sort cao tới thấp nhé meo meo
        renderItem={({item}) => 
        <View style={styles.card}>
            <Text style={{
              fontSize:15,
              paddingTop: 15,
              fontWeight:'bold',
              color: '#001F70'
            }}>
              {x++}
            </Text>
            <Image
                style={styles.tinyLogo}
                // source={{uri: item.image}}
                source={require('../../../assets/dua.jpg')} //t k lấy url từ data đc huhu
            />
            <View style={styles.text}>
              <Text style={styles.name}>{item.username}</Text>
              <Text style={styles.score}>   Chỉ số sống khỏe: {item.score}/10</Text>
            </View>
        </View>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Leaderboard;