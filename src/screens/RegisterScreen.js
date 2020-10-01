import React, { Component } from 'react';
import { 
  StyleSheet, Text, TextInput, 
  View, TouchableOpacity, ScrollView, 
  ImageBackground, Image, AsyncStorage } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            username: "", 
            useremail: "",  
            userphone: "", 
            userrole: "", 
            socialTW: "", 
            socialLK: "",
        };
    }

  async onRegisterPress() {
    const {
            photo, 
            username, 
            useremail, 
            userphone, 
            userrole, 
            socialTW, socialLK } = this.state
    console.log(photo);
    console.log(username);
    console.log(useremail);
    console.log(userphone);
    console.log(userrole);
    console.log(socialTW);
    console.log(socialLK);
    await AsyncStorage.setItem("photo", image);
    await AsyncStorage.setItem("username", name);
    await AsyncStorage.setItem("useremail", email);
    await AsyncStorage.setItem("userphone", phone);
    await AsyncStorage.setItem("userrole", role);
    await AsyncStorage.setItem("socialTW", twitter);
    await AsyncStorage.setItem("socialLK", linkedin);
    // this.props.navigation.navigate("HomeScreen");
  }

  render() {
    const { image } = this.state
    const { navigation } = this.props.navigation;
    return (
        <View>
              <View style={styles.NevContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('WelcomeScreen')}>
                    <View style={styles.FontStyle}>
                    <AntDesign name="arrowleft" size={30} color="white" />
                    </View>
                </TouchableOpacity>
                <View style={styles.RegText}>
                    <Text style={styles.TextRegs}>Register</Text>
                </View>
            </View>
        <ScrollView>
            <ImageBackground source={{ uri: image }} 
                        style={{ width: 360, height: 200 }}>
                <AntDesign style={styles.FontPhoto} 
                    name="user" size={60} color="red" />
                <Text style={styles.PhotoText} 
                onPress={this._pickImage}>ADD PROFILE PHOTO</Text>
            </ImageBackground>
           
            <View style={styles.RegInfoView}>
                <View style={styles.PlaceView}>
                    <Text>Full Name</Text>
                    <TextInput style={styles.PlaceHolderText}
                        value={this.state.name} 
                        placeholder='Joan Shay'
                        onChangeText={name => this.setState({ name })}>
                    </TextInput>
                </View>
               
                <View style={styles.PlaceView}>
                    <Text>Email</Text>
                    <TextInput style={styles.PlaceHolderText}
                        value={this.state.email}
                        placeholder='joan.shay@sparrow.com'
                        onChangeText={email => this.setState({ email })}>
                    </TextInput>
                </View>
               
                <View style={styles.PlaceView}>
                    <Text>Phone Number</Text>
                    <TextInput style={styles.PlaceHolderText}
                        value={this.state.phone} 
                        placeholder='+231 (770) 245 190'
                        onChangeText={phone => this.setState({ phone })}>
                    </TextInput>
                </View>
                
                <View style={styles.PlaceView}>
                    <Text>Role</Text>
                    <TextInput style={styles.PlaceHolderText} 
                        value={this.state.role}
                        placeholder='Director of Marketing'
                        onChangeText={role => this.setState({ role })}>
                    </TextInput>
                </View>
               
                <View style={styles.PlaceView}>
                    <Text>Twitter</Text>
                    <TextInput style={styles.PlaceHolderText} 
                        value={this.state.twitter}
                        placeholder='@joansays'
                        onChangeText={twitter => this.setState({ twitter })}>
                    </TextInput>
                </View>
               
                <View style={styles.PlaceView}>
                    <Text>Linkedin</Text>
                    <TextInput style={styles.PlaceHolderText}
                        value={this.state.linkedin} 
                        placeholder='/joan.shay'
                        onChangeText={linkedin => this.setState({ linkedin })}>
                    </TextInput>
                </View>
            </View>

            <View>
                <TouchableOpacity onPress={this.onRegisterPress.bind(this)}
                onPress={() => this.props.navigation.navigate('HomeScreen', {
                    uri : this.state.image,
                    newName: this.state.name,
                    newEmail: this.state.email,
                    newPhone: this.state.phone,
                    newRole: this.state.role,
                    newSocial: this.state.twitter,
                    newSocial1: this.state.linkedin
                    })}>
                    <Text style={styles.RegButton}>REGISTER</Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );

    }

    componentDidMount() {
        this.getPermissionAsync();
      }
    
      getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    
      _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
    };
}


const styles = StyleSheet.create({
    NevContainer: {
        backgroundColor: 'red',
        height: 90,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    FontStyle: {
        marginTop: 40,
        marginLeft: 15,
       
    },
    RegText: {
        marginTop: 40,
        marginRight: 150,
        
    },
    TextRegs: {
        fontSize: 20,
        color: 'white'
    },
    // FileUpload: {
    //     alignItems: 'center',
    //     marginBottom: 20,
    //     backgroundColor: 'lightgrey'
    // },
    FontPhoto: {
        marginTop: 30,
        alignSelf: 'center'
    },
    PhotoText: {
        color: 'red',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 50,
        alignSelf: 'center'
    },
    RegInfoView: {
        marginTop: 40,
        marginLeft: 15,
        marginRight: 20,
        marginBottom: 6
    },
    PlaceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
    },
    PlaceHolderText: {
        textAlign: 'right'
    },
    RegButton: {
        backgroundColor: 'red',
        marginRight: 20,
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 40,
        fontSize: 14,
        fontWeight: 'bold',
        borderColor: 'red',
        borderWidth: 2,
        padding: 5,
        textAlign: 'center',
        color: 'white',
    },
});

// // export default RegisterScreen
