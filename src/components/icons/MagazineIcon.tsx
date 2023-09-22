import React, {FC} from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  selected?: boolean;
}

const MagazineIcon: FC<IconProps> = ({selected = false, ...props}) => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
      <Rect width="64" height="64" fill="#fff" />
      <Path
        d="M8 8H48C52.4183 8 56 11.5817 56 16V48C56 52.4183 52.4183 56 48 56H8V8Z"
        strokeWidth="2"
        stroke="black"
        fill={selected ? '#000' : '#fff'}
      />
      <Rect
        x="47"
        y="22"
        width="29"
        height="2"
        transform="rotate(-180 47 22)"
        fill={selected ? '#fff' : '#000'}
      />
      <Rect
        x="47"
        y="44"
        width="29"
        height="2"
        transform="rotate(-180 47 44)"
        fill={selected ? '#fff' : '#000'}
      />
      <Rect
        x="47"
        y="33"
        width="29"
        height="2"
        transform="rotate(-180 47 33)"
        fill={selected ? '#fff' : '#000'}
      />
    </Svg>
  );
};

export default MagazineIcon;
