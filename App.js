// // import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Image,TouchableOpacity,SafeAreaView ,StatusBar,Platform } from "react-native";


// export default function App() {
//   return (

//     <SafeAreaView style={styles.container}>
//       <View style={styles.Nav}>
//         <Image source={require("./assets/back-arrow.png")} />
//         <Text style={styles.ProductTitle}>
//           Product
//         </Text>
//        <TouchableOpacity onPress={()=>alert("You clicked")}>
//           <Image source={require("./assets/plus.png")} />
//         </TouchableOpacity>
//       </View>
//       <View>
//         <Text>Add Products</Text>
//         <Text>Add Products</Text>
//         <Text>Add Products</Text>
//         <Text>Add Products</Text>
//         <Text>Add Products</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: "#fff",
//     marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0 ,
//     padding: 20
//   },
//   Nav: {
//     flexDirection: "row",
//     // justifyContent: "space-between",
//     alignItems: "center",
//   },
//   arrowIcon: {
//     width: 40,
//     fontWeight: "normal",
//   },
//   ProductTitle: {
//     flex: 2,
//     paddingHorizontal: 10,
//     // fontFamily: "Encode Sans",
//     fontSize: 18,
//     fontWeight: 700,
//   },
// });


import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ProductPage from './src/Component/ProductPage'

export default class App extends Component {
  render() {
    return (
      <View>
        <ProductPage/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
