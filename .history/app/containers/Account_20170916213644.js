import React, { Component } from 'react'
import { StyleSheet, View, Image, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

@connect()
class Account extends Component {
  static navigationOptions = {
    title: '这样吃饭',
    tabBarLabel: 'Account',
    tabBarIcon: ({ focused, tintColor }) =>
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/person.png')}
      />,
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{ height: 40,width:100 borderColor: 'gray', borderWidth: 1 }} />
        <Button title="Goto Login" onPress={this.gotoLogin} />
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
  icon: {
    width: 32,
    height: 32,
  },
})

export default Account
