import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { Feather } from '@expo/vector-icons'
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Acessories,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
    Footer
} from "./styles";



export function SchedulingDetails() {
    const theme = useTheme()

    return (
            <Container>
                <Header>
                    <BackButton onPress={() => {}}/>
                </Header>

                <CarImages>
                    <ImageSlider 
                        imagesUrl={['https://pensecarros.com.br/cms/uploads/lamborghini-huracan-5-2-v10-gasolina-lp-640-evo-ldf-61849351bfc32.png']} 
                    />
                </CarImages>

                <Content>
                    <Details>
                        <Description>
                            <Brand>Lamborghini</Brand>
                            <Name>Huracan</Name>
                        </Description>

                        <Rent>
                            <Period>AO DIA</Period>
                            <Price>R$ 580</Price>
                        </Rent>
                    </Details>

                    <Acessories>
                        <Accessory name="380Km/h" icon={speedSvg} />
                        <Accessory name="3.2s" icon={accelerationSvg} />
                        <Accessory name="800 HP " icon={forceSvg} />
                        <Accessory name="Gasolina" icon={gasolineSvg} />
                        <Accessory name="Auto" icon={exchangeSvg} />
                        <Accessory name="2 pessoas" icon={peopleSvg} />
                    </Acessories>

                    <RentalPeriod>
                        <CalendarIcon>
                            <Feather
                                name="calendar"
                                size={RFValue(24)}
                                color={theme.colors.shape}
                            />
                        </CalendarIcon>

                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>28/03/2024</DateValue>
                        </DateInfo>

                        <Feather
                                name="chevron-right"
                                size={RFValue(24)}
                                color={theme.colors.text}
                        />

                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>28/03/2024</DateValue>
                        </DateInfo>
                    </RentalPeriod>

                    <RentalPrice>
                        <RentalPriceLabel>TOTAL</RentalPriceLabel>
                        <RentalPriceDetails>
                            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                        </RentalPriceDetails>
                    </RentalPrice>
                </Content>

                <Footer>
                    <Button title="Confirmar" />
                </Footer>

            </Container>
    )
}