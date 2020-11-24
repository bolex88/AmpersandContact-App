import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity, 
  Image
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      useremail: "",
      userpassword: "",
    };
  }

  onForgetPress() {
        this.props.navigation.navigate("LoginScreen");
  }
  render() {
    return (
        <View>
            <View style={styles.NevContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
                    <View style={styles.FontStyle}>
                        <AntDesign name="arrowleft" size={30} color="white" />
                    </View>
                </TouchableOpacity>
                <View style={styles.SignText}>
                    <Text style={styles.TextSign}>Reset Password</Text>
                </View>
            </View>

            <View>
                <Image 
                    source={require('../../assets/img/sunken-lounge.jpg')}
                />
            </View>

            <View style={styles.ImputView}>
                <View style={styles.EmailView}>
                    <Text>Email</Text>
                    <TextInput style={styles.EmailText} 
                        value={this.state.email}
                        placeholder='john.smith@mail.com'
                        onChangeText={email => this.setState({ email })}>
                    </TextInput>
                </View>
            </View>

                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this.onForgetPress.bind(this)}
                  >
                  <Text style={styles.buttonText}>Forget Password</Text>
                </TouchableOpacity>

        </View>
    );
    }
};

const styles = StyleSheet.create({
    NevContainer: {
        backgroundColor: 'red',
        height: 90,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    FontStyle: {
        marginTop: 45,
        marginLeft: 15,
    },
    SignText: {
        marginTop: 45,
        marginRight: 110,
    },
    TextSign: {
        fontSize: 20,
        color: 'white'
    },
    ImputView: {
        marginTop: 60,
        marginLeft: 15,
        marginRight: 20
    },
    EmailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 13,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
    },
    EmailText: {
        textAlign: 'right'
    },
    // SignButton: {
    //     backgroundColor: 'red',
    //     marginRight: 20,
    //     marginLeft: 15,
    //     marginTop: 20,
    //     marginBottom: 40,
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     borderColor: 'red',
    //     borderWidth: 2,
    //     padding: 5,
    //     textAlign: 'center',
    //     color: 'white',
    // },
    // LineStyle: {
    //     width: 98, 
    //     height: 3, 
    //     backgroundColor: 'red', 
    //     borderRadius: 15, 
    //     marginLeft: 50
    // },
    // ForgetView: {
    //     marginLeft: 15
    // },
    buttonContainer: {
      backgroundColor: 'red',
      paddingVertical: 15,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 20
    },
    buttonText: {
      textAlign: "center",
      color: "#FFF",
      fontWeight: "700"
    },

});
