import React from 'react';
import {  View, FlatList } from 'react-native';

import { Wrapper ,Container, Main } from './styles';
import Header from "../../components/Header"

import Heading from "../../components/Heading"
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList"
import StreamList from  "../../components/StreamList";
import ChannelList from "../../components/ChannelList"
interface Item{
  /** dizer pra nossa aplicacão o que um item */
  key:string;
  render:()=> JSX.Element;// one function, what return react element.
  isTitile?: boolean;//optional
}

const Following: React.FC = () => {
  /**
   * faz um calculo, assim que a pagina iniciar.
   */
  const {data, indices} = React.useMemo(()=>{// estamos mexendo no comportamento do component
                    // we messing of the behavior of react native component 
    /**array of items */
    const items:Item[] = [
      {//first item
        //call component heading 
        key:'PAGE_HEADING',
        render:()=><Heading>Following</Heading>,
      },
      {
        key:'FOLLOWE_CATEGORIES',
        render:()=><Title>Follwing Category</Title>,
        isTitile: true,
      },
      {//first item
        key:'C1',
        render:()=><CategoryList/>,
      },
      {
        key:'LIVE_CHANNELS',
        render:()=><Title>Live Channelss</Title>,
        isTitile: true,
      },
      {//first item
        key:'C2',
        render:()=><StreamList/>,
      },
      {
        key:'COTINUE_WATCHING',
        render:()=><Title>Continue Watching</Title>,
        isTitile: true,
      },
      {//first item
        key:'C3',
        render:()=><StreamList/>,
      },
      {
        key:'OFFILINE_CHANNELS',
        render:()=><Title>Offilne Channels</Title>,
        isTitile: true,
      },
      {//first item
        key:'C4',
        render:()=><ChannelList/>,
      },
    ];
    /**arrya que cotám apens os index dos elementos que são titulo */
    const indices: number[] = [];
    /** faz um loop dentro do  arrya de items, verificando se o item for titulo 
     * se for anota o index  no arrya de indices
    */
    items.forEach((item,index)=>item.isTitile && indices.push(index));

    return {
      data:items,
      indices,
    };

  },[]);


  return (
    <Wrapper>
      <Container>
      <Header/>


      <Main>
        {/* aqui e uma lista de items, que eu criei la em cima */}
        <FlatList<Item>
          data={data}
          renderItem={({item})=> item.render()}
          keyExtractor={item => item.key}
          stickyHeaderIndices={indices}
            //
          onRefresh={()=>{}}
          refreshing={false}
        />
      </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
