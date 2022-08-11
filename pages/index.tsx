import Sidebar from '../components/Sidebar';
import Center from '../components/Center';
import { useSession } from 'next-auth/react';
import Player from '../components/Player';
import Head from 'next/head';
import { NextPage } from 'next';
import Login from '../components/Login';

const Home: NextPage = () => {
  const { data: session } = useSession();

  // check if user is logged in
  if (session) {
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
  }
  return <Login />;
};

export default Home;
