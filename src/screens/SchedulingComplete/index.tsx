import React from "react";
import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import { useWindowDimensions, StatusBar } from 'react-native'

import { 
    Container,
    Content,
    Title,
    Message, 
    Footer
} from './styles'
import { ConfirmButton } from "../../components/ConfirmButton";
import { useNavigation } from "@react-navigation/native";

export function SchedulingComplete() {
    const { width } = useWindowDimensions()
    const navigation = useNavigation()

    function handleConfirm() {
        navigation.navigate('Home')
    }

    return (
        <Container>
            <StatusBar 
                barStyle="light-content" 
                backgroundColor="transparent" translucent
            />
            <LogoSvg width={width} />
            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton 
                    title="OK" 
                    onPress={handleConfirm}
                />
            </Footer>
        </Container>
    )
}