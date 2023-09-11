import React, {FC} from 'react';
import styled from "styled-components";
import backArrow from '../../assets/postOverviewIcons/backArrow.svg';
import ReactionButton from "../../Components/ReactionButton/ReactionButton";
import {useAppSelector} from "../../hooks/hooks";
import {RootState} from "../../Reducers/RootReducer";

const PostOverviewComponent = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
`;

const PostOverviewHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const BackControl = styled.a`
  .backControlText {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    margin-left: 30px;
  }  
`;

const Image = styled.img`
  
`;

const PostImage = styled.img`
  width: 100%;
  height: 400px;
  background-image: url("https://placehold.co/1500x400");
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const PostDescription = styled.div`
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  margin-top: 30px;
`;

const PostOverview: FC = () => {
    const post = useAppSelector((state: RootState) => state.card.currentCard);
    return (
        <PostOverviewComponent>
            <PostOverviewHeader>
                <BackControl href="/">
                    <Image src={backArrow} alt="Назад" />
                    <span className="backControlText">Вернуться к статьям</span>
                </BackControl>
                {post ? <ReactionButton postId={post.id} /> : null}
            </PostOverviewHeader>
            <Title>{post?.title}</Title>
            <PostImage />
            <PostDescription>{post?.body}</PostDescription>
        </PostOverviewComponent>
    );
};

export default PostOverview;