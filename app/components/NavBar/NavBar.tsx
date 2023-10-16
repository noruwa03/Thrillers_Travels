"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentRoute = usePathname();

  return (
    <>
      {" "}
      <div className="bg-white lg:rounded-tr-2xl lg:rounded-br-2xl h-full">
        <nav className="h-full flex flex-col justify-between w-4/5 mx-auto">
          <div>
            <h1 className="mt-6 text-xl font-bold text-center break-words">
              Mima<span className="text-slate-500">Booking</span>
            </h1>
            <div className="mt-4 grid place-content-center">
              <div className="w-[82px] h-[82px] rounded-full bg-purple-900 grid place-content-center relative">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width="64"
                  height="64"
                  priority={true}
                  unoptimized={true}
                  className="w-20 h-20 rounded-full border-[3px] border-white"
                />
                <div className="absolute -bottom-3 left-[50%] -translate-x-[50%]">
                  <Link
                    href="/profile"
                    className="p-[0.4rem] rounded-full bg-purple-900 grid place-content-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-pen fill-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="text-center mt-6">ilia jan</h2>
          </div>
          <ul className="-translate-y-8">
            <li className="mt-0 px-2">
              <Link
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-black [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                href={`/`}
              >
                <div className="flex flex-row items-center justify-start space-x-1">
                  <div
                    className={
                      currentRoute === `/`
                        ? "w-1 h-1 bg-black rounded-full block"
                        : "w-1 h-1 bg-transparent"
                    }
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={
                      currentRoute === `/`
                        ? "bi bi-house-door-fill fill-black"
                        : "bi bi-house-door-fill fill-[#959595]"
                    }
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                  </svg>
                </div>

                <span
                  className={
                    currentRoute === `/`
                      ? "text-black font-semibold text-[0.8em]"
                      : "text-gray-700 text-[0.8em]"
                  }
                >
                  Dashboard
                </span>
              </Link>
            </li>

            <li className="my-1 px-2">
              <Link
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-black [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                href={`/explore-city`}
              >
                <div
                  className={`flex flex-row items-center justify-start space-x-1`}
                >
                  <div
                    className={
                      currentRoute === `/explore-city`
                        ? "w-1 h-1 bg-black rounded-full"
                        : "w-1 h-1 bg-transparent"
                    }
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={
                      currentRoute === `/explore-city`
                        ? "bi bi-grid fill-black stroke-black"
                        : "bi bi-grid fill-[#959595]"
                    }
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                  </svg>
                </div>

                <span
                  className={
                    currentRoute === `/explore-city`
                      ? "text-black font-semibold text-[0.8em]"
                      : "text-gray-700 text-[0.8em]"
                  }
                >
                  Explore City
                </span>
              </Link>
            </li>

            <li className="my-1 px-2">
              <Link
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-black [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                href={`/tickets`}
              >
                <div className="flex flex-row items-center justify-start space-x-1">
                  <div
                    className={
                      currentRoute === `/tickets`
                        ? "w-1 h-1 bg-black rounded-full"
                        : "w-1 h-1 bg-transparent"
                    }
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={
                      currentRoute === `/tickets`
                        ? "bi bi-box fill-black"
                        : "bi bi-box fill-[#959595]"
                    }
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                </div>

                <span
                  className={
                    currentRoute === `/tickets`
                      ? "text-black font-semibold text-[0.8em]"
                      : "text-gray-700 text-[0.8em]"
                  }
                >
                  Tickets
                </span>
              </Link>
            </li>

            <li className="my-1 px-2">
              <Link
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-black [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                href={`/favorites`}
              >
                <div className="flex flex-row items-center justify-start space-x-1">
                  <div
                    className={
                      currentRoute === `/favorites`
                        ? "w-1 h-1 bg-black rounded-full"
                        : "w-1 h-1 bg-transparent"
                    }
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={
                      currentRoute === `/favorites`
                        ? "bi bi-heart fill-black"
                        : "bi bi-heart fill-[#959595]"
                    }
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </div>
                <span
                  className={
                    currentRoute === `/favorites`
                      ? "text-black font-semibold text-[0.8em]"
                      : "text-gray-700 text-[0.8em]"
                  }
                >
                  Favorites
                </span>
              </Link>
            </li>

            <li className="my-1 px-2">
              <Link
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-black [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                href={`/settings`}
              >
                <div className="flex flex-row items-center justify-start space-x-1">
                  <div
                    className={
                      currentRoute === `/favorites`
                        ? "w-1 h-1 bg-black rounded-full"
                        : "w-1 h-1 bg-transparent"
                    }
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={
                      currentRoute === `/favorites`
                        ? "bi bi-record-circle fill-black"
                        : "bi bi-record-circle fill-[#959595]"
                    }
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                </div>
                <span
                  className={
                    currentRoute === `/settings`
                      ? "text-black font-semibold text-[0.8em]"
                      : "text-gray-700 text-[0.8em]"
                  }
                >
                  Settings
                </span>
              </Link>
            </li>
          </ul>
          <button className="py-2 px-2 [&>*>svg]:hover:fill-red-400 [&>*]:hover:text-red-400 [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2">
            <div className="flex flex-row items-center justify-start space-x-1">
              <div
                className={
                  currentRoute === `/favorites`
                    ? "w-1 h-1 bg-black rounded-full"
                    : "w-1 h-1 bg-transparent"
                }
              ></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-play-circle fill-[#959595]"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
              </svg>
            </div>

            <span className="text-[#848484] text-[0.8em]">Logout</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

