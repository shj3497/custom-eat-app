import ArrowRightIosIcon from '@components/icons/ArrowRightIosIcon';
import {css} from '@emotion/native';
import React, {FC} from 'react';
import {Button, ButtonProps} from 'react-native-paper';

interface ListItemButtonProps extends ButtonProps {}

const LabelStyle = css`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  padding: 15px 0;
  border-radius: 0;
  margin: 0;
`;

const ContentStyle = css`
  justify-content: space-between;
  flex-direction: row-reverse;
`;

const ButtonStyle = css`
  border-radius: 0;
  border-bottom-width: 0.5px;
  border-style: solid;
  border-color: #bbb;
  background: #fff;
  padding: 0;
`;

const ListItemButton: FC<ListItemButtonProps> = ({...props}) => {
  return (
    <Button
      labelStyle={LabelStyle}
      contentStyle={ContentStyle}
      style={ButtonStyle}
      icon={() => <ArrowRightIosIcon width={20} height={20} />}
      {...props}
    />
  );
};

export default ListItemButton;
