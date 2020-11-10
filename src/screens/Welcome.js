import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Logo from '../component/logo';

function Welcome({ navigation }) {
    return (
        <View style={styles.ContainerView}>
            <View style={styles.LogoView}>
                <Logo />
            </View>
            
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
        backgroundColor: 'white',
        flex: 2,
        alignItems: 'center'
    },
    LogoView: {
        marginBottom: 40
    },
    CompanyView: {
        flexDirection: 'column',
        alignSelf: 'center',
        flex: 2,
    },
    CompanyText: {
        fontSize: 20,
        textAlign: 'center',
    },
    StartedView: {
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 1
    },
    StartedText: {
        fontSize: 15
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