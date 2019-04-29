import React from 'react';
import { ImagePicker, Permissions } from 'expo';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import MenuButton from '../components/MenuButton';

export default class FileSelector extends React.Component {
  state = {
    image: null,
  };

  async componentDidMount() {
    try {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      console.log('add file')
    }

    catch (e) {
      console.log(e);
    }
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);

  }
  async componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    console.log('remove file')
  }
  handleBackPress = () => {
    this.props.navigation.navigate('Home');

    return true;
  }
  render() {


    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>


            <TouchableOpacity
              onPress={this._pickImage}>

              <Image
                source={
                  require('../assets/images/folder.png')
                }
                style={styles.welcomeImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.welcomeContainer}>
            <TouchableOpacity
              onPress={this._takePhoto}>

              <Image
                source={
                  require('../assets/images/camera.png')
                }
                style={styles.welcomeImage}
              /> 
            </TouchableOpacity>
           
          </View>




        </View>


      </View>
    );
  }





  _takePhoto = async () => {
    let image_obj = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      base64: true,
    });
    if (!image_obj.cancelled) {
      this.props.navigation.navigate('RecogResult',{'image':image_obj})
    }
    else{
      this.props.navigation.navigate('File')
      console.log('back from cam');
    }
  };

  _pickImage = async () => {
    image_obj = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!image_obj.cancelled) {
      this.props.navigation.navigate('RecogResult',{'image':image_obj})
    }
    else{
      this.props.navigation.navigate('File')
      console.log('back from image picker');
    }

  };

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
    paddingTop: 250
  },

  button: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#00ffff',
    borderWidth: 1.5,
    borderRadius: 20,
    color: '#00ffff',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
});
