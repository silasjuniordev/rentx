import React, { useState, useEffect } from "react";
import { 
    StatusBar,
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";
import * as Yup from 'yup';
import { Button } from "../../components/Button";
import { PasswordInput } from "../../components/PasswordInput";
import { Input } from "../../components/Input";
import theme from "../../styles/theme";
import { useAuth } from "../../hooks/auth";

import { useNavigation } from "@react-navigation/native";
import { database } from "../../databases";

import { 
    Container,
    Header,
    Title,
    Form,
    SubTitle,
    Footer, 
} from "./styles";

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const { signIn } = useAuth();

    async function handleSignIn() {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string()
                    .required('A senha é obrigatória'),
            })
    
            await schema.validate({ email, password })
            Alert.alert('Login realizado com sucesso')

            signIn({ email, password })
        } catch (error) {
            if(error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message)
            } else {
                Alert.alert('Não foi possível realizar o login')
            }
        }
    }

    function handleNewAccount() {
        navigation.navigate('SignUpFirstStep')
    }

    useEffect(() => {
        async function loadData() {
            const userCollection = database.get('users')
            const users = await userCollection.query().fetch()
            console.log(users)
        }

        loadData()
    },[])

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar 
                        barStyle={"dark-content"} 
                        backgroundColor="transparent"
                        translucent
                    />
                    <Header>
                        <Title>
                            Estamos{'\n'}
                            quase lá.
                        </Title>
                        <SubTitle>
                            Faça seu login para comecar{'\n'}
                            uma experiência incrível.
                        </SubTitle>
                    </Header>

                    <Form>
                        <Input 
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            value={email}
                        />

                        <PasswordInput 
                            iconName="lock"
                            placeholder="Senha"
                            onChangeText={setPassword}
                            value={password}
                        />
                    </Form>

                    <Footer>
                        <Button 
                            title="Login"
                            onPress={handleSignIn}
                            enabled={true}
                            loading={false}
                        />

                        <Button 
                            title="Criar conta gratuita"
                            color={theme.colors.background_secondary}
                            light
                            onPress={handleNewAccount}
                            enabled={true}
                            loading={false}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}