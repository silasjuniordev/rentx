import styled from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps {
    color: string;
}

interface ButtonTextProps {
    light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }: any) => color};
    margin-bottom: 8px;
`;

export const Title = styled.Text<ButtonTextProps>`
    font-family: ${( theme ).fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${({ theme, light }: any) => light ? theme.colors.header : theme.colors.shape};
`;