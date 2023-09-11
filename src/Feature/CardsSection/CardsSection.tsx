import React, {FC} from 'react';
import styled from "styled-components";
import HeadCardPost from "./HeadCardPost/HeadCardPost";
import SubCardsPosts from "./SubCardsPosts/SubCardsPosts";

const CardsSectionComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
`;

const CardsSection: FC = () => {
    return (
        <CardsSectionComponent>
            <HeadCardPost />
            <SubCardsPosts />
        </CardsSectionComponent>
    );
};

export default CardsSection;