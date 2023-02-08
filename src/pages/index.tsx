import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bhayanak Streamer</title>
        <meta name="description" content="Bhayanak Streamer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-dark">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-[hsl(280,100%,70%)]">Bhayanak</span>{" "}
              Streamer
            </h1>
            <div className="flex flex-col items-center gap-2">
              <UserSession />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const UserSession: React.FC = () => {
  const { data: sessionData } = useSession();

  const profileImageSrc: string =
    sessionData && sessionData.user && sessionData.user.image
      ? sessionData.user.image
      : "/shakti.webp";

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-[hsl(280,100%,70%)] hover:animate-spin">
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
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>

      <button className="rounded-full bg-[hsl(280,100%,70%)] px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20 hover:text-[hsl(280,100%,70%)]">
        <Link href="/rooms">Browse Rooms</Link>
      </button>

      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
