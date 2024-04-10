"use client";

import Button from "@mui/material/Button";
import { useState } from "react";
import DiceHand from "../_components/liars-dice/dice-hand";

export default function LiarsDice() {
  const HAND_SIZE = 5;
  const [dice, setDice] = useState([0, 0, 0, 0, 0]);

  const rollDice = () => {
    const newDice = Array.from(
      { length: HAND_SIZE },
      () => Math.floor(Math.random() * 6) + 1,
    );
    console.log(newDice);
    setDice(newDice);
  };

  const displayDice = (faces: number[]) => {
    const diceImages: JSX.Element[] = [];
    faces.forEach((face, index) => {
      switch (face) {
        case 1:
          diceImages.push(
            <i key={`${face}-${index}`} className="fa-regular fa-dice-one" />,
          );
          break;
        case 2:
          diceImages.push(
            <i key={`${face}-${index}`} className="fa-solid fa-dice-two" />,
          );
          break;
        case 3:
          diceImages.push(
            <i key={`${face}-${index}`} className="fa-solid fa-dice-three" />,
          );
          break;
        case 4:
          diceImages.push(
            <i key={`${face}-${index}`} className="fa-solid fa-dice-four" />,
          );
          break;
        case 5:
          diceImages.push(
            <i key={`${face}-${index}`} className="fa-solid fa-dice-five" />,
          );
          break;
        case 6:
          diceImages.push(
            <i key={`${face}-${index}`} className="fa-solid fa-dice-six" />,
          );
          break;
      }
    });
    return diceImages;
  };

  return (
    <>
      <header className="p-4 text-center text-3xl font-semibold">
        Liar&apos;s Dice
      </header>
      <div className="grid gap-2 text-center md:grid-cols-4">
        <div className="bg-contrast">Left Card</div>
        {/* middle card is going to be an interface with shared state */}
        <div className="col-span-2 h-64 bg-contrast">
          <span>Middle Card</span>
        </div>
        <div className="bg-contrast">Right Card</div>
        <div className="bg-contrast">Left Placeholder</div>

        <div className="col-span-2 h-64 bg-contrast">
          <div>User Interface</div>
          <Button color="success" variant="outlined" onClick={() => rollDice()}>
            ROLL
          </Button>
          <div key="userHand">User Hand: {displayDice(dice)}</div>
        </div>
        <div className="bg-contrast">Right Placeholder</div>
      </div>
    </>
  );
}
