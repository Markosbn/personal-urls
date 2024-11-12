import {Alert, FlatList, Image, Linking, Modal, Text, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons"

import {styles} from "@/app/index/style";
import {colors} from "@/styles/colors";
import {Categories} from "@/components/categories";
import {Link} from "@/components/link";
import {Option} from "@/components/option";
import {router, useFocusEffect} from "expo-router";
import {useCallback, useEffect, useState} from "react";
import {LinkStorage, linkStorage} from "@/storage/link-storage";

export default function Index() {
    const [category, setCategory] = useState<string>();
    const [links, setLinks] = useState<LinkStorage[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [linkSelected, setLinkSelected] = useState<LinkStorage>({} as LinkStorage);
    useFocusEffect(
        useCallback(() => {
            getLinks();
        }, [category])
    );

    async function getLinks() {
        try {
            const links = await linkStorage.getLinks();

            setLinks(links.filter((link: LinkStorage) => link.category === category));
        } catch (error) {
            Alert.alert("Error on get links", "An error occurred while trying to get links");
        }
    }

    function handleDetails(linkSelected: LinkStorage) {
        setLinkSelected(linkSelected);
        setShowModal(true);
    }

    async function deleteLink(id: string) {
        try {
            await linkStorage.removeLink(id);
            await getLinks();
            setShowModal(false);
        } catch (error) {
            Alert.alert("Error", "An error occurred while trying to delete the link");
            console.error(error);
        }
    }

    function handleDelete(id: string) {
            Alert.alert("Delete link", "Are you sure you want to delete this link?", [
                {text: "Cancel", style: "cancel"},
                {text: "Yes", onPress: async () => deleteLink(id)}
            ]);
    }

    async function handleOpenLink(url: string) {
        try {
            const canOpen = await Linking.canOpenURL(url);
            if (canOpen){
                await Linking.openURL(url);
            }
        } catch (error) {
            Alert.alert("Error", "An error occurred while trying to open the link");
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}></Image>
                <TouchableOpacity activeOpacity={0.3} onPress={() => router.navigate("/add")}>
                    <MaterialIcons name={"add"} size={32} color={colors.green[300]}></MaterialIcons>
                </TouchableOpacity>
            </View>
            <Categories onChange={setCategory} selected={category}/>
            <FlatList
                data={links}
                keyExtractor={(item) => item.id}
                renderItem={
                    ({item}) => (
                        <Link
                            name={item.name}
                            url={item.url}
                            onDetails={() => handleDetails(item)}
                        />
                    )
                }
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal visible={showModal} transparent animationType={"slide"}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory} >{linkSelected.category}</Text>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <MaterialIcons
                                    name={"close"}
                                    size={24}
                                    color={colors.gray[400]}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>{linkSelected.name}</Text>
                        <Text style={styles.modalLinkUrl}>{linkSelected.url}</Text>

                        <View style={styles.modalFooter}>
                            <Option name="Delete" icon="delete" variant="secondary" onPress={() => handleDelete(linkSelected.id)}></Option>
                            <Option name="Open" icon="language" onPress={async () => handleOpenLink(linkSelected.url)} ></Option>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}