import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

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
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
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

  api.user.getLoginSession.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
