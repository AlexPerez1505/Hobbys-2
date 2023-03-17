import { Pressable, StyleSheet, Text, View } from "react-native";
import { IItemCategory } from "../model/interfaces/IItemCategory";

const ItemCategory = ({ category, haldlerPress }: IItemCategory) => {
    const {id, title, color} = category;
    return(
        <View style = {Styles.gridItem}>
            <Pressable android_ripple = { Styles.ripple }
                style = {({ pressed }) => [
                    Styles.defaultGrid,
                    pressed ? Styles.elementPressed: null,
                ]}
                onPress = { () => haldlerPress(id) }>
                    <View style = {[Styles.innerContainer,{backgroundColor: color}]}>
                        <Text style = { Styles.title }> {title} </Text>
                    </View>
                </Pressable>
        </View>
    );
}



const Styles = StyleSheet.create({
    defaultGrid: {
        flex:1
    },
    ripple: {
        color: '#ccc'
    },
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    elementPressed: {
        opacity: 0.1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    }
})
export default ItemCategory;







