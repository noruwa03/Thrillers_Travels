"use client";
import { useState, useRef, createRef } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar/NavBar";

const HomePage = () => {
  const date = Date.now();
  const sideNav = useRef<HTMLDivElement>(null);

  const sideNavHandler = () => {
    sideNav.current?.classList.toggle("hidden");
  };

  const dropdown = useRef<HTMLUListElement | null>(null);
  const toggleDropdown = () => {
    dropdown.current?.classList.toggle("hidden");
  };

  // const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(3);
  // const [children, setChildren] = useState(0);

  // const increaseRoom = () => {
  //   if (room < 10) {
  //     setRoom(room + 1);
  //   }
  // };

  // const decreaseRoom = () => {
  //   if (room > 1) {
  //     setRoom(room - 1);
  //   }
  // };

  const increaseAdult = () => {
    if (adult < 10) {
      setAdult(adult + 1);
    }
  };

  const decreaseAdult = () => {
    if (adult > 1) {
      setAdult(adult - 1);
    }
  };

  // const increaseChildren = () => {
  //   if (children < 10) {
  //     setChildren(children + 1);
  //   }
  // };

  // const decreaseChildren = () => {
  //   if (children > 1) {
  //     setChildren(children - 1);
  //   }
  // };

  const galleryRef = createRef<HTMLDivElement>();
  const fooRef = createRef<HTMLDivElement>();

  const prev = () => {
    const divClientWidth = fooRef.current?.clientWidth;
    galleryRef.current?.scrollBy(-divClientWidth!, 0);
  };

  const next = () => {
    const divClientWidth = fooRef.current?.clientWidth;
    galleryRef.current?.scrollBy(divClientWidth!, 0);
  };

  const [nameTypeFocused, setNameTypeFocused] = useState("text");

  return (
    <>
      <main className="flex flex-row items-start justify-start bg-gray-100">
        <div
          ref={sideNav}
          className="lg:sticky lg:top-0 lg:block hidden lg:w-[15%] fixed w-full z-30 h-screen"
        >
          <NavBar />
        </div>
        <div onClick={sideNavHandler} className={`lg:hidden block`}>
          <div className="w-10 h-14 rounded-tl-md rounded-bl-md bg-red-100/70 fixed top-[50%] right-0 -translate-y-[50%] grid place-content-center z-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left-square fill-purple-500"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </div>
        </div>

        <div className="lg:w-[85%] w-full lg:px-8 px-4">
          <div className="lg:mt-0 mt-4 bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-3xl lg:px-8 px-5 py-3 flex lg:flex-row  flex-col-reverse items-center justify-between">
            <div className="relative w-full">
              <input
                type="search"
                id="Search"
                className="block lg:w-60 w-full my-1 outline-none border-[1px] border-gray-300 focus:border-purple-900 pl-10 pr-4 xl:py-[0.5rem] py-2 rounded-lg placeholder:text-[#C4C4C4] placeholder:font-normal placeholder:text-sm text-sm"
                placeholder="Search anything ..."
              />

              <button className="absolute inset-y-0 left-0 flex items-center px-4 z-20">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="stroke-[#C4C4C4]"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
            </div>
            <div className="lg:w-96 w-full lg:mb-0 mb-2 flex flex-row items-center lg:justify-end justify-center gap-8">
              <div className="font-semibold text-sm">
                {new Date(date).toDateString()}
              </div>
              <div className="relative grid place-content-center bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-2 rounded-xl">
                <div className="absolute -top-2 -left-6 rounded-full">
                  <div className="grid place-content-center bg-red-400 w-5 h-5 rounded-full text-[0.72em] text-white">
                    3
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell fill-slate-800"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:mt-8 lg:mb-14 mt-8 mb-12">
            <div className="w-full lg:h-36 h-44 relative">
              <Image
                src="/default_image.jfif"
                alt="Default Image"
                priority={true}
                unoptimized={true}
                width={50}
                height={50}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="lg:hidden block lg:w-3/5 w-4/5 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] lg:p-8 p-3 backdrop-blur-xl bg-white/30 rounded-lg text-slate-800">
                <h2 className="text-center text-lg font-semibold mb-4">
                  Amazing Destinations With MimaBooking
                </h2>
                <p className="text-center lg:text-base text-sm">
                  Travel the world with MimaBooking
                </p>
              </div>
              <div className="lg:w-[85%] sm:w-[94%] w-[85%] absolute sm:-bottom-8 -bottom-16 left-[50%] -translate-x-[50%] p-3 bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-2xl hidden lg:flex sm:flex-row flex-col items-center justify-between">
                <div className="relative w-[30%]">
                  <input
                    type="text"
                    id="Location"
                    className="block w-full my-1 outline-none border-none pl-10 pr-4 xl:py-[0.3rem] py-2 rounded-lg placeholder:text-[#C4C4C4] placeholder:font-normal placeholder:text-sm text-sm"
                    placeholder="Where are you going?"
                  />

                  <button className="absolute inset-y-0 left-0 flex items-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </button>
                  <button className="absolute inset-y-0 -right-4 flex items-center px-4">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="lg:block hidden h-8 w-[1px] bg-gray-300"></div>
                <div className="relative w-[30%]">
                  <input
                    type={nameTypeFocused}
                    id="Date"
                    onFocus={() => setNameTypeFocused("date")}
                    onBlur={() => setNameTypeFocused("text")}
                    placeholder="Check-in Date"
                    className="block w-full my-1 outline-none border-none pl-10 pr-4 xl:py-[0.3rem] py-2 text-sm text-[#C4C4C4] placeholder:text-sm cursor-pointer"
                  />

                  <button className="absolute inset-y-0 left-0 flex items-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar2-minus fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 10.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                    </svg>
                  </button>
                  <button className="absolute inset-y-0 -right-4 flex items-center px-4">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="lg:block hidden h-8 w-[1px] bg-gray-300"></div>
                <div className="w-[17%] flex flex-row items-center justify-between gap-4 relative">
                  <div
                    onClick={toggleDropdown}
                    className="flex flex-row items-center justify-start gap-3"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0007 5.50001C10.9173 5.50001 11.6673 6.25001 11.6673 7.16668C11.6673 8.08334 10.9173 8.83334 10.0007 8.83334C9.08398 8.83334 8.33398 8.08334 8.33398 7.16668C8.33398 6.25001 9.08398 5.50001 10.0007 5.50001ZM10.0007 13.8333C12.2507 13.8333 14.834 14.9083 15.0007 15.5H5.00065C5.19232 14.9 7.75898 13.8333 10.0007 13.8333ZM10.0007 3.83334C8.15898 3.83334 6.66732 5.32501 6.66732 7.16668C6.66732 9.00834 8.15898 10.5 10.0007 10.5C11.8423 10.5 13.334 9.00834 13.334 7.16668C13.334 5.32501 11.8423 3.83334 10.0007 3.83334ZM10.0007 12.1667C7.77565 12.1667 3.33398 13.2833 3.33398 15.5V17.1667H16.6673V15.5C16.6673 13.2833 12.2257 12.1667 10.0007 12.1667Z"
                        fill="#000"
                      />
                    </svg>

                    <div className="font-semibold text-sm">
                      {/* {room} room, {adult} adults, {children} children */}
                      {adult} adults
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                    onClick={toggleDropdown}
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>

                  <ul
                    ref={dropdown}
                    className="hidden absolute top-8 lg:right-0 -right-28 bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] w-48 px-4 rounded-md before:absolute lg:before:left-[92%] lg:before:-translate-x-[10%] before:left-[10%]  before:-translate-x-[10%] before:-translate-y-2 before:content-[''] before:bg-gray-50 before:h-4 before:w-4 before:-rotate-45 text-sm flex-col"
                  >
                    {/* <li className="mt-3">
                      <div className="py-2 flex flex-row items-center justify-between">
                        <span>Rooms</span>
                        <div className="flex flex-row items-center space-x-3">
                          <button
                            onClick={decreaseRoom}
                            className="p-1 rounded-md shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dash-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                              />
                            </svg>
                          </button>

                          <h2 className="text-sm font-semibold">{room}</h2>

                          <button
                            onClick={increaseRoom}
                            className="p-1 rounded-md shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-plus-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li> */}

                    <li className="my-1">
                      <div className="py-2 flex flex-row items-center justify-between">
                        <span>Adults</span>
                        <div className="flex flex-row items-center space-x-3">
                          <button
                            onClick={decreaseAdult}
                            className="p-1 rounded-md shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dash-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                              />
                            </svg>
                          </button>

                          <h2 className="text-sm font-semibold">{adult}</h2>

                          <button
                            onClick={increaseAdult}
                            className="p-1 rounded-md shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-plus-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>

                    {/* <li className="mb-3">
                      <div className="py-2 flex flex-row items-center justify-between">
                        <span>Children</span>
                        <div className="flex flex-row items-center space-x-3">
                          <button
                            onClick={decreaseChildren}
                            className="p-1 rounded-md shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-dash-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                              />
                            </svg>
                          </button>

                          <h2 className="text-sm font-semibold">{children}</h2>

                          <button
                            onClick={increaseChildren}
                            className="p-1 rounded-md shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-plus-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </div>

                <button className="text-center bg-slate-700 px-4 sm:py-3 py-[0.4rem] outline-none text-white text-sm font-medium rounded-lg cursor-pointer">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <h3 className="lg:text-2xl text-xl">Trending destinations</h3>
            <div className="flex flex-row items-center justify-start gap-3">
              <div
                onClick={prev}
                className="cursor-pointer grid place-content-center p-[0.3rem] bg-white rounded-lg border-2 border-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-compact-left fill-black stroke-black"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                  />
                </svg>
              </div>

              <div
                onClick={next}
                className="cursor-pointer grid place-content-center p-[0.3rem] bg-slate-900 rounded-lg border-2 border-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-compact-right fill-white scale-110 stroke-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            ref={galleryRef}
            className="mt-4 flex snap-x snap-mandatory w-full mx:auto overflow-x-scroll lg:py-4 py-4 lg:space-x-6 space-x-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            <div
              ref={fooRef}
              className="pl-2 pr-4 py-3 bg-white text-sm cursor-pointer rounded-2xl"
            >
              <div className="snap-center w-[19rem] break-words flex flex-row items-center justify-start gap-3">
                <Image
                  src="/france.webp"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="w-[4.7rem] aspect-[4/4] cursor-pointer object-cover rounded-2xl"
                />
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold">Montmarte, France</h3>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-[#ffe234]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs font-semibold">4/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    vo
                  </p>
                  <p className="font-semibold text-base">$450,000,000</p>
                </div>
              </div>
            </div>
            <div
              ref={fooRef}
              className="pl-2 pr-4 py-3 bg-white text-sm cursor-pointer rounded-2xl"
            >
              <div className="snap-center w-[19rem] break-words flex flex-row items-center justify-start gap-3">
                <Image
                  src="/istanbul.webp"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="lg:w-[4.7rem] aspect-[4/4] cursor-pointer object-cover rounded-2xl"
                />
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold">Istanbul, Turkey</h3>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-[#ffe234]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs font-semibold">5/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    vol
                  </p>
                  <p className="font-semibold text-base">$600,000,000</p>
                </div>
              </div>
            </div>
            <div
              ref={fooRef}
              className="pl-2 pr-4 py-3 bg-white text-sm cursor-pointer rounded-2xl"
            >
              <div className="snap-center w-[19rem] break-words flex flex-row items-center justify-start gap-3">
                <Image
                  src="/london.webp"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="w-[4.7rem] aspect-[4/4] cursor-pointer object-cover rounded-2xl"
                />
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold">London, UK</h3>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-[#ffe234]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs font-semibold">5/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    volu
                  </p>
                  <p className="font-semibold text-base">$360,000,000</p>
                </div>
              </div>
            </div>
            <div
              ref={fooRef}
              className="pl-2 pr-4 py-3 bg-white text-sm cursor-pointer rounded-2xl"
            >
              <div className="snap-center w-[19rem] break-words flex flex-row items-center justify-start gap-3">
                <Image
                  src="/default_image.jfif"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="w-[4.7rem] aspect-[4/4] cursor-pointer object-cover rounded-2xl"
                />
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold">New York, USA</h3>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-[#ffe234]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs font-semibold">5/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    vol
                  </p>
                  <p className="font-semibold text-base">$400,000,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-row items-center justify-between">
            <h3 className="lg:text-2xl text-xl">Best Offers</h3>
            <Link href="" className="text-sm">
              View All
            </Link>
          </div>
          <div className="my-8 grid grid-cols-10 gap-6">
            <div className="lg:col-span-2 sm:col-span-5 col-span-10">
              <div className="bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-3xl p-2 overflow-hidden">
                <div className="w-full lg:h-28 h-36 rounded-3xl overflow-hidden">
                  <Image
                    src="/istanbul.webp"
                    alt="Cover Photo"
                    priority={true}
                    unoptimized={true}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-3 mt-2">
                  <h1 className="lg:text-xs text-sm text-slate-800 font-semibold capitalize">
                    7Seasons Apartment
                  </h1>

                  <div className="mt-1 flex flex-row items-center justify-start space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-geo-alt fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span className="lg:text-[0.56em] text-xs text-gray-400 capitalize">
                      Kensington / London
                    </span>
                  </div>
                  <div className="mt-2 mb-3 text-sm font-semibold flex flex-row items-center justify-between">
                    <div>
                      $65.00{" "}
                      <span className="text-gray-400 text-xs font-normal">
                        / night
                      </span>
                    </div>
                    <div className="grid place-content-center bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.5)] p-[0.4rem] rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-heart fill-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 sm:col-span-5 col-span-10">
              <div className="bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-3xl p-2 overflow-hidden">
                <div className="w-full lg:h-28 h-36 rounded-3xl overflow-hidden">
                  <Image
                    src="/villa.webp"
                    alt="Cover Photo"
                    priority={true}
                    unoptimized={true}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-3 mt-2">
                  <h1 className="lg:text-xs text-sm text-slate-800 font-semibold capitalize">
                    Along With The Villa
                  </h1>

                  <div className="mt-1 flex flex-row items-center justify-start space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-geo-alt fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span className="lg:text-[0.56em] text-xs text-gray-400 capitalize">
                      Hungary / Budapest
                    </span>
                  </div>
                  <div className="mt-2 mb-3 text-sm font-semibold flex flex-row items-center justify-between">
                    <div>
                      $65.00{" "}
                      <span className="text-gray-400 text-xs font-normal">
                        / night
                      </span>
                    </div>
                    <div className="grid place-content-center bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.5)] p-[0.4rem] rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-heart fill-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 sm:col-span-5 col-span-10">
              <div className="bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-3xl p-2 overflow-hidden">
                <div className="w-full lg:h-28 h-36 rounded-3xl overflow-hidden">
                  <Image
                    src="/resorts.webp"
                    alt="Cover Photo"
                    priority={true}
                    unoptimized={true}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-3 mt-2">
                  <h1 className="lg:text-xs text-sm text-slate-800 font-semibold capitalize">
                    Resorts and Recreation
                  </h1>

                  <div className="mt-1 flex flex-row items-center justify-start space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-geo-alt fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span className="lg:text-[0.56em] text-xs text-gray-400 capitalize">
                      Williamstreet / Boxon
                    </span>
                  </div>
                  <div className="mt-2 mb-3 text-sm font-semibold flex flex-row items-center justify-between">
                    <div>
                      $65.00{" "}
                      <span className="text-gray-400 text-xs font-normal">
                        / night
                      </span>
                    </div>
                    <div className="grid place-content-center bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.5)] p-[0.4rem] rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-heart fill-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 sm:col-span-5 col-span-10">
              <div className="bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-3xl p-2 overflow-hidden">
                <div className="w-full lg:h-28 h-36 rounded-3xl overflow-hidden">
                  <Image
                    src="/classy.webp"
                    alt="Cover Photo"
                    priority={true}
                    unoptimized={true}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-3 mt-2">
                  <h1 className="lg:text-xs text-sm text-slate-800 font-semibold capitalize">
                    Beautiful and Classy
                  </h1>

                  <div className="mt-1 flex flex-row items-center justify-start space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-geo-alt fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span className="lg:text-[0.56em] text-xs text-gray-400 capitalize">
                      Citadines Opera Paris / France
                    </span>
                  </div>
                  <div className="mt-2 mb-3 text-sm font-semibold flex flex-row items-center justify-between">
                    <div>
                      $65.00{" "}
                      <span className="text-gray-400 text-xs font-normal">
                        / night
                      </span>
                    </div>
                    <div className="grid place-content-center bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.5)] p-[0.4rem] rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-heart fill-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 sm:col-span-5 col-span-10">
              <div className="bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] rounded-3xl p-2 overflow-hidden">
                <div className="w-full lg:h-28 h-36 rounded-3xl overflow-hidden">
                  <Image
                    src="/peace.webp"
                    alt="Cover Photo"
                    priority={true}
                    unoptimized={true}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-3 mt-2">
                  <h1 className="lg:text-xs text-sm text-slate-800 font-semibold capitalize">
                    Permanent Peace
                  </h1>

                  <div className="mt-1 flex flex-row items-center justify-start space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-geo-alt fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span className="lg:text-[0.56em] text-xs text-gray-400 capitalize">
                      Sugar Apartment / Brazil
                    </span>
                  </div>
                  <div className="mt-2 mb-3 text-sm font-semibold flex flex-row items-center justify-between">
                    <div>
                      $65.00{" "}
                      <span className="text-gray-400 text-xs font-normal">
                        / night
                      </span>
                    </div>
                    <div className="grid place-content-center bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.5)] p-[0.4rem] rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-heart fill-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-row items-center justify-between">
            <h3 className="text-2xl">Explore France</h3>
            <div className="flex flex-row items-center justify-start gap-3">
              <div className="cursor-pointer grid place-content-center p-[0.3rem] bg-white rounded-lg border-2 border-slate-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-compact-left fill-black stroke-black"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                  />
                </svg>
              </div>

              <div className="cursor-pointer grid place-content-center p-[0.3rem] bg-slate-900 rounded-lg border-2 border-slate-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-compact-right fill-white scale-110 stroke-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4 flex snap-x snap-mandatory w-full mx:auto overflow-x-scroll lg:py-4 py-4 space-x-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <div className="pl-2 pr-4 py-3 bg-white text-sm cursor-pointer rounded-2xl">
              <div className="w-[19rem] break-words flex flex-row items-center justify-start gap-3">
                <Image
                  src="/france.webp"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="snap-center lg:w-[4.7rem] aspect-[4/4] cursor-pointer object-cover rounded-2xl"
                />
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold">Montmarte, France</h3>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-[#ffe234]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs font-semibold">4/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    vo
                  </p>
                  <p className="font-semibold text-base">$450,000,000</p>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-4 py-3 bg-white text-sm cursor-pointer rounded-2xl">
              <div className="w-[19rem] break-words flex flex-row items-center justify-start gap-3">
                <Image
                  src="/istanbul.webp"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="snap-center lg:w-[4.7rem] aspect-[4/4] cursor-pointer object-cover rounded-2xl"
                />
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold">Istanbul, Turkey</h3>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-[#ffe234]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs font-semibold">5/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    vol
                  </p>
                  <p className="font-semibold text-base">$600,000,000</p>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-4 py-3 bg-white text-sm cursor-pointer rounded-2xl">
              <div className="w-[19rem] break-words flex flex-row items-center justify-start gap-3">
                <Image
                  src="/london.webp"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="snap-center lg:w-[4.7rem] aspect-[4/4] cursor-pointer object-cover rounded-2xl"
                />
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold">London, UK</h3>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-[#ffe234]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs font-semibold">5/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    volu
                  </p>
                  <p className="font-semibold text-base">$360,000,000</p>
                </div>
              </div>
            </div>
            <div className="pl-2 pr-4 py-3 bg-white text-sm cursor-pointer rounded-2xl">
              <div className="w-[19rem] break-words flex flex-row items-center justify-start gap-3">
                <Image
                  src="/default_image.jfif"
                  alt="Image"
                  priority={true}
                  unoptimized={true}
                  width={50}
                  height={50}
                  className="snap-center lg:w-[4.7rem] aspect-[4/4] cursor-pointer object-cover rounded-2xl"
                />
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold">New York, USA</h3>
                    <div className="flex flex-row items-center justify-start gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-[#ffe234]"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs font-semibold">5/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                    vol
                  </p>
                  <p className="font-semibold text-base">$400,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
