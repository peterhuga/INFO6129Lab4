import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        
    },
    indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    gameContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    gameText: {
        color: '#fff',
        maxWidth: '90%',
        fontSize: 16,
    },
});