import {React, useRef} from 'react'
import {  StyleSheet, View, Text, Image, ScrollView, Button, Dimensions } from 'react-native';
import { Icon } from '@ui-kitten/components';


// import DashboardPage from './dashboard-page.js/dashboard-page';

const DATA = [
  {key: 3,
      score: 4,
      date: '22/02/2024',
      blink: 25,
      sleep: 12,
      drink: 12
  },
  {key: 2,
      score: 4,
      date: '23/02/2024',
      blink: 20,
      sleep: 12,
      drink: 0},
  {key: 1,
      score: 4,
      date: '24/02/2024',
      blink: 19,
      sleep: 10,
      drink: 6},
]

function Dashboard ({navigation})  {
  
  const windowWidth = Dimensions.get('window').width;
  w = windowWidth*2
  
  const scrollRef = useRef()

  return (
        
        <View>
            <View
                style={[{
                    height: '21%',
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
              width:'100%',
              height:'16%',
              backgroundColor:'#006BFF',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}> 
            
              <View style={{
                paddingLeft: 40,
                paddingTop: '10%'
              }}>
                  <Text  style= {{
                      fontSize: 25,
                      color: '#FFFFFF',
                      paddingTop: 40,
                  }} onPress={()=>{navigation.navigate("PushNoti")}}>
                    Xin chào,
                  </Text>
                  <Text style={{
                    fontSize:30,
                    color: '#FFFFFF',
                    fontWeight: 'bold'
                    //tên ng dùng
                  }}>
                    La Sắc Mầm 
                </Text>
                </View>
                <Image  //ảnh ava người dùng
                  style={{
                    height: 100,
                    width:100,
                    marginTop:'15%',
                    marginRight:40,
                    borderRadius: 70,
                    overflow: "hidden",
                  }}
                  source={require('../../../assets/mam.jpg')}
                />
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 113
            }}>
                <View style={{
                  
                }}>
                    <Button title="◄"     
                            color= '#C6DFFF'
                            onPress={() => { this.ScrollView.scrollTo({ x: w-=windowWidth }) }} />
                </View>
                <Text style={{
                    alignSelf:'center',
                  }}>
                    Sức khỏe của bạn
                </Text>
                <View style={styles.ButtonContainer}>
                    <Button title="►"
                            color= '#C6DFFF'
                            onPress={() => { this.ScrollView.scrollTo({ x: w+=windowWidth }) }} />
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <ScrollView
                  horizontal={true}
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  // ref={(node) => this.scroll = node}
                  style={{
                    width: windowWidth
                  }}
                  ref={ref => {this.ScrollView = ref}}
                  onContentSizeChange={() => this.ScrollView.scrollToEnd({animated: false})}
              >
                  {DATA.map (item => {
                    return (
                      <View style={{
                              width: windowWidth
                            }}
                            key={item.key}
                      >
                            <ScrollView contentContainerStyle={{ 
                                flexGrow: 1,
                                minHeight: '200%'}}
                            >
          
                            <Text style={{
                                alignSelf:'center',
                                fontSize: 20,
                                fontWeight: '700',
                            }}>
                                {item.date}
                            </Text>
                            <Image
                                style={{
                                    marginTop: 20,
                                    height:170,
                                    width:190,
                                    alignSelf: 'center' 
                                }}
                                source={require('../../../assets/sad.png')} //input ảnh dựa trên score của ng dùng (t dead)
                            />
                            <View style={{
                                backgroundColor:'#C6DFFF', //đổi theo score luôn xin designer bảng màu 
                                height: 30,
                                paddingLeft: 20,
                                paddingRight: 20,
                                alignSelf: 'center',
                                marginTop: 30,
                                flexwrap: 'wrap',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    alignSelf:'center',
                                    paddingTop: 5,
                                    fontWeight: '500'
                                }}>
                                    Hãy chú ý sức khỏe bạn nhé {/* input text dựa trên score luôn */} 
                                </Text>
                            </View>
                            <Text style={{
                                paddingTop: 40,
                                alignSelf: 'center',
                                fontWeight: '500'
                            }}>
                                Báo cáo chi tiết
                            </Text>
                            <View style={{
                                flexDirection:'row',
                            }}>
                                <View style={{
                                    backgroundColor: '#FFECEA',
                                    height:250,
                                    width: 190,
                                    alignSelf: 'center',
                                    borderRadius:20,
                                    marginTop: 20,
                                    marginLeft: 10
                                }}>
                                    <View style={{
                                      flexDirection: 'row',
                                      justifyContent: 'space-between'
                                    }}>
                                        <Icon
                                          style={{
                                              width: 30,
                                              height:30,
                                              marginLeft:20,
                                              marginTop:10
                                          }}
                                          fill='#FF3C3C'
                                          name='eye-outline'
                                        />
                                        <Text style={{
                                            paddingRight: 20,
                                            paddingTop: 20,
                                            color: '#FF3C3C',
                                            textDecorationLine: 'underline',
                                            fontSize:12
                                            }}
                                            onPress={()=>{navigation.navigate("Blink")}}
                                        >
                                            Xem thêm
                                        </Text>
                                    </View>
                                    <Text style={{
                                        alignSelf: 'center',
                                        color: '#FF3C3C',
                                        fontSize: 13,
                                        paddingTop: 20,
                                        fontWeight: '600'
                                    }}>
                                        Nháy mắt
                                    </Text>
                                    <Text style={{
                                      paddingTop: 10,
                                      alignSelf: 'center',
                                      fontSize: 36,
                                      color: '#FF3C3C',
                                      fontWeight: 'bold'
                                    }}>
                                        {item.blink} lần
                                    </Text>
                                    <Text style={{
                                        color: '#FF3C3C',
                                        alignSelf: 'center'
                                    }}>
                                        (phút)
                                    </Text>
                                    <Text style={{
                                        alignSelf: 'center',
                                        paddingTop: 20,
                                        fontWeight: '400',
                                        textAlign: 'center'
                                    }}>
                                        Mắt thường xuyên{"\n"} 
                                        khô mỏi
                                    </Text>
                                </View>
                                      
                                <View style={{
                                    backgroundColor: '#FFE9C9',
                                    height:250,
                                    width: 190,
                                    alignSelf: 'center',
                                    borderRadius:20,
                                    marginTop: 20,
                                    marginLeft: 10
                                }}> 
                                      <View style={{
                                      flexDirection: 'row',
                                      justifyContent: 'space-between'
                                    }}>
                                        <Icon
                                          style={{
                                              width: 30,
                                              height:30,
                                              marginLeft:20,
                                              marginTop:10
                                          }}
                                          fill='#ED8A16'
                                          name='trending-down-outline'
                                        />
                                        <Text style={{
                                            paddingRight: 20,
                                            paddingTop: 20,
                                            color: '#ED8A16',
                                            textDecorationLine: 'underline',
                                            fontSize:12
                                        }}>
                                            Xem thêm
                                        </Text>
                                    </View>
                                    <Text style={{
                                        alignSelf: 'center',
                                        color: '#ED8A16',
                                        fontSize: 13,
                                        paddingTop: 20,
                                        textAlign: 'center',
                                        fontWeight: '600'
                                    }}>
                                        Bạn ngủ ít hơn{"\n"}  tuần trước 
                                    </Text>
                                    <Text style={{
                                      paddingTop: 10,
                                      alignSelf: 'center',
                                      fontSize: 36,
                                      color: '#ED8A16',
                                      fontWeight: 'bold'
                                    }}>
                                        {item.sleep} giờ
                                    </Text>
                                    <Text style={{
                                        color: '#ED8A16',
                                        alignSelf: 'center',
                                        fontSize: 10,
                                        marginTop:70
                                    }}>
                                        (19/02/2024-{item.date})
                                    </Text>
                                </View>
                            </View>
                                <View style={{
                                    backgroundColor: '#E4EDFF',
                                    height:155,
                                    width: 390,
                                    alignSelf: 'center',
                                    borderRadius:20,
                                    marginTop: 20
                                }}> 
                                        <View style={{
                                      flexDirection: 'row',
                                      justifyContent: 'flex-start'
                                    }}>
                                        {/* <Icon
                                          style={{
                                              width: 30,
                                              height:30,
                                              marginLeft:20,
                                              marginTop:10
                                          }}
                                          fill='#0069C9'
                                          name='moon-outline'
                                        /> */}
                                        <Image
                                            style={{
                                                width:390,
                                                height:155,
                                                borderRadius: 15
                                            }}
                                            source={require('../../chatluongigacngu.png')}    
                                        />
                                        {/* <Text style={{
                                            paddingLeft: 10,
                                            paddingTop: 15,
                                            color: '#0069C9',
                                            fontSize:15,
                                            fontWeight: '600'
                                        }}>
                                            Chất lượng giấc ngủ
                                        </Text> */}
                                    </View>
                                </View>

                                <View style={{
                                    flexDirection:'row',

                                }}>
                                        <View style={{
                                            backgroundColor: '#F8E4FF',
                                            height:150,
                                            width: 190,
                                            borderRadius:20,
                                            marginTop: 20,
                                            marginLeft: 10
                                        }}> 
                                            <Icon
                                                style={{
                                                    width: 30,
                                                    height:30,
                                                    marginLeft:20,
                                                    marginTop:10
                                                }}
                                                fill='#BB31EC'
                                                name='flash-outline'
                                            />
                                            <Text style={{
                                                alignSelf: 'flex-end',
                                                fontSize: 45,
                                                color: '#BB31EC',
                                                fontWeight: 'bold',
                                                paddingRight: 25,
                                                paddingTop: 10
                                            }}>
                                                    {item.drink}
                                            </Text>
                                            <Text style={{
                                                alignSelf:'center',
                                                fontSize: 11,
                                                color: '#BB31EC'
                                            }}>
                                                lần sử dụng đồ uống tăng lực
                                            </Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: '#F3FAFF',
                                            height:150,
                                            width: 190,
                                            alignSelf: 'center',
                                            borderRadius:20,
                                            marginTop: 20,
                                            marginLeft: 10,
                                            borderColor: "#3C94FF",
                                            borderWidth: 1
                                        }}> 
                                            <Text style={{
                                                paddingLeft: 19,
                                                paddingTop: 20,
                                                color: '#559BED',
                                                fontWeight: '600'
                                            }}>
                                                    Năng lượng
                                            </Text>
                                            <Image
                                            style={{
                                                width:110,
                                                height:110,
                                                alignSelf: 'flex-end',
                                                marginTop: -15
                                            }}
                                            source={require('../../nangluong.png')}    
                                            />
                                        </View>
                                        
                                </View>
                                <View style={{
                                            backgroundColor: '#3C94FF',
                                            height:180,
                                            width: 390,
                                            alignSelf: 'center',
                                            borderRadius:20,
                                            marginTop: 20
                                }}>
                                        <Text style={{
                                            color: '#FFFFFF',
                                            paddingLeft: 20,
                                            paddingTop: 20,
                                            fontSize: 17,
                                            fontWeight: '500'
                                        }}>
                                            Bài tập cho
                                        </Text>
                                        <Text style={{
                                            color: '#FFFFFF',
                                            paddingLeft: 20,
                                            fontSize: 27,
                                            fontWeight: 'bold'
                                        }}>
                                            Mắt khỏe
                                        </Text>
                                        <Image
                                            style={{
                                                width:150,
                                                height:150,
                                                marginLeft: 200,
                                                position: 'absolute'
                                            }}
                                            source={require('../../mat.png')}    
                                        />
                                        <View style={{
                                            flexDirection:'row',
                                            marginTop: 70,
                                            marginLeft: 20
                                        }}>
                                            <Icon
                                                style={{
                                                    width: 20,
                                                    height:20,
                                                }}
                                                fill='#FFFFFF'
                                                name='play-circle-outline' //k chinh dc weight nha phanh
                                            />
                                            <Text style={{
                                                paddingTop: 1,
                                                paddingLeft: 5,
                                                fontSize: 12,
                                                color: '#FFFFFF'
                                            }}>
                                                Tìm hiểu thêm
                                            </Text>
                                        </View>
                                </View>
                        </ScrollView>
                    </View>
                    );
                  })}
                  
                  
                  
              </ScrollView>
            </View>
        </View>
  )
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
export default Dashboard;
