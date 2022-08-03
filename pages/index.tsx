import { ClientRequest } from 'http';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';
import { getSession, useSession } from 'next-auth/react';
import Player from '../components/Player';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { getToken } from 'next-auth/jwt';

const secret = process.env.JWT_SECRET;

const Home: NextPage = (req) => {

  const token = getToken({ req, secret });
  console.log(token)

  useEffect(() => {
    const session = getSession()
    console.log(session)
  }, [])

  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Music Streaming App</title>
      </Head>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
};

export default Home;

// prefetch data in order to have access to initial session data
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
