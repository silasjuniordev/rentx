import styled, { css } from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

interface DateValueProps {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${( theme ).colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;
    background-color: ${( theme ).colors.header};
    justify-content: center;
    padding: 25px;
    padding-top: ${RFValue(75)}px;
`;

export const Title = styled.Text`
    color: ${( theme ).colors.shape};
    font-family: ${( theme ).fonts.secondary_600};
    font-size: ${RFValue(34)}px;
    margin-top: 24px;
`;

export const RentalPeriod = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
`;

export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    color: ${( theme ).colors.text};
    font-family: ${( theme ).fonts.secondary_500};
    font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
    color: ${( theme ).colors.text};
    font-family: ${( theme ).fonts.primary_500};
    font-size: ${RFValue(14)}px;

    ${({ selected , theme }: any) => !selected && css`
        border-bottom-width: 1px;
        border-bottom-color: ${theme.colors.text};
        padding-bottom: 5px;
    `}
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 24
    },
    showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
    padding: 24px;
`;