import styled from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface ButtonProps extends RectButton {
    color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }: any) => color};
`;

export const Title = styled.Text`
    font-family: ${( theme ).fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${( theme ).colors.shape};
`;