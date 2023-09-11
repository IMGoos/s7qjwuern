import React, {FC} from 'react';
import styled from "styled-components";
import HeadCardInfo from "./HeadCardInfo/HeadCardInfo";
import {useGetAllPostsQuery} from "../../../Api/api";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentCard} from "../../../store/Slices/SliceCard";

const HeadCardPostComponent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 1px 0 #0000000A, 0 2px 6px 0px #0000000A, 0 10px 20px 0 #0000000A;
  overflow: hidden;
  margin-bottom: 40px;
`;

const HeadCardImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("https://placehold.co/1500x400");
  background-position: center;
  background-repeat: no-repeat;
`;

const HeadCardPost: FC = () => {
    const {data: headCard} = useGetAllPostsQuery();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigateToPost = () => {
        if (headCard && headCard[0]) {
            dispatch(setCurrentCard(headCard[0]));
            navigate(`/post/${headCard[0].id}`);
        }
    };
    return (
        <HeadCardPostComponent>
            <HeadCardImage />
            {headCard && headCard[0] && <HeadCardInfo data={headCard[0]} navigateToPost={navigateToPost} />}
        </HeadCardPostComponent>
    );
};

export default HeadCardPost;