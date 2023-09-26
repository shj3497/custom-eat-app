import _InputImage from '@components/_atoms/InputImage';
import styled from '@emotion/native';
import {ImagePickerAsset} from 'expo-image-picker';
import React, {FC, useState} from 'react';

interface InputImagesProps {
  onChange?: (images: string[]) => void;
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  flex-basis: auto;
  flex-grow: 1;
  flex-wrap: wrap;

  column-gap: 10px;
  row-gap: 10px;
`;

const InputImage = styled(_InputImage)`
  width: 22.8%;
`;

const InputImages: FC<InputImagesProps> = ({onChange}) => {
  const [images, setImages] = useState<ImagePickerAsset[]>([]);

  const onImgChange = (imageIndex: number, data?: ImagePickerAsset[]) => {
    if (!data) return;
    setImages((images) => {
      const newImages = images.map((image, index) => {
        if (index === imageIndex) {
          return data[0];
        }
        return image;
      });
      onChange && onChange(newImages.map((image) => image.uri));
      return newImages;
    });
  };

  const onAdd = (data?: ImagePickerAsset[]) => {
    if (!data) return;
    setImages((images) => {
      const newImages = [...images, ...data];
      onChange && onChange(newImages.map((image) => image.uri));
      return newImages;
    });
  };

  const resetImage = (imageIndex: number) => {
    setImages((images) => images?.filter((_, index) => index !== imageIndex));
  };
  return (
    <Container>
      {images?.map((image, index) => (
        <InputImage
          key={index}
          imageUrl={image.uri}
          onChange={(data) => onImgChange(index, data)}
          reset={() => {
            resetImage(index);
          }}
        />
      ))}
      <InputImage onChange={onAdd} />
    </Container>
  );
};

export default InputImages;
