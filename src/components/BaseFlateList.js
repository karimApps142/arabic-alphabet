import React from 'react';
import {FlatList} from 'react-native';

export const BaseFlatList = ({
  ListFooterComponent,
  ListFooterComponentStyle,
  ListHeaderComponentStyle,
  ListHeaderComponent,
  keyExtractor,
  data,
  contentContainerStyle,
  horizontal,
  renderItem,
  showsVerticalScrollIndicator = true,
  showsHorizontalScrollIndicator = false,
  numColumns,
}) => {
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      horizontal={horizontal}
      numColumns={numColumns}
      contentContainerStyle={contentContainerStyle}
      ListHeaderComponent={ListHeaderComponent}
      ListHeaderComponentStyle={ListHeaderComponentStyle}
      ListFooterComponent={ListFooterComponent}
      ListFooterComponentStyle={ListFooterComponentStyle}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
