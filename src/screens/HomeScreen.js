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
    const uri = navigation.getParam('uri');
    // console.log(newPhone);
    return (
    <View style={styles.ContainerView}>
        <View style={styles.NavContainer}>
            <View style={styles.LogoText}>
                <Text style={styles.TextLogo}>AMPERSAND</Text>
            </View>
            <View style={styles.FontStyle}>
            <AntDesign name="user" size={25} color="white" 
                onPress={() => navigation.navigate('DetailsScreen', {
                     uri: navigation.getParam('uri', 'image'),
                     newName: navigation.getParam('newName', 'username'), 
                     newRole: navigation.getParam('newRole', 'userrole'),
                     newEmail: navigation.getParam('newEmail', 'useremail'),
                     newPhone: navigation.getParam('newPhone', 'userphone'),
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
                <QRCode onScan={() => navigation.navigate('Details', {
                     uri: navigation.getParam('uri', 'image'),
                     newName: navigation.getParam('newName', 'username'), 
                     newRole: navigation.getParam('newRole', 'userrole'),
                     newEmail: navigation.getParam('newEmail', 'useremail'),
                     newPhone: navigation.getParam('newPhone', 'userphone'),
                })}/>
                
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
        <View style={styles.LineStyle}/>
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
    ContainerView: {
        flex: 1,
        backgroundColor: 'white'
    },
    NavContainer: {
        backgroundColor: 'red',
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
        borderBottomColor: 'white',
        padding: 2,
        borderBottomWidth: 2,
        backgroundColor: 'white',
        
    },
    HeadTextView: {
        marginTop: 25,
        marginBottom: 10,
        marginStart: 25,
    },
    InfoText: {
        fontSize: 18,
    },
    TextView: {
        marginBottom: 25,
        marginStart: 25
    },
    QRText: {
        fontSize: 20,
        color: 'lightgray'
    },
    QRView: {
        alignSelf: 'center',
        marginBottom: 5
    },
    UserView: {
        marginTop: 20,
        marginStart: 25,
        marginBottom: 25,
        flexDirection: 'row'
    },
    UserText: {
        marginLeft: 8,
        marginTop: 8,
        color: 'black'
    },
    LineStyle: {
        width: 1000, 
        height: 2, 
        backgroundColor: 'lightgray', 
        borderRadius: 15, 
        
    },
    QRScanView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    ScanText: {
        borderColor: 'red',
        borderWidth: 3,
        padding: 1,
        textAlign: 'center',
        color: 'red',
        marginLeft: 15,
        width: 98, 
        height: 24,
       
    }
});

export default HomeScreen