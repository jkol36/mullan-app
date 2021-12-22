import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
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
  const StreamItem =() => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>jkol36</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={2}>
            21 Savage at Wells Fargo Center
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Outdoors / Concerts
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Concerts</TagText>
          </TagView>
          <TagView>
            <TagText>Wells Fargo Center</TagText>
          </TagView>
          <TagView>
            <TagText>21 Savage</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
