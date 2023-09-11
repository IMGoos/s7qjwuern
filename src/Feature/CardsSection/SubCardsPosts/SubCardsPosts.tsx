import React, {FC} from 'react';
import styled from "styled-components";
import {useGetAllPostsQuery} from "../../../Api/api";
import Card from "../../../Components/Card/Card";
import {IPost} from "../../../Types/Post/types";

const SubCardsPostsComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 20px;
`;

const SubCardsPosts: FC = () => {
    const {data: posts} = useGetAllPostsQuery();
    console.log(posts);
    return (
        <SubCardsPostsComponent>
            {
                posts && posts.map((post: IPost, key: number) => (
                    <Card data={post} key={key} />
                ))
            }
        </SubCardsPostsComponent>
    );
};

export default SubCardsPosts;