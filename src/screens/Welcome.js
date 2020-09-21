import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from '../component/logo';

function Welcome({ navigation }) {
    return (
        <View style={styles.ContainerView}>
            <Logo />
            <View style={styles.CompanyView}>
                <Text style={styles.CompanyText}>AMPERSAND</Text>
                <Text style={styles.CompanyText}>CONTACTS</Text>
            </View>

            <View style={styles.StartedView}> 
               <TouchableOpacity 
                onPress={() => navigation.navigate('WelcomeScreen')} >
                   <Text style={styles.StartedText}>GET STARTED</Text> 
                    <View style={styles.StartedLine} />
                </TouchableOpacity>
               
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ContainerView: {
        backgroundColor: 'white'
    },
    // LogoView: {
    //     alignItems: 'center',
    //     // flexDirection: 'row'
    //     // marginTop: 60,
    //     // marginBottom: 50
    // },
    // LogoText: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginTop: 120,
    //     marginBottom: 90
    // },
    CompanyView: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 160,

    },
    CompanyText: {
        fontSize: 18,
    },
    StartedView: {
        alignItems: 'center',
        marginBottom: 160
    },
    StartedText: {
        fontSize: 14
    },
    StartedLine: {
        width: 80, 
        height: 3, 
        backgroundColor: 'red', 
        borderRadius: 15, 
        marginLeft: 14
    }
});

export default Welcome