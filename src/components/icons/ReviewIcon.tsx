import React, {FC} from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  selected?: boolean;
}

const ReviewIcon: FC<IconProps> = ({selected, ...props}) => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
      <Rect width="64" height="64" fill="#fff" />
      <Path
        d="M55 48C55 51.866 51.866 55 48 55L9 55L9 9L48 9C51.866 9 55 12.134 55 16L55 48Z"
        stroke={selected ? '#fff' : '#000'}
        strokeWidth="2"
        fill={selected ? '#000' : '#fff'}
      />
      <Path
        d="M42.3521 16.9317C44.8084 16.6067 46.9198 18.7181 46.5947 21.1744L22.1613 45.6078L16.8137 46.7128L17.9187 41.3652L42.3521 16.9317Z"
        stroke={selected ? '#fff' : '#000'}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default ReviewIcon;
