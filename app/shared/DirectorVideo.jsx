"use client"
import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

export default function ModalVideo(props) {
    const { thumb, thumbWidth, thumbHeight, thumbAlt, video, videoWidth, videoHeight } = props;
    const [modalOpen, setModalOpen] = useState(false)
    const videoRef = useRef(null)
  
    return (
      <div className='flex justify-center items-center pt-20 sm:px-10 lg:px-1'>
        <button
          className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
          onClick={() => { setModalOpen(true) }}
          aria-label="Watch the video"
        >
          <div className="relative w-[250px] h-[300px] lg:w-[250px] lg:h-[320px] overflow-hidden rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out">
            <Image layout="fill" objectFit="cover" src={thumb} alt={thumbAlt} />
          </div>
          <svg className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
            <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
            <path className="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
          </svg>
        </button>
  
        <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          <Transition.Child
            className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          <Transition.Child
            className="fixed inset-0 z-10 flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="w-3/5 bg-black mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}
