import React, {FC} from 'react';
import styled from "styled-components";
import {ICard} from "./types";
import ButtonAction from "../ButtonAction/ButtonAction";
import ReactionButton from "../ReactionButton/ReactionButton";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentCard} from "../../store/Slices/SliceCard";

const CardComponent = styled.div`
  box-shadow: 0 0 1px 0 #0000000A, 0 2px 6px 0px #0000000A, 0 10px 20px 0 #0000000A;
  border-radius: 30px;
`;

const CardImage = styled.div`
  width: 100%;
  height: 273px;
  border-radius: 30px 30px 0 0;
  background-image: url("https://placehold.co/600x400");
  background-position: center;
`;

const CardInfo = styled.div`
  display: flex;
  min-height: 180px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const CardTitle = styled.div`
  width: 80%;
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ControlCard = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Card: FC<ICard> = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigateToPost = () => {
        dispatch(setCurrentCard(data));
        navigate(`/post/${data.id}`);
    };

    return (
        <CardComponent>
            <CardImage />
            <CardInfo>
                <CardTitle>{data.title}</CardTitle>
                <ControlCard>
                    <ReactionButton postId={data.id} />
                    <ButtonAction text="Читать далее" width="150px" height="45px" action={navigateToPost}/>
                </ControlCard>
            </CardInfo>
        </CardComponent>
    );
};

export default Card;