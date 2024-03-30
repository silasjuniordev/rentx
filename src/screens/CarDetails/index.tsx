import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

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
    About,
    Acessories,
    Footer
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CarDetails() {
    const navigation = useNavigation()

    function handleConfirmRental() {
        navigation.navigate('Scheduling')
    }

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

                    <About>
                        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado
                        na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                    </About>
                </Content>

                <Footer>
                    <Button title="Escolher período do aluguel" onPress={handleConfirmRental}/>
                </Footer>

            </Container>
    )
}