import React, { useState } from "react";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { 
    Container,
    IconContainer,
    InputText, 
} from "./styles";

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>["name"];
    value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();
    
    
    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value);
    }

    return (
        <Container>
            <IconContainer isFocused={isFocused}>
                <Feather 
                    name={iconName}
                    size={24}
                    color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
                />
            </IconContainer>

            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry={isPasswordVisible}
                autoCorrect={false} 
                isFocused={isFocused}
                {...rest} 
            />

            <BorderlessButton onPress={handlePasswordVisibilityChange}>
                <IconContainer>
                    <Feather 
                        name={isPasswordVisible ? "eye" : "eye-off"}
                        size={24}
                        color={theme.colors.text_detail}
                    />
                </IconContainer>
            </BorderlessButton>
        </Container>
    )
}