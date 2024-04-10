import Die from "./die";

export default function DiceHand({ faces }: { faces: number[] }) {
  const diceImages: JSX.Element[] = [];
  faces.forEach((face, index) => {
    diceImages.push(<Die face={face} index={index} />);
  });
  return diceImages;
}
