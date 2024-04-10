export default function Die({ face, index }: { face: number; index: number }) {
  switch (face) {
    case 1:
      return <i key={`${face}-${index}`} className="fa-regular fa-dice-one" />;
    case 2:
      return <i key={`${face}-${index}`} className="fa-regular fa-dice-two" />;
    case 3:
      return (
        <i key={`${face}-${index}`} className="fa-regular fa-dice-three" />
      );
    case 4:
      return <i key={`${face}-${index}`} className="fa-regular fa-dice-four" />;
    case 5:
      return <i key={`${face}-${index}`} className="fa-regular fa-dice-five" />;
    case 6:
      return <i key={`${face}-${index}`} className="fa-regular fa-dice-six" />;
    default:
      return;
  }
}
