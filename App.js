
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ProductPage from './src/Component/ProductPage'
import Add_Update_Units from './src/Component/Add_Update_Units/Add_Update_Units'

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <ProductPage/> */}
        <Add_Update_Units/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
