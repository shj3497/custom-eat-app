import React, {FC} from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {}

const GoogleIcon: FC<IconProps> = ({...props}) => {
  return (
    <Svg width="104" height="104" viewBox="0 0 104 104" {...props}>
      <G clip-path="url(#clip0_708_983)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77.0001 52.5903C77.0001 50.7459 76.8366 48.975 76.5362 47.2727H52.5107V57.3298H66.2406C65.6494 60.5801 63.8518 63.3332 61.1505 65.1776V71.7002H69.3961C74.2195 67.1738 77.0025 60.5091 77.0025 52.5903H77.0001Z"
          fill="#3E82F1"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.5108 78.0001C59.3986 78.0001 65.1736 75.6707 69.3937 71.7003L61.1481 65.1776C58.8626 66.7379 55.9427 67.6588 52.5084 67.6588C45.8633 67.6588 40.2397 63.0859 38.233 56.9404H29.7134V63.6762C33.9119 72.173 42.5372 78.0001 52.5108 78.0001Z"
          fill="#32A753"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.2353 56.9405C37.7258 55.3802 37.435 53.7147 37.435 52.0001C37.435 50.2855 37.7258 48.62 38.2353 47.0597V40.324H29.7133C27.9853 43.8339 27 47.8043 27 52.0001C27 56.1959 27.9853 60.1663 29.7133 63.6762L38.2353 56.9405Z"
          fill="#F9BB00"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.5108 36.3412C56.2551 36.3412 59.6197 37.6541 62.2632 40.2284L69.5812 32.77C65.1616 28.5767 59.3865 26 52.5108 26C42.5372 26 33.9119 31.827 29.7134 40.3239L38.2354 47.0596C40.2421 40.9142 45.8657 36.3412 52.5108 36.3412Z"
          fill="#E74133"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_708_983">
          <Rect
            width="50"
            height="52"
            fill="white"
            transform="translate(27 26)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default GoogleIcon;
