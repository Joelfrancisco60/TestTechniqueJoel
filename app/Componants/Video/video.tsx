"use client"
import Image from 'next/image'
import ReactPlayer from 'react-player'
import videoCheck from "../../../public/videoCheck.png"
import { useEffect, useState } from 'react';
import ArrowSvg from '../../../public/arrowSvg'
import TurnArrowSvg from '@/public/turnArrowSvg';

export default function Video() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Once the component has mounted, set isClient to true
        setIsClient(true);
    }, []);

    return (
        <div className='bg-white border-t border-black text-gray-500 flex flex-col pt-12'>
            <div className='pb-14 flex justify-center'>
                {isClient && (
                    <ReactPlayer 
                        url='https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4'
                        controls={true} 
                        playing={true}
                    />
                )}
            </div>
            <div className='hidden md:flex flex-row justify-between h-0 w-100'>
                <div className='-rotate-45'>
                    <div className='w-28 xl:pl-24 xl:pt-20 animatecss-pulse animatecss-infinite animation-target animatecss animatecss-slow'>
                        <TurnArrowSvg />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='flex justify-center font-medium text-5xl text-black pb-8'>Great features</h1>
                <div className='flex flex-col pb-16 self-center items-center md:w-2/5'>
                    <div className='flex flex-row justify-center pb-4'>
                        <Image
                            src={videoCheck}
                            alt=''
                            width={50} // Set the width as required
                            height={50} // Set the height as required
                            className='mr-3'
                        />
                        <p className='flex items-center'>Ponam in culpa idiota aliis privatatis. Principium ponere culpam in se justum praeceptum. Neque improperes et aliis</p>
                    </div>
                    <div className='flex flex-row justify-center pb-4'>
                        <Image
                            src={videoCheck}
                            alt=''
                            width={50} // Set the width as required
                            height={50} // Set the height as required
                            className='mr-3'
                        />
                        <p className='flex items-center'>Ponam in culpa idiota aliis privatatis. Principium ponere culpam in se justum praeceptum. Neque improperes et aliis</p>
                    </div>
                    <div className='flex flex-row justify-center'>
                        <Image
                            src={videoCheck}
                            alt=''
                            width={50} // Set the width as required
                            height={50} // Set the height as required
                            className='mr-3'
                        />
                        <p className='flex items-center'>Ponam in culpa idiota aliis privatatis. Principium ponere culpam in se justum praeceptum. Neque improperes et aliis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
