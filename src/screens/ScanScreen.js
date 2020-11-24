import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Entypo, Feather, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }) {
  const newName = navigation.getParam('newName');
  const newRole = navigation.getParam('newRole');
  const newEmail = navigation.getParam('newEmail');
  const newPhone = navigation.getParam('newPhone');
  const uri = navigation.getParam('uri');
  // console.log(newPhone);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate('Details' , {
      uri: 'http://gggg.com',
      newName: 'James T. Wilson', 
      newRole: 'ICT Officer',
      newEmail: 'james@gmail.com',
      newPhone: '+231 (776) 307022',
    });

    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginBottom: 160,
        
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
        <View style={styles.HeaderView}>
          <Entypo  name="flash" size={24} color="white" />
          <EvilIcons name="close" size={26} color="white" 
            onPress={() => navigation.navigate('HomeScreen')}/>
        </View>
        <SimpleLineIcons style={styles.FrameView} name="frame" color="white" 
                Scan={() => navigation.navigate('Details', {
                     uri: navigation.getParam('uri', 'image'),
                     newName: navigation.getParam('newName', 'username'), 
                     newRole: navigation.getParam('newRole', 'userrole'),
                     newEmail: navigation.getParam('newEmail', 'useremail'),
                     newPhone: navigation.getParam('newPhone', 'userphone'),
                })}/>
        <Text style={styles.TextView}>Place QR Code Within Frame</Text>
        <View style={styles.QRScanView}>
              <Text>Want to add a new connection?</Text>
             {scanned && <TouchableOpacity 
                onPress={() => setScanned(false)}>
                <Text style={styles.ScanText}>
                  Scan QR 
                </Text>
              </TouchableOpacity>}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 90,
    marginEnd: 15,
    marginStart: 15
        
  },
  FrameView: {
    marginTop: 15, 
    alignSelf: 'center',
    fontSize: 230,
    marginBottom: 20
},
  TextView: {
    color: 'white',
    marginTop: 15, 
    alignSelf: 'center',
    marginBottom: 75,
    fontSize: 18
  },
  QRScanView: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
     
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
})


