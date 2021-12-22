import React from 'react';

import {
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
  List
} from './styles';
import { Image } from 'react-native';
import data from './data'

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <Image style={{width: 150, height: 150}} source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-70x70.jpeg'}}/>
      <CategoryName numberOfLines={1}>{ item.name }</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>{Math.floor(Math.random(129000, 130000) * 100)}k viewers</Info>
      </CategoryStatus>
    </CategoryContainer>
  )

  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
