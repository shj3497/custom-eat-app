import React, {FC} from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {}

const AppleIcon: FC<IconProps> = ({...props}) => {
  return (
    <Svg width="104" height="104" viewBox="0 0 104 104" {...props}>
      <G clipPath="url(#clip0_708_495)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M71.549 39.7824C68.9049 37.1877 66.6011 34.6794 61.7383 34.4182C57.8136 34.2457 56.0226 36.6679 52.353 36.7541C48.941 36.8404 49.1962 34.0732 42.1147 34.8519C35.9713 35.5418 30.5957 41.7709 31.0234 50.5083C31.4511 59.9381 37.9348 72.9999 43.9908 72.9999C48.2558 72.9137 49.2813 70.8365 52.7783 70.8365C57.1284 70.8365 58.1539 73.4312 61.5658 72.9113C67.4518 72.0464 72.9974 62.6166 72.9974 59.5907C69.7556 57.861 66.5137 54.9189 66.086 49.9884C65.7458 45.0579 68.7301 41.9434 71.5466 39.78L71.549 39.7824Z"
          fill="white"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.1602 35.1107C50.7325 31.6512 53.0363 24.1236 61.1433 23C62.0814 28.7954 57.3887 35.4557 51.1602 35.1107Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_708_495">
          <Rect
            width="42"
            height="50"
            fill="white"
            transform="translate(31 23)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default AppleIcon;
