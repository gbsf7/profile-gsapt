'use client'

import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link'
import deved from '../public/dev-ed-wave.png'
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Gilang Saputra Portofolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-gray-50">Gilang Saputra</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://www.linkedin.com/in/gsapt376/">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-500 font-medium">Gilang Saputra</h2>
            <h3 className="text-2xl py-2 dark:text-gray-200">Cloud Engineer Novice.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-300">Aspiring Cloud Engineer, Looking for experience in the world of cloud computing. Interested in Cloud Infrastructure, and Automation.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <Link href={"https://www.linkedin.com/in/gsapt376/"}><AiFillLinkedin /></Link>
            <Link href={"https://www.youtube.com/channel/UCoUQoa-gZpFuXdcDmSTbTqw"}><AiFillYoutube /></Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-700 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src="https://storage.googleapis.com/dicoding-gce-profile/me.png" alt="Gilang Saputra" unoptimized layout="fill" objectFit="cover"/>
          </div>
          <div>
          
          
          </div>
        </section>
        
        <section>
        
        </section>
      </main>
    </div>

  );  
}
