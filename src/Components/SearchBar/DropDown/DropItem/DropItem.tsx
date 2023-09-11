import React, {FC} from 'react';
import styled from "styled-components";
import {IPost} from "../../../../Types/Post/types";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentCard} from "../../../../store/Slices/SliceCard";

const DropItemComponent = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #c7c7c7;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

const DropItemTitle = styled.div`
  font-size: 16px;
  margin-left: 35px;
`;

const DropItem: FC<{item: IPost}> = ({item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigateToPost = () => {
        dispatch(setCurrentCard(item));
        navigate(`/post/${item.id}`);
    };
    return (
        <DropItemComponent onClick={navigateToPost}>
            <DropItemTitle>
                {item.title}
            </DropItemTitle>
        </DropItemComponent>
    );
};

export default DropItem;