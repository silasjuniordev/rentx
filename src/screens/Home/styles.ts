import styled from "styled-components/native";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";
import {Car as ModelCar} from '../../databases/model/Car';
export const Container = styled.View`
    flex: 1;
    background-color: ${(theme).colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    background-color: ${(theme).colors.header};
    justify-content: flex-end;
    padding: 32px 24px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TotalCars = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${(theme).fonts.primary_400};
    color: ${(theme).colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<ModelCar>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showVerticalScrollIndicator: false
})``;