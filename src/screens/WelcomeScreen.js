import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.ContainerView}>
            <View style={styles.imagestyle}>
                <Image
                    source={require('../../assets/img/imagesLR.jpg')}
                />
            </View>
            <View style={styles.TextView}>
                <View>
                    <Text style={styles.TextStyle}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                </View>

                <View style={styles.MessageView}>
                    <Text style={styles.MessageStyle}>Sign in or register with your Ampresand email</Text>
                </View>
            </View>
            <View style={styles.LogRegView}>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                  <View>  
                    <Text>REGISTER</Text> 
                        <View style={styles.LineStyle} />
                  </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                  <View>
                    <Text>SIGN IN</Text> 
                        <View style={styles.LineStyleLog} />
                  </View>
               </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ContainerView: {
        flex: 1
    },
    imagestyle: {
        maxHeight: 240,
        maxWidth: 300,
        marginBottom: 100,
    },
    TextView: {
        marginStart: 25,
        flex: 18
    },
    TextStyle: {
        fontSize: 16,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginBottom: 15
    },
    MessageView: {
       flexDirection: 'row',
       alignSelf: 'flex-start'
    },
    MessageStyle: {
        fontSize: 14,
        color: 'silver'
    },
    LogRegView: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexGrow: 3
    },
    LineStyle: {
        width: 65, 
        height: 3, 
        backgroundColor: 'red', 
        borderRadius: 15, 
    },
    LineStyleLog: {
        width: 53, 
        height: 3, 
        backgroundColor: 'red', 
        borderRadius: 15,
       
    }
});

export default WelcomeScreen