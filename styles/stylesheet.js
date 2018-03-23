import {StyleSheet} from 'react-native';

export const app = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    container2: {
        flex: 1,
        alignItems: 'center'
    }
});

export const shop = StyleSheet.create({
    containerItemsAndBasket: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30
    },

    basket: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    titles: {
        paddingBottom: 10,
        fontSize: 20
    },

    oneItem: {
        paddingBottom: 10
    },

    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#157EFC'
    },
    itemPrice: {
        fontSize: 12
    }
});
