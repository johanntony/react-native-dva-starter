import React, { Component } from 'react'
import { StyleSheet, View, Image, Button, Text, Picker, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

@connect()
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { language: 'js' };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  static navigationOptions = {
    title: '这样吃饭',
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) =>
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />,
  }

  gotoDetail = () => {
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
    this.setModalVisible(!this.state.modalVisible)
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({ language: lang })}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text>home</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
        <Button title="Goto Detail" onPress={this.gotoDetail} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
