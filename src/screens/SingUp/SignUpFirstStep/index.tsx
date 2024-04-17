import React, { useState } from "react";
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from "react-native";
import { BackButton } from "../../../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import { Bullet } from "../../../components/Bullet";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import * as Yup from 'yup';

import { 
    Container,
    Header,
    Steps,
    Title,
    SubTitle,
    Form,
    FormTitle
} from "./styles";



export function SignUpFirstStep() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ driverLicense, setDriverLicense ] = useState('');

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleNextStep() {
        try {
            const schema = Yup.object().shape({
                driverLicense: Yup.string()
                    .required('CNH obrigatória'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('E-mail inválido'),
                name: Yup.string()
                    .required('Nome obrigatório'),
            })

            const data = { name, email, driverLicense };
            await schema.validate(data);

            navigation.navigate('SignUpSecondStep', { user: data });
        } catch (error) {
            if(error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message);
            }
        }   
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton
                            onPress={handleGoBack}
                        />

                        <Steps>
                            <Bullet active />
                            <Bullet />
                        </Steps>
                    </Header>

                    <Title>
                        Crie sua{'\n'}
                        conta
                    </Title>
                    <SubTitle>
                        Faça seu cadastro de{'\n'}
                        forma rápida e fácil
                    </SubTitle>

                    <Form>
                        <FormTitle>1. Dados</FormTitle>
                        <Input 
                            iconName="user"
                            placeholder="Nome"
                            onChangeText={setName}
                            value={name}
                        />
                        <Input 
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Input 
                            iconName="credit-card"
                            placeholder="CNH"
                            keyboardType="numeric"
                            onChangeText={setDriverLicense}
                            value={driverLicense}
                        />
                    </Form>

                    <Button 
                        title="Próximo"
                        onPress={handleNextStep}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}