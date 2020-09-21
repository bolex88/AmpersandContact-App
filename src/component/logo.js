import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View className="logo-main">
        <Image style={styles.logomain} 
        source={require("../../assets/img/LogoAmp.png")}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    logomain: {
        width: 170,
        height: 50,
        alignSelf: 'center',
        marginTop: 160,
        marginBottom: 40
    }
});

export default Logo;