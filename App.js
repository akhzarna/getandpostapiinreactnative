/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */





import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Dimensions,
  CheckBox,
  FlatList,
  SectionList,
} from 'react-native';

import axios from 'react-native-axios'

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      coronaArray:[],
    }
}

  componentDidMount() {

    // return fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    // .then((response) => response.json())
    // .then((json) => {
    //
    //   // console.log('coronavirus-tracker-api locations is = ',json.locations);
    //   this.setState({coronaArray:json.locations});
    //   // return json.movies;
    //
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

  axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
  .then(function (response) {
    console.log('response is = ', response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }


  rowSelected(item){
  }

  render(){
  //  console.log('this.state.bookArray = ',this.state.bookArray);
   return(
     <View style={styles.outerContainer}>
     <FlatList
            style={{flex:1,marginBottom:0}}
            data={this.state.coronaArray}
            numColumns={1}
            renderItem={
            ({item}) =>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.rowSelected(item)}>
              <Text style={styles.textStyle}>{item.country_population}</Text>
              <Text style={styles.textStyle}>{item.country}</Text>

            </TouchableOpacity>
          }
     />
    </View>
    );
  }
}

const styles=StyleSheet.create({
  outerContainer:{
    flex:1,
    backgroundColor:'#F7FAFB',
  },
  textStyle:{
    color:'#38803B',
    marginTop:0,
    marginBottom:5,
    textAlign:'left',
    fontSize:20,
  },
})

module.exports=App;


// import React,{ Component } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
//
// import admob, { MaxAdContentRating, InterstitialAd, AdEventType, RewardedAd, BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';
//
//
// class App extends Component {
//
//   constructor(props){
//     super(props);
//     this.state={
//
//         }
//   }
//
//   componentDidMount(){
//
//     admob()
//     .setRequestConfiguration({
//       // Update all future requests suitable for parental guidance
//       maxAdContentRating: MaxAdContentRating.PG,
//
//       // Indicates that you want your content treated as child-directed for purposes of COPPA.
//       tagForChildDirectedTreatment: true,
//
//       // Indicates that you want the ad request to be handled in a
//       // manner suitable for users under the age of consent.
//       tagForUnderAgeOfConsent: true,
//     })
//     .then(() => {
//       // Request config successfully set!
//     });
//   }
//
//
//   render(){
//
//   return (
//
//     <View style={{flex:0,marginTop:1,backgroundColor:'transparent',height:70,}}>
//
//     <BannerAd size={BannerAdSize.SMART_BANNER}
//               unitId={'ca-app-pub-9152919921144751/8604842585'}>
//     </BannerAd>
//      </View>
//
//       );
//     }
// }
//
// const styles=StyleSheet.create({
//
//   headerStyle:{
//   justifyContent:'center',
//   width:window.width,
// 	},
//   viewStyle:{
//     height: 60,
//     backgroundColor:'white',
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   titleStyle:{
//   fontWeight:'bold',
//   color:  'white',    //'#2A3990',
//   fontSize:18,
//   fontFamily:'UrduTypesetting',
//   },
//   iconView:{
//     flex:0.1,
//     paddingRight:5,
//   },
//   textView:{
//     flex:0.9,
//     paddingLeft:10,
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   notifyStyle:{
//     flex:0.1,
//     height:40,
//     alignItems:'flex-start',
//     justifyContent:'center',
//   },
//   iconStyle:{
//     width:20,
//     height:17,
//   },
//   buttonDimension:{
//     alignItems:'center',
//     justifyContent:'center',
//     marginRight:8,
//     width:40,
//     height:40,
//   },
//   iconMenuDimension:{
//     width:25,
//     height:20,
//   },
//   buttonNotificationDimention:{
//     alignItems:'center',
//     justifyContent:'center',
//     marginRight:10,
//     width:40,
//     height:40,
//   },
//   iconNotifyDimension:{
//      width:30,
//      height:25,
//      marginRight:15,
//      resizeMode: 'contain',
//   },
//   notifyheaderStyle:{
//   justifyContent:'center',
//   alignItems:'center',
//   height: 120,
//   },
// });
//
// export default App;
