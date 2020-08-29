import React from 'react';
import { 
  List,
  CatetegoryContainer,
  CategoryImage,
  CategoryName,
  RedCircle,
  Info,
  CategoryStatus
 } from './styles';
//lista horizotal list  
import data from "./data";


interface ItemProps{
  item: typeof data[0];
}
const CategoryList: React.FC = () => {

 const CategoryItem: React.FC <ItemProps>= ({item})=>(
    <CatetegoryContainer>
      <CategoryImage source={item.source}/>
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle/>
        <Info>51.79k</Info>
        </CategoryStatus>
    </CatetegoryContainer>
  )

  return (
    <List>
      {data.map(item =>(
        <CategoryItem key={item.name} item={item}/>
      ))}
    </List>
  );
};

export default CategoryList;
