import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = 'links-storage';

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function getLinks(): Promise<LinkStorage[]> {
  const links = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  return links ? JSON.parse(links) : [];
}

async function saveLinks(links: LinkStorage[]): Promise<void> {
    try {
        const storage = await getLinks();
        const newStorage = [...storage, ...links];
        await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(newStorage));

    } catch (error) {
        throw error;
    }
}

async function removeLink(id: string): Promise<void> {
    try {
        const storage = await getLinks();
        const newStorage = storage.filter((item) => item.id !== id);
        await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(newStorage));
    } catch (error) {
        throw error;
    }
}

export const linkStorage = {
    getLinks,
    saveLinks,
    removeLink
};