import React, {FC} from 'react';
import styled from "styled-components";
import PostOverview from "../Feature/PostOverview/PostOverwiev";

const PostPageComponent = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const PostPage: FC = () => {
    return (
        <PostPageComponent>
            <PostOverview />
        </PostPageComponent>
    );
};

export default PostPage;