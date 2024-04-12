import Quantity from "./quantity";
import Die from "./die";

export default function Call({
  quantity,
  face,
}: {
  quantity: number;
  face: number;
}) {
  return (
    <>
      <Quantity quantity={quantity} />
      <Die face={face} />
    </>
  );
}
