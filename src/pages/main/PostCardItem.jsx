import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button';
import { theme } from 'src/globalLayout/GlobalStyle';
import useJwtToken from 'src/hooks/useJwt';

import * as S from './MainCardItem.style';
// import { useState } from 'react';

const PostCardItem = (props) => {
  const { jwtToken } = useJwtToken();
  const navigate = useNavigate();

  // 이 부분 일단 10으로 해놨습니다 ! 이거만 변경해주시면 저한테 알아서 넘어와요 !
  // const [postListData, setPostListData] = useState(postData);

  const item = props.data;

  const handleScrollInnerModal = () => {
    document.body.style.overflowY = 'auto';
  };

  const createChatHandler = async () => {
    await axios.post(
      'https://codevelop.store/api/v1/createchat',
      {
        anotherUserId: item.mentorId,
      },
      {
        headers: {
          Authorization: jwtToken,
        },
      },
    );
    navigate('/chatroom');
  };

  return (
    <>
      <S.MainCardItem key={item.postId}>
        <h4>{item.postInfo.title}</h4>
        <S.StackBox>
          <div className="stack">
            <p className="title">직무</p>
            <p className="desc limit">{item.stackCategory}</p>
          </div>
          <div className="stack">
            <p className="title">스택</p>
            <p className="desc limit">#{item.postStack}</p>
          </div>
          <div className="stack bold">
            <p className="title">가격</p>
            {/* 10/6에 갑자기 Cannot read properties of undefined (reading 'toLocaleString') 발생해서 해당 메서드 지움 */}
            {/* <p className="desc">{item.price.toLocaleString()}P</p> */}
            <p className="desc">{item.postInfo.price}P</p>
          </div>
        </S.StackBox>
        <S.NickNameBox>
          <div className="stack">
            <p className="title">{item.NICKNAME}</p>
            <p className="desc bold">{item.postInfo.level}</p>
          </div>
        </S.NickNameBox>
        <hr />
        <S.MainCardButtonBox>
          <Button
            text={'문의하기'}
            bgcolor={theme.color.point}
            fontcolor={theme.color.bgc1}
            onClick={createChatHandler}
          />

          {/* <Link to=`/detail/${postId}`> */}
          <Link to={`/detail/${item.postId}`}>
            <Button
              onClick={handleScrollInnerModal}
              text={'상세보기'}
              bgcolor={theme.color.point}
              fontcolor={theme.color.bgc1}
            />
          </Link>
        </S.MainCardButtonBox>
      </S.MainCardItem>
    </>
  );
};

export default PostCardItem;
