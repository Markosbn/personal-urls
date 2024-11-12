import {Alert, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/app/add/style";
import {MaterialIcons} from "@expo/vector-icons";
import {colors} from "@/styles/colors";
import {router} from "expo-router";
import {Categories} from "@/components/categories";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {useState} from "react";
import {categories} from "@/utils/categories";
import {linkStorage} from "@/storage/link-storage";

export default function Add() {
    const [name, setName] = useState(categories[0].name);
    const [url, setUrl] = useState<string>();
    const [category, setCategory] = useState<string>();

    async function handleAddButton() {
        try {
            if (!name || !url || !category) {
                const emptyFields: string[] = [];
                if (!name?.trim()) emptyFields.push("name");
                if (!url?.trim()) emptyFields.push("URL");
                if (!category) emptyFields.push("category");
                return Alert.alert('Error!', `Please fill the fields: ${emptyFields.join(', ')}`);
            }
            await linkStorage.saveLinks([{
                id: new Date().getTime().toString(),
                name,
                url,
                category
            }]);
            Alert.alert('Success', 'Link added successfully', [
                {
                    text: 'Ok',
                    onPress: () => router.back()
                }
            ]);
        } catch (error) {
            return Alert.alert('Error', 'An error occurred while adding the link');
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name='arrow-back' size={32} color={colors.gray[200]}/>
                </TouchableOpacity>
                <Text style={styles.title}>New</Text>
            </View>
            <Text style={styles.label}>Select a category:</Text>
            <Categories selected={category} onChange={setCategory}/>

            <View style={styles.form}>
                <Input placeholder="Name" onChangeText={setName} autoCorrect={false}/>
                <Input autoCapitalize='none' placeholder="URL" onChangeText={setUrl} autoCorrect={false}/>
                <Button title="Add" onPress={handleAddButton}/>
            </View>
        </View>
    )
}