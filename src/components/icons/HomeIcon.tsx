import react, {FC} from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

interface HomeIconProps extends SvgProps {
  selected?: boolean;
}

const HomeIcon: FC<HomeIconProps> = ({selected, ...props}) => {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
      <Rect width="64" height="64" fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 55.9999V21.3333L27.5624 10.9583C30.2496 9.16688 33.7504 9.16688 36.4376 10.9583L52 21.3333V55.9999H37V37.9999H27V55.9999H12Z"
        fill={selected ? '#000' : '#fff'}
        strokeWidth="2"
        stroke="#000"
      />
      <Path
        d="M6 26.5L27.5753 11.9782C30.2546 10.1748 33.7556 10.1594 36.4508 11.9392L58.5 26.5"
        stroke="black"
        fill={selected ? '#000' : '#fff'}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default HomeIcon;
