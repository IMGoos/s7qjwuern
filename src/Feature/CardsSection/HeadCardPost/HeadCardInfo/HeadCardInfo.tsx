import React, {FC} from 'react';
import styled from "styled-components";
import ButtonAction from "../../../../Components/ButtonAction/ButtonAction";
import ReactionButton from "../../../../Components/ReactionButton/ReactionButton";
import {IHeadCard} from "../types";

const HeadCardInfoComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  .buttonContainer {
    display: flex;
    justify-content: flex-end;
  }
`;

const CardInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardInfoHeaderTitle = styled.div`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const HeadCardDescription = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const HeadCardInfo: FC<IHeadCard> = ({data, navigateToPost}) => {
    return (
        <HeadCardInfoComponent>
            <CardInfoHeader>
                <CardInfoHeaderTitle>{data.title}</CardInfoHeaderTitle>
                <ReactionButton postId={data.id} />
            </CardInfoHeader>
            <HeadCardDescription>
                {data.body}
            </HeadCardDescription>
            <div className="buttonContainer">
                <ButtonAction text="Читать далее" width="150px" height="45px" action={navigateToPost}/>
            </div>
        </HeadCardInfoComponent>
    );
};

export default HeadCardInfo;