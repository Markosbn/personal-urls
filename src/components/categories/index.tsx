import {FlatList, View} from "react-native";
import {categories} from "@/utils/categories";
import {Category} from "@/components/category";
import {styles} from "@/components/categories/style";

type Props = {
    onChange(category: string): void;
    selected?: string;
}

export function Categories({selected, onChange}: Props) {
    return (
        <FlatList 
            data={categories} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={
                ({item}) =>
                    <Category
                        name={item.name}
                        isSelected={selected === item.name}
                        icon={item.icon}
                        onPress={() => onChange(item.name)}
                    />
            }
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}

        />
    )
}