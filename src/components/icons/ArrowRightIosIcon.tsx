import React, {FC} from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

const ArrowRightIosIcon: FC<SvgProps> = ({...props}) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <Rect width="40" height="40" fill="white" />
      <Path d="M15 10L25 20L15 30" stroke="black" strokeWidth="2" />
    </Svg>
  );
};

export default ArrowRightIosIcon;
