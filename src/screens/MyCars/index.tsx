import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FlatList, StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";
import { useTheme } from "styled-components";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'
import { Car } from "../../components/Car";
import { Car as ModelCar } from "../../databases/model/Car";
import { LoadAnimation } from "../../components/LoadAnimation";
import { format, parseISO } from 'date-fns'

import { 
    Container,
    Header,
    Title, 
    SubTitle,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate,
} from "./styles";

interface DataProps {
    id: string
    car: ModelCar
    start_date: string
    end_date: string
}

export function MyCars() {
    const [ cars, setCars ] = useState<DataProps[]>([])
    const [ loading, setLoading ] = useState(true)
    const navigation = useNavigation()
    const theme = useTheme()
    const screenIsFocused = useIsFocused()

    function handleBack() {
        navigation.goBack()
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/rentals')

                const dataFormatted = response.data.map((data: DataProps) => {
                    return {
                        id: data.id,
                        car: data.car,
                        startDate: format(parseISO(data.start_date), 'dd/MM/yyyy'),
                        endDate: format(parseISO(data.end_date), 'dd/MM/yyyy')
                    }
                })

                setCars(dataFormatted)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCars()
    }, [screenIsFocused])

    return (
        <Container>
            <Header>
                <StatusBar 
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton 
                    onPress={handleBack} 
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>

                <SubTitle>
                    Conforto, segurança e praticidade.
                </SubTitle>
            </Header>

            { 
            loading ? <LoadAnimation /> : 
            <Content>
                <Appointments>
                    <AppointmentsTitle>Agendamentos realizados</AppointmentsTitle>
                    <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
                </Appointments>

                <FlatList 
                    data={cars}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CarWrapper>
                            <Car data={item.car} />
                            <CarFooter>
                                <CarFooterTitle>Período</CarFooterTitle>
                                <CarFooterPeriod>
                                    <CarFooterDate>{item.start_date}</CarFooterDate>
                                    <AntDesign 
                                        name="arrowright"
                                        size={20}
                                        color={theme.colors.title}
                                        style={{ marginHorizontal: 10 }}
                                    />
                                    <CarFooterDate>{item.end_date}</CarFooterDate>
                                </CarFooterPeriod>
                            </CarFooter>
                        </CarWrapper>
                    )}
                />
            </Content>
            }
        </Container>
    )
}