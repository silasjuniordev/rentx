import React from "react";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";

import { 
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
 } from './styles'
import { BackButton } from "../../components/BackButton";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";

export function Scheduling() {
    const theme = useTheme()

    return (
        <Container>
            <Header>
                <StatusBar 
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton 
                    onPress={() => {}} 
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>    
                            28/03/2024
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>
                            30/03/2024
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>

            </Content>

            <Footer>
                <Button title="Confirmar" />
            </Footer>
        </Container>
    )
}