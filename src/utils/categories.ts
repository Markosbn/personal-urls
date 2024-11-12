import {MaterialIcons} from "@expo/vector-icons";

type Category = {
    id: number;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}
export const categories: Category[] = [
    {id: 1, name: "Projects", icon: "folder" },
    {id: 2, name: "Course", icon: "code" },
    {id: 3, name: "Site", icon: "language" },
    {id: 4, name: "Article", icon: "newspaper" },
    {id: 5, name: "Video", icon: "movie" },
    {id: 6, name: "Documentation", icon: "content-paste" },
];