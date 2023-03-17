import { View, Text, FlatList } from 'react-native'
import React from 'react'
import  ItemCategory  from '../components/ItemCategory';
import { Categories } from '../model/data/dummyData';

const CategoriesScreen = ({ navigation: { navigate } }: any) => {
  const haldlerPress = (id:string) =>{
    navigate('Details', {
      categoryId: id,
    });
  }
  const renderCategoryItem = (category: any) => {
    return (<ItemCategory category = {category.item}
      haldlerPress = {() => haldlerPress(category.item.id)} />)
  }
  return (
    <View style = {{ backgroundColor: '#8FBC8F', height: '100%' }}>
      <FlatList data = { Categories }
        keyExtractor = { (category) => category.id }
        renderItem = { renderCategoryItem }
        numColumns = {2}
        />
    </View>
  );
}

export default CategoriesScreen