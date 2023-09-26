interface AskNoticeData {
  subTitle: string;
  notices: {
    color?: string;
    notice: string;
  }[];
}
const askNoticeData: AskNoticeData[] = [
  {
    subTitle: '반품 / 환불',
    notices: [
      {
        notice:
          '제품하자 혹은 이상으로 반품(환불)이 필요한 경우 사진과 함께 구체적인 내용을 남겨주세요.',
      },
    ],
  },
  {
    subTitle: '주문 취소',
    notices: [
      {notice: '[배송준비중] 이전까지 주문취소 가능합니다.'},
      {
        notice:
          '마이페이지 -> 주문내역 상세페이지]에서 직접 취소하실 수 있습니다.',
      },
      {
        notice:
          '생산이 시작된 [상품준비중] 이후에는 취소가 제한되는점 고객님의 양해 부탁드립니다.',
      },
      {
        notice:
          '[배송준비중] 이후에는 취소가 불가하니, 반품으로 진행해주세요(상품에 따라 반품이 불가 할 수 있습니다.)',
      },
      {
        notice:
          '주문마감 시간에 임박할수록 취소 가능 시간이 짧아질 수 있습니다.',
      },
      {notice: '일부 예약 상품은 3~4일 전에만 취소 가능합니다.'},
      {
        notice: '예약 주문 상품은 주문시 취소가 불가능합니다.',
        color: '#D93737',
      },
    ],
  },
];
export default askNoticeData;
