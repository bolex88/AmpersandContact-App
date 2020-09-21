import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            useremail: "",
            userpassword: ""
        };
    }
    async onLoginPress() {
        const { email, password } = this.state;
        console.log(email);
        console.log(password);
        await AsyncStorage.setItem("useremail", email);
        await AsyncStorage.setItem("userpassword", password);
        this.props.navigation.navigate("HomeScreen");
    }

    render() {
        const { navigation } = this.props.navigation;
    return (
        <View>
            <View style={styles.NevContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('WelcomeScreen')}>
                    <View style={styles.FontStyle}>
                        <AntDesign name="arrowleft" size={30} color="white" />
                    </View>
                </TouchableOpacity>
                <View style={styles.SignText}>
                    <Text style={styles.TextSign}>Sign In</Text>
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
 
                <View style={styles.PassView}>
                    <Text>Password</Text>
                    <TextInput style={styles.PassText} 
                        secureTextEntry
                        value={this.state.password}
                        placeholder='.......'
                        onChangeText={password => this.setState({ password })}>
                    </TextInput>
                </View>
            </View>

                <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate('HomeScreen')}>
                    <Text style={styles.SignButton}>SIGN IN</Text>
                </TouchableOpacity>

            <View style={styles.ForgetView}> 
               <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')}>
                   <Text>Forgot? Reset Password</Text> 
                    <View style={styles.LineStyle}/>
                </TouchableOpacity>
               
            </View>
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
        marginRight: 150,
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
     PassView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    PassText: {
        textAlign: 'right'
    },
    SignButton: {
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
    LineStyle: {
        width: 98, 
        height: 3, 
        backgroundColor: 'red', 
        borderRadius: 15, 
        marginLeft: 50
    },
    ForgetView: {
        marginLeft: 15
    }

});

// export default LoginScreen