import { StyleSheet } from 'react-native';

export const app = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',        
    }
});

export const shop = StyleSheet.create({
    containerItemsAndBasket: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
    }
});
