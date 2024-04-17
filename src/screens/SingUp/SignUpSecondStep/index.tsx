import React, { useState } from "react";
import { 
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from "react-native";
import { BackButton } from "../../../components/BackButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Bullet } from "../../../components/Bullet";
import { PasswordInput } from "../../../components/PasswordInput";
import { Button } from "../../../components/Button";
import { useTheme } from "styled-components";
import { api } from "../../../services/api";

import { 
    Container,
    Header,
    Steps,
    Title,
    SubTitle,
    Form,
    FormTitle
} from "./styles";

interface Params {
    user: {
        name: string;
        email: string;
        driverLicense: string;
    }
}


export function SignUpSecondStep() {
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();

    const { user } = route.params as Params;

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleRegister() {
        if(!password || !confirmPassword) {
            return Alert.alert('Informe a senha e a confirmação.');
        }

        if(password !== confirmPassword) {
            return Alert.alert('As senhas não são iguais.');
        }

        
        await api.post('/users', {
            name: user.name,
            email: user.email,
            driver_license: user.driverLicense,
            password
        })
        .then(() => {
            navigation.navigate('Confirmation', {
                nextScreenRoute: 'SignIn',
                title: 'Conta criada',
                message: `Agora é só fazer login\ne aproveitar.`,
            })
        })
        .catch(() => {
            Alert.alert('Opa','Não foi possível cadastrar');
        })
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
                        <FormTitle>2. Senha</FormTitle>
                        <PasswordInput 
                            iconName="lock"
                            placeholder="Senha"
                            onChangeText={setPassword}
                            value={password}
                        />
                        <PasswordInput 
                            iconName="lock"
                            placeholder="Repetir senha"
                            onChangeText={setConfirmPassword}
                            value={confirmPassword}
                        />
                    </Form>

                    <Button 
                        color={theme.colors.success}
                        title="Cadastrar"
                        onPress={handleRegister}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}