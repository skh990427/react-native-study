import * as SecureStore from 'expo-secure-store';

const setEncryptStorage = async <T>(key: string, data: T) => {
    try {
        await SecureStore.setItemAsync(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error storing data in SecureStore:', error);
    }
};

const getEncryptStorage = async (key: string) => {
    try {
        const storedData = await SecureStore.getItemAsync(key);
        return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
        console.error('Error retrieving data from SecureStore:', error);
        return null;
    }
};

const removeEncryptStorage = async (key: string) => {
    try {
        const data = await getEncryptStorage(key);
        if (data) {
            await SecureStore.deleteItemAsync(key);
        }
    } catch (error) {
        console.error('Error removing data from SecureStore:', error);
    }
};

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
