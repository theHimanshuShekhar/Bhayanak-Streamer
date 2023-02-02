import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const Rooms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bhayanak Streamer | Rooms</title>
        <meta name="description" content="Bhayanak Streamer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container h-screen w-screen py-4">
          <Header />
          <div className="text-9xl">Rooms</div>
        </div>
      </main>
    </>
  );
};

export default Rooms;

const Header: React.FC = () => {
  const { data: sessionData } = useSession();

  const profileImageSrc: string =
    sessionData && sessionData.user && sessionData.user.image
      ? sessionData.user.image
      : "/shakti.webp";

  const sessionUserText: string =
    sessionData && sessionData.user && sessionData.user.name
      ? sessionData.user.name
      : "Login";

  return (
    <div className="flex justify-between">
      <Link
        href="/rooms"
        className="group flex items-center justify-start gap-2 rounded-full p-1 px-2 hover:bg-[hsl(280,100%,70%)]"
      >
        <div className="relative block h-10 w-10 overflow-hidden rounded-full group-hover:animate-spin">
          <Image
            src="/shakti.webp"
            fill
            alt="User Profile Image"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className="text-lg font-bold text-white">
          <span className="text-[hsl(280,100%,70%)] group-hover:text-white">
            Bhayanak
          </span>{" "}
          Streamer
        </div>
      </Link>
      <Link
        href="/"
        className="flex items-center justify-start gap-2 rounded-full p-1 px-2 hover:bg-[hsl(280,100%,70%)]"
      >
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[hsl(280,100%,70%)]">
          <Image
            src={profileImageSrc}
            fill
            alt="User Profile Image"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>

        <span className="text-lg font-semibold text-white">
          {sessionData && sessionData.user && sessionData.user.name
            ? sessionData.user.name
            : "Login"}
        </span>
      </Link>
    </div>
  );
};
