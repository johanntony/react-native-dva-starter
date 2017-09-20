import React, { Component } from 'react'
import { StyleSheet, View, Button, Text,TextInput } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: 'Detail',
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>detail</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
        <Button title="Goto Detail" onPress={this.gotoDetail} />
        <Button title="Go Back" onPress={this.goBack} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Detail
