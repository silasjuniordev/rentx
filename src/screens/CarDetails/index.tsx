import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../ImageSlider";

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
    About
} from "./styles";


export function CarDetails() {
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

                    <About>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado
                        na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                    </About>
                </Content>

            </Container>
    )
}