import {ICard} from "../../../Components/Card/types";

export interface IHeadCard extends ICard {
    navigateToPost: () => void;
}