import {StyleSheet} from "react-native";
import {colors} from "@/styles/colors";

export const styles = StyleSheet.create({
    title: {
        color: colors.green[900],
        fontStyle: 'italic',
        fontSize: 22,
    },
    container: {
        flex: 1,
        paddingTop: 60,
    },
    header: {
        paddingHorizontal: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
    },
    logo: {
        height: 32,
        width: 38
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100
    },
    modal: {
        flex:1,
        justifyContent: 'flex-end'
    },
    modalContent: {
        backgroundColor:colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 24,
        padding: 24
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalCategory: {
        flex: 1,
        fontSize:16,
        fontWeight: '500',
        color: colors.gray[400]
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200],
    },
    modalLinkUrl: {
        fontSize: 14,
        color: colors.gray[400],
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical: 14
    }
})