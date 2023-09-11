import React, {FC} from 'react';
import styled from "styled-components";
import DropItem from "./DropItem/DropItem";
import {IDropDown} from "./types";
import {IPost} from "../../../Types/Post/types";

const DropDownComponent = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  left: -1px;
  top: 55px;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-radius: 0 0 10px 10px;
`;

const DropDown: FC<IDropDown> = ({searchedPosts}) => {
    return (
        <DropDownComponent>
            {
                searchedPosts && searchedPosts.map((item: IPost, key: number) => (
                    <DropItem item={item} key={key}/>
                ))
            }
        </DropDownComponent>
    );
};

export default DropDown;