import React, {FC} from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {}

const KakaoIcon: FC<IconProps> = ({...props}) => {
  return (
    <Svg width="104" height="104" viewBox="0 0 104 104" fill="none" {...props}>
      <G clip-path="url(#clip0_708_449)">
        <Path
          d="M52.5 28C38.4152 28 27 37.19 27 48.5258C27 55.8097 31.728 62.2043 38.8331 65.8569L36.4299 74.999C36.3359 75.2812 36.4143 75.574 36.6128 75.7764C36.7486 75.9148 36.9315 75.9947 37.1352 75.9947C37.2867 75.9947 37.4435 75.9308 37.5793 75.8243L47.913 68.7108C49.4124 68.9291 50.9431 69.0516 52.5052 69.0516C66.5848 69.0516 78.0052 59.8616 78.0052 48.5258C78.0052 37.19 66.5796 28 52.5 28Z"
          fill="#3C1E1E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_708_449">
          <Rect
            width="51"
            height="48"
            fill="white"
            transform="translate(27 28)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default KakaoIcon;
