/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Image from "next/image";
import DiceOne from "src/assets/die-1.svg";
import DiceTwo from "src/assets/die-2.svg";
import DiceThree from "src/assets/die-3.svg";
import DiceFour from "src/assets/die-4.svg";
import DiceFive from "src/assets/die-5.svg";
import DiceSix from "src/assets/die-6.svg";
import QuestionMark from "src/assets/question-mark-box.svg";

export default function Die({ face }: { face: number | undefined }) {
  switch (face) {
    case 1:
      return <Image src={DiceOne} alt="dice-one" className="h-6 w-6"></Image>;
    case 2:
      return <Image src={DiceTwo} alt="dice-two" className="h-6 w-6"></Image>;
    case 3:
      return (
        <Image src={DiceThree} alt="dice-three" className="h-6 w-6"></Image>
      );
    case 4:
      return <Image src={DiceFour} alt="dice-four" className="h-6 w-6"></Image>;
    case 5:
      return <Image src={DiceFive} alt="dice-five" className="h-6 w-6"></Image>;
    case 6:
      return <Image src={DiceSix} alt="dice-six" className="h-6 w-6"></Image>;
    default:
      return (
        <Image
          src={QuestionMark}
          alt="question-mark"
          className="h-6 w-6"
        ></Image>
      );
  }
}
