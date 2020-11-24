import React from 'react';
import { StyleSheet, Text, TextInput, View, 
TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
                        <Ionicons name="ios-arrow-round-back" size={40} color="white" />
                    </View>
                </TouchableOpacity>
                <View style={styles.SignText}>
                    <Text style={styles.TextSign}>Sign In</Text>
                </View>
            </View>

            <View style={styles.ImageView}>
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
    TextSign: {
        fontSize: 20,
        color: 'white'
    },
    ImageView: {
        marginBottom: 60
    },
    FontStyle: {
        marginTop: 45,
        marginStart: 15,
    },
    SignText: {
        marginTop: 45,
        marginRight: 150,
    },
    ImputView: {
        marginStart: 15,
        marginEnd: 15,
        justifyContent: 'space-around',
    },
    EmailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
    },
    EmailText: {
        textAlign: 'right',
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
        marginEnd: 15,
        marginStart: 15,
        marginTop: 20,
        marginBottom: 40,
        fontSize: 14,
        fontWeight: 'bold',
        borderColor: 'red',
        borderWidth: 3,
        padding: 6,
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