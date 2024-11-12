import {Text, Pressable, PressableProps} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {colors} from "@/styles/colors";
import {styles} from "@/components/category/style";

type CategoryProps = PressableProps & {
    name: string;
    isSelected: boolean;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function Category({name, icon, ...rest}: CategoryProps) {
    const color = rest.isSelected ? colors.green[300] : colors.gray[400];
    return (
        <Pressable style={styles.container} {...rest}>
            <MaterialIcons name={icon} size={16} color={colors.gray[400]}></MaterialIcons>
            <Text style={[styles.name, {color}]}>{name}</Text>
        </Pressable>
    )
}