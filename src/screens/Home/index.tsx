import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

import { Car } from "../../components/Car";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { LoadAnimation } from "../../components/LoadAnimation";

import { 
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from "./styles";

export function Home() {
    const [ cars, setCars ] = useState<CarDTO[]>([])
    const [ loading, setLoading ] = useState(true)
    
    const navigation = useNavigation()

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
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
                    {
                        !loading && 
                        <TotalCars>
                            Total de {cars.length} carros
                        </TotalCars>
                    }
                </HeaderContent>
            </Header>
            
            { loading ? <LoadAnimation /> :
            <CarList 
                data={cars}
                keyExtractor={(item: { id: any; }) => item.id}
                renderItem={({ item }: { item: CarDTO }) => 
                    <Car data={item} onPress={() => handleCarDetails(item)} />
                }
            />
        }
        </Container>
    )
}