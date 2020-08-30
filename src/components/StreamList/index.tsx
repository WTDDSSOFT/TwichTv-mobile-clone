import React from 'react';
import { Text } from 'react-native';
import streamThumbnail from "../../images/stream_thumbnail.jpg"
 
import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,


} from './styles';

const StreamList: React.FC = () => {

  const StreamItem  = ()=>(

    <StreamContainer>
        <StreamThumbnail source={streamThumbnail}/>

        <StreamColumn>
          <StreamRow>
            <StreamHeader>
            <StreamAvatar/>
              <StreamUsername numberOfLines={1}>rdz_oficial</StreamUsername>
            </StreamHeader>
          
            <StreamDescription numberOfLines={1}>
              Front-end com next.js, chakra UI e GraphQl
            </StreamDescription>

            <StreamCategory numberOfLines={1} >
              Science & tecnology
            </StreamCategory>
            
          </StreamRow>
       

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>web Development</TagText>
          </TagView>
        </TagRow>

      </StreamColumn>
    </StreamContainer>
  )
  return (
    <List>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
      <StreamItem/>
    </List>
  );
};

export default StreamList;
