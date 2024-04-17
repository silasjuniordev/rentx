import styled, { css } from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

interface Props {
    isFocused: boolean;
}

export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
    height: 56px;
    width: 55px;
    justify-content: center;
    align-items: center;
    background-color: ${( theme ).colors.background_secondary};
    margin-right: 2px;

    ${({ isFocused, theme}: any) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main};
    `};
`;

export const InputText = styled(TextInput)<Props>`
    flex: 1;
    background-color: ${( theme ).colors.background_secondary};
    color: ${( theme ).colors.text};
    font-family: ${( theme ).fonts.primary_400};
    font-size: ${RFValue(15)}px;
    padding: 0 23px;

    ${({ isFocused, theme}: any) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main};
    `};
`;