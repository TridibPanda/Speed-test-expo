import React, { useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import * as FileSystem from 'expo-file-system';

const downloadSizeInBits = 81752256;//12000000
const metric = 'MBps';
const imageURI= "https://vidoes.pitchers.ai/Dev-Pitches/cRjsX0idQAR1IiXbTpvZD4Hh2843/1617172373834/video";
//"https://drive.google.com/open?id=1MBHJXeRxMLLwHFpqbgTdEPsFArMM0cz7";
const App = (props) => {

	// useEffect(() => {
		
	// }, []);
  const speed = async()=>{
      console.log("speed");
      
        const startTime = (new Date()).getTime();
        FileSystem.downloadAsync(imageURI,FileSystem.documentDirectory + "image")
        .then(async ({ uri }) => {
          const endTime = (new Date()).getTime();
            const duration = (endTime - startTime)/ 1000;
            const speed = (downloadSizeInBits/ (1024 * 1024 * duration));
            console.log(speed,duration,'speed details')
        })
        .catch((error) => {
          console.error(error);
        });
  }
  //https://www.npmjs.com/package/react-native-circular-progress
  
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={speed} style={styles.gocontainer}>
        <Text style={styles.gotext}>Go</Text>
      </TouchableOpacity>
      <Text style={styles.footertext}>Tridib</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1e294a',
	},
  gotext:{
    fontSize:50,
    color:'#fff',
  },
  gocontainer:{
    height:200,
    width:200,
    borderRadius:200,
    borderColor:'#ad7411',
    borderWidth:3,
    justifyContent: 'center',
		alignItems: 'center',
  },
  footertext:{
   top:'30%',
    fontSize:15,
    color:'#fff',
  }
});

export default App;
