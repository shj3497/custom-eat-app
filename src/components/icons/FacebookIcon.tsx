import React, {FC} from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
}

const FacebookIcon: FC<IconProps> = ({color = '#fff', ...props}) => {
  return (
    <Svg width="104" height="104" viewBox="0 0 104 104" {...props}>
      <Path
        d="M64.5401 56.1836L66.0254 46.5H56.7344V40.2161C56.7344 37.5669 58.0325 34.9844 62.1938 34.9844H66.418V26.7402C66.418 26.7402 62.5844 26.0859 58.9191 26.0859C51.2671 26.0859 46.2656 30.7236 46.2656 39.1195V46.5H37.7598V56.1836H46.2656V79.593C47.9714 79.8606 49.719 80 51.5 80C53.281 80 55.0286 79.8606 56.7344 79.593V56.1836H64.5401Z"
        fill={color}
      />
    </Svg>
  );
};

export default FacebookIcon;
