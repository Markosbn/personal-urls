import {TextInput, TextInputProps} from "react-native";
import {styles} from "@/components/input/style";

export function Input({...props}: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            {...props}
        />
    )
}