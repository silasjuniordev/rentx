import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";


import { 
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from "./styles";
import { Car } from "../../components/Car";

export function Home() {
    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupe',
        rent: {
            period: 'ao dia',
            price: 120
        },
        thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
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
            
            <CarList 
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                keyExtractor={(item: any) => String(item)}
                renderItem={({ item }: any) => <Car data={carData} />}
            />
        </Container>
    )
}