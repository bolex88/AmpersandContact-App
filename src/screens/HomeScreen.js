import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { Avatar } from 'react-native-elements';

function HomeScreen({  navigation }) {
    const newName = navigation.getParam('newName');
    const newRole = navigation.getParam('newRole');
    const newEmail = navigation.getParam('newEmail');
    const newPhone = navigation.getParam('newPhone');
    
    return (
    <View>
        <View style={styles.NavContainer}>
            <View style={styles.LogoText}>
                <Text style={styles.TextLogo}>AMPERSAND</Text>
            </View>
            <View style={styles.FontStyle}>
            <AntDesign name="user" size={25} color="white" 
                onPress={() => navigation.navigate('DetailsScreen', {
                     newName: navigation.getParam('newName', 'username'), 
                     newRole: navigation.getParam('newRole', 'userrole'),
                     newEmail: navigation.getParam('newEmail', 'useremail'),
                     nawPhone: navigation.getParam('newPhone', 'userphone'),
                })} />
            </View>
        </View>

        <View style={styles.BodyView}>
            <View style={styles.HeadTextView}>
            <Text style={styles.InfoText}>Exchange Contact Information</Text>
            </View>
            <View style={styles.TextView}>
                <Text style={styles.QRText}>Scan this QR below to share your contacts</Text>
            </View>

            <View style={styles.QRView}>
                <QRCode content={('username', 'userrole', 
                        'useremail', 'userphone')}/>
                
            </View>
            <View style={styles.UserView}>
                <Avatar
                size="medium"
                title="MT"
                rounded
                source={require('../../assets/photo/beach.jpg')}
                />
            <View style={styles.UserText}>
                <Text>{(navigation.getParam('newName', 'username'))}</Text>
                <Text>{(navigation.getParam('newRole', 'userrole'))}</Text>
            </View>
            </View>
        </View>
        <View style={styles.QRScanView}>
            <Text>Want to add a new connection?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ScanScreen')}>
                <Text style={styles.ScanText}>Scan QR</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    NavContainer: {
        backgroundColor: 'red',
        marginBottom: 20,
        height: 90,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    FontStyle: {
        marginTop: 45,
        marginLeft: 15,
        marginRight: 25
    },
    LogoText: {
        marginTop: 45,
        marginLeft: 130,
    },
    TextLogo: {
        fontSize: 18,
        color: 'white'
    },
    BodyView: {
        borderBottomColor: 'lightgray',
        // marginBottom: 40,
        padding: 2,
        borderBottomWidth: 2,
        backgroundColor: 'white'
    },
    HeadTextView: {
        marginBottom: 10,
        marginLeft: 25,
        marginRight: 30
    },
    InfoText: {
        fontSize: 18
    },
    TextView: {
        marginBottom: 30,
        marginLeft: 25,
        marginRight: 30

    },
    QRText: {
        fontSize: 20,
        color: 'lightgray'
    },
    QRView: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 5
    },
    UserView: {
        marginTop: 40,
        marginLeft: 25,
        marginBottom: 30,
        flexDirection: 'row'
    },
    UserText: {
        marginLeft: 8,
        marginTop: 8,
        color: 'black'
    },
    QRScanView: {
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 10
    },
    ScanText: {
        borderColor: 'red',
        borderWidth: 2,
        padding: 1,
        textAlign: 'center',
        color: 'red',
        marginLeft: 15,
        width: 98, 
        height: 24,
       
    }
});

export default HomeScreen