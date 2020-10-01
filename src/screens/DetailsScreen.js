import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign, Entypo, Feather, SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

function DetailsScreen({ navigation }) {
    const uri = navigation.getParam('uri');
    const newName = navigation.getParam('newName');
    const newEmail = navigation.getParam('newEmail');
    const newPhone = navigation.getParam('newPhone');
    const newRole = navigation.getParam('newRole');
    // const newSocial = navigation.getParam('newSocial');
    // const newSocial1 = navigation.getParam('newSocial1');
    
    return (
        <View>
            <View style={styles.NevContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <View style={styles.FontStyle}>
                    <AntDesign name="arrowleft" size={30} color="white" />
                    </View>
                </TouchableOpacity>
                <View style={styles.ProfText}>
                    <Text style={styles.TextProfs}>My Profile</Text>
                </View>
            </View>
            
            <View style={styles.AvatarView}>
                <Avatar
                    size="large"
                    title="JS"
                    rounded
                    source={{uri:uri}}
                />
                <View style={styles.AvaterText}>
                    <Text style={styles.AvaterTextStyle}>{(navigation.getParam('newName', 'username'))}</Text>
                    <Text>{(navigation.getParam('newRole', 'userrole'))}</Text>
                </View>
            </View>

            <View style={styles.SocialView}>
                <Entypo style={styles.SocialStyle} name="twitter-with-circle" size={30} color="black" />
                <Entypo style={styles.SocialStyle} name="linkedin-with-circle" size={30} color="black" />
            </View>

            <View style={styles.ContactsView}>
                <SimpleLineIcons style={styles.ContactView} name="phone" size={20} color="black"
                > {(navigation.getParam('newPhone', 'userphone'))}
                </SimpleLineIcons> 
                <SimpleLineIcons style={styles.ContactView} name="envelope" size={20} color="black"
                > {(navigation.getParam('newEmail', 'useremail'))}
                </SimpleLineIcons>
                <EvilIcons style={styles.ContactView} name="location" size={20} color="black"> New Georgia Estate</EvilIcons>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    NevContainer: {
        backgroundColor: 'red',
        height: 90,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    AvatarView: {
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 15,
        marginTop: 10
    },
    AvaterText: {
        marginTop: 20,
        marginLeft: 8
    },
    AvaterTextStyle: {
        fontSize: 18
    },
    FontStyle: {
        marginTop: 40,
        marginLeft: 15,
        marginBottom: 10
    },
    ProfText: {
        marginTop: 40,
        marginRight: 140,
        alignSelf: 'center',
        marginBottom: 10
    },
    TextProfs: {
        fontSize: 20,
        color: 'white',
       
    },
    SocialView: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 30
    },
    SocialStyle: {
        marginRight: 10,
    },
    ContactsView: {
        marginLeft: 15
    },
    ContactView: {
        marginBottom: 25,
    }
});

export default DetailsScreen