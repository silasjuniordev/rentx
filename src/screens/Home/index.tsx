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
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from "styled-components";

import { 
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList,
    MyCarsButton
} from "./styles";




export function Home() {
    const [ cars, setCars ] = useState<CarDTO[]>([])
    const navigation = useNavigation()
    const [ loading, setLoading ] = useState(true)
    const theme = useTheme()



    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars')
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
                        Total de {cars.length} carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            
            { loading ? <Load /> :
            <CarList 
                data={cars}
                keyExtractor={(item: { id: any; }) => item.id}
                renderItem={({ item }: { item: CarDTO }) => 
                    <Car data={item} onPress={() => handleCarDetails(item)} />
                }
            />
        }

        <MyCarsButton onPress={handleOpenMyCars}>
            <Ionicons 
                name="car-sport" 
                size={32}
                color={theme.colors.shape}
                />
        </MyCarsButton>
        </Container>
    )
}