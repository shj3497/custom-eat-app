import React, {FC} from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
}

const CloseIcon: FC<IconProps> = ({color = '#fff', ...props}) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <Path d="M11 10L31 30" stroke={color} strokeWidth="2" />
      <Path d="M31 10L11 30" stroke={color} strokeWidth="2" />
    </Svg>
  );
};

export default CloseIcon;
