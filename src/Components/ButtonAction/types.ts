export interface IButtonAction {
    text: string;
    action?: (arg?: any) => void;
    width: string;
    height: string;
}