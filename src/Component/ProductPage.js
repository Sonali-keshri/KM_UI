import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

export default class ProductPage extends Component {
  state = {
    toggleBox: false,
  };

  toggleState = () => {
    this.setState({
      toggleBox: !this.state.toggleBox,
    });
  };

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Nav}>
          <Image source={require("../../assets/back-arrow.png")} />
          <Text style={styles.ProductTitle}>Product</Text>
          <TouchableOpacity onPress={this.toggleState}>
            <Image source={require("../../assets/plus.png")} />
          </TouchableOpacity>
          {this.state.toggleBox === true ? (
            <View style={styles.togglePlusBox} >
              <Text style={styles.toggleOptions}>Add Products</Text>
              <Text style={styles.toggleOptions}>Upload CSV File</Text>
              <Text style={styles.toggleOptions}>Upload Purchase Invoice</Text>
              <Text style={styles.toggleOptions}>Update Stocks</Text>
              <Text style={styles.toggleOptions}>Add/Update Units</Text>
            </View>
          ) : null}
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.list}>
            <Text></Text>
          </View>
          <View style={styles.list}>
            <Text></Text>
          </View>
          <View style={styles.list}>
            <Text></Text>
          </View>
          <View style={styles.list}>
            <Text></Text>
          </View>
          <View style={styles.list}>
            <Text></Text>
          </View>
          <View style={styles.list}>
            <Text></Text>
          </View>
          
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      padding: 20,
    },
    Nav: {
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      paddingVertical: 10,
      height: 45,
      zIndex: 2,
    },
    arrowIcon: {
      width: 40,
      fontWeight: "normal",
    },
    ProductTitle: {
      flex: 2,
      paddingHorizontal: 10,
      fontSize: 18,
      fontWeight: 700,
    },
    togglePlusBox: {
      position: "absolute",
      right: 0,
      top: 34,
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      
    },
    toggleOptions: {
      minWidth: 160,
      fontSize: 12,
      padding: 8,
    },
    list: {
        paddingHorizontal: 15,
        paddingVertical: 18,
        backgroundColor: "#EDF2F3",
        borderRadius: 10,
        marginBottom: 10,
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: 0.02,
        flexDirection: "row",
        justifyContent: "space-between",
      },
   
  });
