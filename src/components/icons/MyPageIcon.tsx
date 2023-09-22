import React, {FC} from 'react';
import {Circle, Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  selected?: boolean;
}

const MyPageIcon: FC<IconProps> = ({selected, ...props}) => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
      <Rect width="64" height="64" fill="#fff" />
      <Circle
        cx="32"
        cy="19"
        r="11"
        stroke="#000"
        strokeWidth="2"
        fill={selected ? '#000' : '#fff'}
      />
      <Path
        d="M32 33C15.059 33 9.32886 44.9374 8.21498 53.0129C7.98859 54.6542 9.34315 56 11 56H53C54.6569 56 56.0114 54.6542 55.785 53.0129C54.6711 44.9374 48.941 33 32 33Z"
        stroke="#000"
        strokeWidth="2"
        fill={selected ? '#000' : '#fff'}
      />
    </Svg>
  );
};

export default MyPageIcon;
