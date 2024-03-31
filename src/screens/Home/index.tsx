import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { Load } from "../../components/Load";

import { 
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from "./styles";


export function Home() {
    const [ cars, setCars ] = useState<CarDTO[]>([])
    const navigation = useNavigation()
    const [ loading, setLoading ] = useState(true)

    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupe',
        rent: {
            period: 'ao dia',
            price: 120
        },
        thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    }

    function handleCarDetails() {
        navigation.navigate('CarDetails')
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars')
                setCars(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCars()
    }, [])

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
            
            { loading ? <Load /> :
            <CarList 
                data={cars}
                keyExtractor={(item: { id: any; }) => item.id}
                renderItem={({ item }: { item: CarDTO }) => 
                    <Car data={item} onPress={handleCarDetails} />
                }
            />
        }
        </Container>
    )
}