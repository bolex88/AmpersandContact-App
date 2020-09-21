import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
        <View>
            <View style={styles.imagestyle}>
                <Image
                    source={require('../../assets/img/imagesLR.jpg')}
                />
            </View>
            
            <View>
                <Text style={styles.TextStyle}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
            </View>

            <View style={styles.MessageView}>
                <Text style={styles.MessageStyle}>Sign in or register with your Ampresand email</Text>
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
    imagestyle: {
        maxHeight: 240,
        maxWidth: 300,
        marginBottom: 100,
    },
    TextStyle: {
        fontSize: 16,
        marginStart: 15,
        marginEnd: 20
    },
    MessageView: {
        marginTop: 13,
        marginStart: 15,
        marginBottom: 60
    },
    MessageStyle: {
        fontSize: 14,
        color: 'silver'
    },
    LogRegView: {
        marginStart: 30,
        marginEnd: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 120
    },
    LineStyle: {
        width: 65, 
        height: 3, 
        backgroundColor: 'red', 
        borderRadius: 15, 
        // marginLeft: 14
    },
    LineStyleLog: {
        width: 60, 
        height: 3, 
        backgroundColor: 'red', 
        borderRadius: 15,
        marginEnd: 15
        
    }
});

export default WelcomeScreen