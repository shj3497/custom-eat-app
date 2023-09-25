import {MyPageStackNavigation} from '@components/_organisms/mypage/MyPageNavigation';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const styles = StyleSheet.create({
  list: {
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },
  listItem: {
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 0.5,
    borderColor: '#bbb',
    borderStyle: 'solid',
  },
  created: {
    color: '#999',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 10,
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});

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
  {
    id: '2',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '3',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '4',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '5',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '6',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '7',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '8',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '9',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '10',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
  {
    id: '11',
    title: '[공지] 커스텀잇 서버 점검안내',
    created: new Date(2022, 11, 1, 1, 0, 0, 0),
  },
];

const NoticeScreen = (props: any) => {
  const navigation = useNavigation<MyPageStackNavigation>();

  return (
    <Container>
      <FlatList
        data={sampleData}
        renderItem={(data) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('noticeDetail', {
                id: data.item.id,
              });
            }}
          >
            <ListItem data={data.item} />
          </TouchableOpacity>
        )}
        keyExtractor={(data) => data.id}
        style={styles.list}
      />
    </Container>
  );
};

interface ListItemProps {
  data: NoticeItem;
}

const ListItem: FC<ListItemProps> = ({data}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.created}>{format(data.created, 'yyyy. MM. dd')}</Text>
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

export default NoticeScreen;
