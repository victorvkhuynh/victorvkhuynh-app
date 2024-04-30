import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import Coffee from "../../../assets/coffee.jpg";

export default function Deals() {
  return (
    <>
      <div className="w-full items-center justify-center ">
        <div className="my-2 w-full text-center text-4xl font-bold">
          <h1>Deals</h1>
        </div>
        <div
          id="cardsContainer"
          className="m-auto w-3/5 items-center *:text-center"
        >
          <Card variant="outlined">
            <CardContent>
              <Image
                src={Coffee}
                alt="cup of coffee"
                className="m-auto flex w-24"
              />
              <p>
                <strong>50% off</strong> all coffees with purchase of appetizer
              </p>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Image
                src={Coffee}
                alt="cup of coffee"
                className="m-auto flex w-24"
              />
              <p>
                <strong>Buy one get one free!</strong>
              </p>
            </CardContent>
          </Card>{" "}
          <Card variant="outlined">
            <CardContent>
              <Image
                src={Coffee}
                alt="cup of coffee"
                className="m-auto flex w-24"
              />
              <p>
                <strong>$5</strong> for any combo with medium sized drink
              </p>
            </CardContent>
          </Card>{" "}
          <Card variant="outlined">
            <CardContent>
              <Image
                src={Coffee}
                alt="cup of coffee"
                className="m-auto flex w-24"
              />
              <p>
                <strong>10% off</strong> when paying with cash!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
