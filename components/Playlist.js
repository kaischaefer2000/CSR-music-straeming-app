import React, { useEffect, useState } from 'react';
import { playlistIdState } from '../atoms/playlistAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import Songs from '../components/Songs';
import Image from 'next/image';

function Playlist() {
  // SpotifyWebApi object whith client credentials and tokens
  const spotifyApi = useSpotify();
  // Global state of currently selected playlist id. This id is used to fetch the corresponding data from the API
  const playlistId = useRecoilValue(playlistIdState);
  // Playlist data that comes from the Spotify API
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  // Get playlist data on the client
  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => console.log(err));
  }, [spotifyApi, playlistId]);

  return (
    <React.Fragment>
      <section
        className={`flex h-72 items-end space-x-7 bg-gradient-to-b from-red-500 to-black p-8 text-white `}
      >
        {playlist?.images[0]?.url && (
          <Image
            width="176px"
            height="176px"
            src={playlist?.images[0]?.url}
            alt="Playlist cover"
            className="shadow-2xl"
          />
        )}
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl">{playlist?.name}</h1>
        </div>
      </section>

      <div>
        <Songs />
      </div>
    </React.Fragment>
  );
}

export default Playlist;
