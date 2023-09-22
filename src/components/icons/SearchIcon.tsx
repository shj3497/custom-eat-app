import React, {FC} from 'react';
import {Circle, Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  selected?: boolean;
}

const SearchIcon: FC<IconProps> = ({selected, ...props}) => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
      <Rect width="64" height="64" fill="#fff" />
      <Circle
        cx="28"
        cy="28"
        r="20"
        strokeWidth="2"
        stroke="#000"
        fill={selected ? '#000' : '#fff'}
      />
      <Circle
        cx="28"
        cy="28"
        r="14"
        stroke={selected ? '#fff' : '#000'}
        strokeWidth="2"
        fill={selected ? '#000' : '#fff'}
      />
      <Path
        d="M50.2059 54.4998L41.5 45.7939C40.3954 44.6894 40.3954 42.8985 41.5 41.7939C42.6046 40.6894 44.3955 40.6894 45.5 41.7939L54.2059 50.4998C55.3105 51.6044 55.3105 53.3953 54.2059 54.4998C53.1013 55.6044 51.3105 55.6044 50.2059 54.4998Z"
        strokeWidth="2"
        stroke="#000"
        fill={selected ? '#000' : '#fff'}
      />
    </Svg>
  );
};

export default SearchIcon;
