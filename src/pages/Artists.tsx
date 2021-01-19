import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Page } from '../components/page/Page';

export const Artists: React.FC<RouteComponentProps> = () => {
  return (
    <Page className="artists">
      <h1 className="title">Artists</h1>
      <div className="content">
        <div className="artist-column">
          <img src="https://f4.bcbits.com/img/a3996750605_16.jpg" alt="urkt" />
          <h2 className="title">Urkt</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <iframe
            title="1"
            style={{ border: 0, width: '100%', height: '42px' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1775995423/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
            seamless
          >
            <a href="https://urkt.bandcamp.com/album/muted">Muted by Urkt</a>
          </iframe>
        </div>
        <div className="artist-column reverse">
          <img src="https://f4.bcbits.com/img/a3996750605_16.jpg" alt="urkt" />
          <h2 className="title">Urkt 2™</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <iframe
            title="2"
            style={{ border: 0, width: '100%', height: '42px' }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1775995423/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/"
            seamless
          >
            <a href="https://urkt.bandcamp.com/album/muted">Muted by Urkt</a>
          </iframe>
        </div>
      </div>
    </Page>
  );
};
