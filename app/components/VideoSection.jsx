"use client";
import { useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

export default function ModalVideo(props) {
  const { thumb, video } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="relative flex flex-col justify-center items-center pt-20 sm:px-10 lg:px-1 lg:flex-row overflow-hidden">
      <Image
        src="/curve1.svg"
        className="absolute -top-20 left-8 h-3/5 w-1/3 z-10 hidden sm:hidden lg:block"
        width={200}
        height={200}
        alt="Curve 1"
      />
      <Image
        src="/curve2.svg"
        className="absolute top-80 -right-20 h-2/3 w-2/3 z-10 hidden sm:hidden lg:block"
        width={300}
        height={300}
        alt="Curve 2"
      />
      <div className="lg:w-auto">
        <button
          className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group z-20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none"
          onClick={() => setModalOpen(true)}
          aria-label="Watch the video"
        >
          <Image
            className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out w-full"
            src={thumb.src}
            width={thumb.width.lg}
            height={thumb.height.lg}
            priority
            alt={thumb.alt}
          />
          <svg
            className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
          >
            <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
            <path
              className="fill-indigo-500 drop-shadow-2xl"
              d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
            />
          </svg>
        </button>
      </div>
      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog
          initialFocus={videoRef}
          onClose={() => setModalOpen(false)}
          className="fixed inset-0 z-30 flex items-center justify-center overflow-hidden"
        >
          <Transition.Child
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          <Transition.Child
            className="relative z-30 flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="w-full mx-auto h-full flex items-center lg:w-3/4">
              <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={video.width.lg} height={video.height.lg} loop controls>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}