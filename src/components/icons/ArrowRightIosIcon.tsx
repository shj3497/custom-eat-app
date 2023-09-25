import React, {FC} from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
}

const ArrowRightIosIcon: FC<SvgProps> = ({color = 'black', ...props}) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width="40" height="40" fill="transparent" />
      <Path d="M15 10L25 20L15 30" stroke={color} strokeWidth="2" />
    </Svg>
  );
};

export default ArrowRightIosIcon;
