import styled from 'styled-components/native';

import colors from "../../styles/colors";

export const List = styled.View`
padding: 8px 0 24px;`;

export const StreamContainer = styled.TouchableOpacity`
flex-direction: row;
flex:1;

margin-bottom: 24px;
margin-right:24px;`;

export const StreamColumn = styled.View`
margin-left:11px;
flex:1;`;

export const StreamThumbnail = styled.Image`
width:119px;
height: 66px;`;

export const StreamRow = styled.View`
height: 66px;
justify-content: space-between;`;

export const StreamHeader = styled.View`
  flex-direction:row;
  align-items:center;

`;
export const StreamAvatar = styled.View`
width: 20px;
height: 20px;
border-radius: 10px;
background: ${colors.tag};

`;

export const StreamUsername = styled.Text`
color: ${colors.black};
margin-left: 5px;
font-family:roboto_700;
`;

export const StreamDescription = styled.Text`
  color: ${colors.black};
`;


export const StreamCategory = styled.Text``;

export const TagRow = styled.Text``;

export const TagView = styled.Text``;

export const TagText = styled.Text``;