import React from 'react'
import { View, Text, StyleSheet, Platform, Pressable, Image } from 'react-native';
import { Hobby } from '../model/classes/Category';

const HobbyItem = ({title, imageUrl}: Hobby) => {
    return (
        <View style = {Styles.mainContainer} >
            <Pressable
                style = { ( { pressed } ) => ( pressed ? Styles.elementPressed : null ) }
                    android_ripple = { Styles.ripple } >
                <View style = { Styles.innerContainer }>
                    <View>
                        <Image source = { { uri: imageUrl } } style = { Styles.image } />
                            <Text style = { Styles.title }> { title } </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const Styles = StyleSheet.create({
    mainContainer: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#2471A3',
        elevation: 4,
        shadowColor: '#66CDAA',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    ripple: {
        color: 'black'
    },
    elementPressed: {
        opacity: 0.1
    },
    image: {
        display: 'flex',
        width: 100,
        height: 100,
        justifyContent: 'center',
        resizeMode: 'stretch',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
});

export default HobbyItem