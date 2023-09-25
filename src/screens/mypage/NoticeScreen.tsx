import styled from '@emotion/native';
import {format} from 'date-fns';
import React from 'react';
import {Text} from 'react-native';

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const List = styled.ListView``;

const ListItem = styled.View``;

interface NoticeItem {
  id: string;
  title: string;
  created: Date;
}

const sampleData: NoticeItem[] = [
  {
    id: '1',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
];

const NoticeScreen = (props: any) => {
  return (
    <Container>
      {/* <List>
        {sampleData.map((data) => (
          <ListItem key={data.id}>
            <Text>{format(data.created, 'yyyy MM dd')}</Text>
            <Text>{data.title}</Text>
          </ListItem>
        ))}
      </List> */}
    </Container>
  );
};

export default NoticeScreen;
