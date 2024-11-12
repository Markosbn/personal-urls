import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {styles} from "@/components/button/style";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...props}: Props) {
    return (
        <TouchableOpacity {...props} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}