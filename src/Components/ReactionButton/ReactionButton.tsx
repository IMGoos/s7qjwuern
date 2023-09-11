import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import likeIco from '../../assets/buttonReactionIcons/like.svg';
import isLikedIco from '../../assets/buttonReactionIcons/isLiked.svg';
import dislikeIco from '../../assets/buttonReactionIcons/dislike.svg';
import isDislikedIco from '../../assets/buttonReactionIcons/isDisliked.svg'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import { initializeReaction, toggleDislike, toggleLike } from "../../store/Slices/SliceReaction";

const ReactionButtonComponent = styled.div`
  display: flex;
`;

const Reaction = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  &:last-child {
    margin-left: 0;
  }
`;

const Image = styled.img`
  cursor: pointer;
`;

const Counter = styled.div`
  font-size: 16px;
  line-height: 16px;
  margin-left: 10px;
  font-weight: 400;
`;


interface ReactionButtonProps {
    postId: number;
}

const ReactionButton: FC<ReactionButtonProps> = ({ postId }) => {
    const dispatch = useDispatch();
    const reaction = useSelector((state: RootState) => state.reactions[postId] || {
        likes: 0, dislikes: 0, status: 'none',
    });

    useEffect(() => {
        dispatch(initializeReaction(postId));
    }, [dispatch, postId]);

    const likeImage = reaction.status === 'liked' ? isLikedIco : likeIco;
    const dislikeImage = reaction.status === 'disliked' ? isDislikedIco : dislikeIco;

    return (
        <ReactionButtonComponent>
            <Reaction onClick={() => dispatch(toggleLike(postId))}>
                <Image src={likeImage} alt="Нравится" />
                <Counter>{reaction.likes}</Counter>
            </Reaction>
            <Reaction onClick={() => dispatch(toggleDislike(postId))}>
                <Image src={dislikeImage} alt="Не нравится" />
                <Counter>{reaction.dislikes}</Counter>
            </Reaction>
        </ReactionButtonComponent>
    );
};

export default ReactionButton;