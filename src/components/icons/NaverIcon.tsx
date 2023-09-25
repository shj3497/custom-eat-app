import React, {FC} from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
}

const NaverIcon: FC<IconProps> = ({color, ...props}) => {
  return (
    <Svg width="104" height="104" viewBox="0 0 104 104" fill="none" {...props}>
      <Path
        d="M59.098 53.4042L44.33 32.2402H32.084V71.7602H44.902V50.5962L59.67 71.7602H71.916V32.2402H59.098V53.4042Z"
        fill="white"
      />
    </Svg>
  );
};

export default NaverIcon;
