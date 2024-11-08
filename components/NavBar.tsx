import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-gray-100 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          {/* <Image src="/Medica.png" alt="logo" width={124} height={30} /> */}
          <h2 className="text-3xl font-bold text-blue-500">
            Spark<span className="text-[#fbe843]">Up</span>{" "}
          </h2>
        </Link>

        <div className="flex  gap-5 text-black ">
          {session && session?.user ? (
            <div className="flex items-center align-baseline gap-5 bg-[#fbe843] p-2 rounded-xl">
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create </span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <span>|</span>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="self-baseline flex">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500 " />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          ) : (
            <form
              className="flex justify-center "
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              {/* <button
                type="submit"
                className="bg-primary text-white w-20 h-8 rounded-lg hover:bg-primary/90 transition fade-in-100 "
              >
                Login
              </button> */}
              <button
                type="submit"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 transition fade-in-100 hover:rotate-2 hover:scale-110"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in with Github
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
