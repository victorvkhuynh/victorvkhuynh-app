/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import PersonalPicture from "src/assets/placeholder-picture.png";
import NavBar from "./_components/navbar";
import Footer from "./_components/footer";

export default function HomePage() {
  return (
    <main>
      <div className="mx-11 mt-4 overflow-hidden">
        <div className="grid border-spacing-2 gap-4 md:grid-cols-4">
          <NavBar />
          <div className="col-span-4 flex h-auto items-center justify-center md:col-span-2">
            <div className="h-full w-full">
              <span className="flex justify-center font-semibold underline underline-offset-4">
                About Me
              </span>
              <br />
              <p className="text-justify">
                I&apos;m Victor Huynh, a graduate of Ryerson University with a
                degree in Computer Science, earned in 2018. From a young age,
                I&apos;ve possessed a competitive spirit that has driven me
                towards pursuits such as e-sports, particularly in games like
                StarCraft 2 and League of Legends. While some may label this as
                mere passion or even addiction, I see it as a deep-seated
                dedication to my interests.
                <br />
                <br />
                Now, I aim to channel that same fervor towards cultivating a
                healthier, more athletic lifestyle, with a primary focus on
                nutrition and physical exercise. During periods of rest and
                recovery, I intend to hone my skills as a software engineer
                beyond my professional obligations, delving into personal
                projects and potential freelance opportunities.
                <br />
                <br />
                As I embark on this journey, I remain open to the opportunities
                and experiences that lie ahead, embracing the evolution of both
                my physical and professional pursuits.
              </p>
            </div>
          </div>
          <div className="col-span-4 row-span-2 flex h-full items-center justify-center md:col-span-2">
            <div className="relative w-full overflow-hidden rounded-full drop-shadow-2xl sm:h-96 md:h-full">
              <Image
                placeholder="blur"
                priority
                src={PersonalPicture}
                alt="Victor Huynh"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-span-4 flex h-full items-center justify-center tracking-widest md:col-span-1">
            <div className="h-full w-full">
              <span className="flex justify-center font-semibold underline underline-offset-4">
                Interests
              </span>
              <br />
              <ul className="text-center tracking-wider">
                <li>Volleyball</li>
                <li>Basketball</li>
                <li>Kettlebell</li>
                <li>Running</li>
                <li>Cooking</li>
                <li>Reading</li>
              </ul>
            </div>
          </div>
          <div className="col-span-4 flex h-full items-center justify-center tracking-widest md:col-span-1">
            <div className="h-full w-full">
              <span className="flex justify-center font-semibold underline underline-offset-4">
                Current 2024 Goals
              </span>
              <br />
              <ul className="text-center tracking-wider">
                <li>Finish my personal website</li>
                <li>Grow my blog, weekly posts</li>
                <li>Publish my first multiplayer game</li>
                <li>Run a full marathon</li>
                <li>Dunk a basketball</li>
                <li>Read a book a month</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
