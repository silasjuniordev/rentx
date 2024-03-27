import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";


import { 
    Container,
    Header,
    HeaderContent,
    TotalCars
} from "./styles";
import { Car } from "../../components/Car";

export function Home() {
    const carDataOne = {
        brand: 'Audi',
        name: 'RS 5 Coupe',
        rent: {
            period: 'ao dia',
            price: 120
        },
        thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    }

    const carDataTwo = {
        brand: 'Porsche',
        name: 'Panamera',
        rent: {
            period: 'ao dia',
            price: 340,
        },
        thumbnail: 'https://imgd-ct.aeplcdn.com/664x415/n/33vfbcb_1703039.jpg?q=80'
    }

    return (
        <Container>
            <StatusBar 
                barStyle="light-content" 
                backgroundColor="transparent"
                translucent
                />
            <Header>
                <HeaderContent>
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            <Car data={carDataOne} />
            <Car data={carDataTwo} />
        </Container>
    )
}