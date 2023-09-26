import CameraIcon from '@components/icons/CameraIcon';
import CloseIcon from '@components/icons/CloseIcon';
import styled from '@emotion/native';
import {
  ImagePickerAsset,
  MediaTypeOptions,
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
} from 'expo-image-picker';
import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';

export interface InputImageProps {
  imageUrl?: string;
  onChange?: (data?: ImagePickerAsset[]) => void;
  reset?: () => void;
}

const Container = styled.View`
  /* width: 75px; */
  min-width: 75px;
  height: auto;
  aspect-ratio: 1 / 1;
  position: relative;
`;

const SelectedImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Default = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ddd;
  border-width: 0.5px;
  border-style: solid;
  border-color: #ccc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputImage: FC<InputImageProps> = ({
  imageUrl,
  onChange,
  reset,
  ...props
}) => {
  const [status, requestPermission] = useMediaLibraryPermissions();

  const uploadImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
      allowsMultipleSelection: !imageUrl,
    });
    if (result.canceled) return null;

    onChange && onChange(result.assets);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={uploadImage} {...props}>
      <Container>
        {!!imageUrl ? (
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={reset}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: 1,
                top: 0,
                right: 0,
              }}
            >
              <CloseIcon width={20} height={20} />
            </TouchableOpacity>
            <SelectedImage source={{uri: imageUrl}} />
          </View>
        ) : (
          <Default>
            <CameraIcon width={32} height={32} />
          </Default>
        )}
      </Container>
    </TouchableOpacity>
  );
};

export default InputImage;
