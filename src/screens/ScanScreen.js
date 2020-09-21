import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Entypo, Feather, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }) {
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
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
        marginBottom: 42,
        
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
        <SimpleLineIcons style={styles.FrameView} name="frame" color="white" />
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
        marginTop: 55,
        marginBottom: 90,
        marginLeft: 18,
        marginRight: 18
  },
  FrameView: {
    marginTop: 15, 
    alignSelf: 'center',
    fontSize: 230,
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
        marginTop: 110,
        marginBottom: 20
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
