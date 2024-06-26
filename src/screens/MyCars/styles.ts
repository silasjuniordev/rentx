import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${( theme ).colors.background_primary};
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
    font-size: ${RFValue(30)}px;
    margin-top: 24px;   
`;

export const SubTitle = styled.Text`
    color: ${( theme ).colors.shape};
    font-family: ${( theme ).fonts.secondary_400};
    font-size: ${RFValue(15)}px;
    margin-top: 24px;   
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 16px;
`;

export const Appointments = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
    color: ${( theme ).colors.text};
    font-family: ${( theme ).fonts.primary_400};
    font-size: ${RFValue(15)}px;    
`;

export const AppointmentsQuantity = styled.Text`
    color: ${( theme ).colors.title};
    font-family: ${( theme ).fonts.primary_500};
    font-size: ${RFValue(15)}px;    
`;

export const CarWrapper = styled.View`
    margin-bottom: 16px;
`;

export const CarFooter = styled.View`
    width: 100%;
    padding: 12px;
    margin-top: -10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${( theme ).colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
    color: ${( theme ).colors.text_detail};
    font-family: ${( theme ).fonts.secondary_500};
    font-size: ${RFValue(10)}px;
`;

export const CarFooterPeriod = styled.View`
    flex-direction: row;
`;

export const CarFooterDate = styled.Text`
    color: ${( theme ).colors.title};
    font-family: ${( theme ).fonts.primary_400};
    font-size: ${RFValue(13)}px;
`;
