import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { data: sessionData } = useSession();

  const profileImageSrc: string =
    sessionData && sessionData.user && sessionData.user.image
      ? sessionData.user.image
      : "/shakti.webp";

  return (
    <div className="mb-5 flex justify-between">
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
        className="flex items-center justify-start gap-2 rounded-full p-1 px-2 md:hover:bg-[hsl(280,100%,70%)]"
      >
        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[hsl(280,100%,70%)] md:h-10 md:w-10">
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

        <span className="hidden text-lg font-semibold text-white md:block ">
          {sessionData && sessionData.user && sessionData.user.name
            ? sessionData.user.name
            : "Login"}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
