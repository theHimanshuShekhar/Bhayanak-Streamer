import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";

const Rooms: NextPage = () => {
  const Rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 6];
  return (
    <>
      <Head>
        <title>Bhayanak Streamer | Rooms</title>
        <meta name="description" content="Bhayanak Streamer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container h-screen w-screen overflow-x-hidden overflow-y-scroll py-4 scrollbar-hide">
          <Navbar />
          <div className="grid grid-cols-5 grid-rows-3 gap-4">
            {Rooms.map((room, index) => {
              return <Room key={index} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Rooms;

const Room: React.FC = () => {
  const roomName = (Math.random() + 1).toString(36).substring(7);
  const roomUsers: string[] = [
    "shakti.webp",
    "shakti.webp",
    "shakti.webp",
    "shakti.webp",
    "shakti.webp",
  ];
  return (
    <Link
      href={"/rooms/" + roomName}
      className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 bg-cover bg-center text-white shadow-md hover:bg-white/20"
      style={{ backgroundImage: `url('/shakti.webp')` }}
    >
      <div className="mt-48 rounded-b-xl bg-gradient-to-r from-[#3e0a86] to-transparent p-1">
        <h3 className="mb-2 text-2xl font-bold">{roomName}</h3>

        <div className="flex justify-between p-1">
          <div className="flex rounded-b-xl">
            {roomUsers &&
              roomUsers.slice(0, 5).map((user, index) => (
                <div
                  key={index}
                  className="relative -m-1 h-12 w-12 overflow-hidden rounded-full border-2 border-[hsl(280,100%,70%)] md:h-10 md:w-10"
                >
                  <Image
                    src="/shakti.webp"
                    fill
                    alt="Room User"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              ))}
          </div>
          <div className="align-center flex content-center items-center rounded-xl bg-[hsl(280,100%,70%)] p-1 text-xl font-bold shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-auto"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            <span className="inline-block align-middle">
              {roomUsers.length}{" "}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
