import { View, StyleSheet, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Hobbies,Categories } from '../model/data/dummyData';
import HobbyItem from './HobbyItem';

const HobbyDetails = ( { route, navigation }: any) => {
  const categoryId = route.params.categoryId;
    const hobbiesByCategory = Hobbies.filter((hobby) => {
      return hobby.categoryIds.indexOf(categoryId) >= 0;
    });
  useLayoutEffect(()=> {
    const categoryTitle = Categories.find(
      (currentCategory) => currentCategory.id === categoryId)?.title;
        if ( categoryTitle != undefined ) {
          navigation.setOptions({
            title: categoryTitle,
          });
        }
  }, [categoryId]);

  const renderHobbyItem = (hobby: any) => {
    return (<HobbyItem {...hobby.item} />)
  }

  return (
    <View style = { Style.container } >
      <FlatList
        data = { hobbiesByCategory }
        keyExtractor = { ( hobby ) => hobby.id }
        renderItem = { renderHobbyItem } />
    </View>
  );
}

export default HobbyDetails

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
