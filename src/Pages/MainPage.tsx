import React, {FC} from 'react';
import styled from "styled-components";
import {subtitlePage, titlePage} from "../Mocks/MocksItem";
import SearchBar from "../Components/SearchBar/SearchBar";
import CardsSection from "../Feature/CardsSection/CardsSection";
import {useGetAllPostsQuery} from "../Api/api";

const MainPageComponent = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 10px;
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 68px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  margin-bottom: 24px;
`;

const MainPage: FC = () => {
    const {isLoading} = useGetAllPostsQuery();
    return (
        <MainPageComponent>
            {
                !isLoading ? (
                    <>
                        <Title>{titlePage}</Title>
                        <Subtitle>{subtitlePage}</Subtitle>
                        <SearchBar />
                        <CardsSection />
                    </>
                ) : (
                    <div className="loader">Loading....</div>
                )
            }

        </MainPageComponent>
    );
};

export default MainPage;