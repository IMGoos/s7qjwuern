import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import searchIco from '../../assets/searchBarIcons/ic_search.svg';
import {useSearchPostsQuery} from "../../Api/api";
import DropDown from "./DropDown/DropDown";

const SearchBarComponent = styled.div<{isVisible: boolean}>`
  position: relative;
  display: flex;
  width: 100%;
  height: 48px;
  padding: 5px;
  border-top: 1px solid #919EAB;
  border-left: 1px solid #919EAB;
  border-right: 1px solid #919EAB;
  border-bottom: ${props => props.isVisible ? 'none' : '1px solid #919EAB'};
  border-radius: ${props => props.isVisible ? '10px 10px 0 0' : '10px'};
  font-size: 16px;
  line-height: 24px;
`;

const Img = styled.img`
  margin-right: 10px;
  margin-left: 5px;  
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  &:focus {
    border: none;
    outline: none;
  }
`;

const SearchBar: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);
    console.log(isVisible)
    const { data: searchedPosts } = useSearchPostsQuery(searchValue);
    useEffect(() => {
        if(searchedPosts) {
            setIsVisible(true)
        }
        if(searchedPosts?.length === 0) {
            setIsVisible(false);
        }
    }, [searchedPosts]);
    return (
        <SearchBarComponent isVisible={isVisible}>
            <Img src={searchIco} alt="Поиск"/>
            <Input onChange={(e) => setSearchValue(e.target.value)} placeholder="Введите название поста"/>
            {
                searchedPosts && isVisible && (
                    <DropDown searchedPosts={searchedPosts} />

                )
            }
        </SearchBarComponent>
    );
};

export default SearchBar;