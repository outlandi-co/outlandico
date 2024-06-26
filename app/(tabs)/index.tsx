import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
import ImagePicker, { ImagePickerResponse, ImageLibraryOptions } from 'react-native-image-picker';

const HomeScreen: React.FC = () => {
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  const handleImageUpload = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1, // Adjust quality as per your requirements
    };
  
    ImagePicker.launchImageLibrary(options, (response: ImagePickerResponse) => {
      // Handle image picker response
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.uri };
setOverlayImage(source.uri);
      }
    });
  };
  

  return (
    <View style={styles.container}>
      {/* Button to trigger image upload */}
      <TouchableOpacity onPress={handleImageUpload} style={styles.uploadButton}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {/* Base shirt image */}
        <Image
          source={require('../../assets/images/shirt.png')}
          style={styles.image}
        />

        {/* Overlay image conditionally rendered */}
        {overlayImage && (
          <Image
            source={{ uri: overlayImage }}
            style={[styles.overlayImage, styles.image]} // Apply overlayImage style
          />
        )}
      </View>

      <Text>Hi!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 200, // Example width
    height: 200, // Example height
    resizeMode: 'cover', // Adjust the image's resizeMode as per your requirement
  },
  overlayImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200, // Example width
    height: 200, // Example height
    resizeMode: 'cover', // Adjust the image's resizeMode as per your requirement
    opacity: 0.5, // Example opacity, adjust as needed
  },
});

export default HomeScreen;
