import { type NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/navbar";

const Room: NextPage = () => {
  const router = useRouter();
  const params = router.query;
  return (
    <>
      <Head>
        <title>Bhayanak Streamer | {params.roomid}</title>
        <meta name="description" content="Bhayanak Streamer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container h-screen w-screen overflow-x-hidden overflow-y-scroll py-4  scrollbar-hide">
          <Navbar />
          <div className="text-9xl">{params.roomid}</div>
        </div>
      </main>
    </>
  );
};

export default Room;
