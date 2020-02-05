import React, { Component } from 'react'
import { View, StyleSheet, TextProps } from 'react-native'
import Proptypes from 'prop-types'
import Text from '../components/base/Text'
import { Header, Touch, Button } from '../components'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Header back title="abc" />
        <Touch>
          <Text numberOfLines={1}> abc </Text>
        </Touch>
        <Button title="xin chao" onPress={() => alert('xin chao')} />
      </View>
    )
  }
}

Index.propTypes = {}

export default Index
