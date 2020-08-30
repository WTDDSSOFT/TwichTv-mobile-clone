import React from 'react';
import { Text } from 'react-native';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,

} from './styles';

const ChannelList: React.FC = () => {
  const ChanneListem = ()=>(
    <ChannelContainer>
      <LeftSide>
        <Avatar/>
        <Column>
        <Username>WTDDSSOFT </Username>
        <Info>36 new videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
          <WhiteCircle/>
      </RightSide>
    </ChannelContainer>
  )
  return (
    <List>
      <ChanneListem/>
      <ChanneListem/>
      <ChanneListem/>
      <ChanneListem/>
      <ChanneListem/>
      <ChanneListem/>
      <ChanneListem/>
      <ChanneListem/>
    </List>
  );
};

export default ChannelList;
