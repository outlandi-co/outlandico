import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const IndexScreen: React.FC = () => {
  const [overlayImage, setOverlayImage] = useState<{ uri: string } | null>(null);

  const handleImageSelect = () => {
    // Code to select an image and set overlayImage
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageOverlay: {
      width: 200,
      height: 200,
    },
  });

  return (
    <View style={styles.container}>
      {overlayImage && (
        <Image source={{ uri: overlayImage.uri }} style={styles.imageOverlay} />
      )}
      <TouchableOpacity onPress={handleImageSelect}>
        {/* Button or UI element to trigger image selection */}
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;
