import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Image from "next/image";
import Coffee from "../../../assets/coffee.jpg";

export default function Menu() {
  return (
    <>
      <div className="w-full items-center justify-center ">
        <div className="w-full py-2 text-center text-4xl font-bold ">
          <h1>Menu</h1>
        </div>
        <div
          id="cardsContainer"
          className="m-auto w-3/5 items-center *:text-center"
        >
          <Card
            variant="outlined"
            className="flex flex-wrap items-center py-2 *:m-auto hover:bg-[#e7d1b6]"
          >
            <Image
              alt="coffee"
              height="100"
              src={Coffee}
              className="rounded-md"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A classic cup of medium-roast coffee. <br />
                Also available in decaf.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography>$2.00</Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            className="flex flex-wrap items-center py-2 *:m-auto hover:bg-[#e7d1b6]"
          >
            <Image
              alt="coffee"
              height="100"
              src={Coffee}
              className="rounded-md"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A classic cup of medium-roast coffee. <br />
                Also available in decaf.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography>$2.00</Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            className="flex flex-wrap items-center py-2 *:m-auto hover:bg-[#e7d1b6]"
          >
            <Image
              alt="coffee"
              height="100"
              src={Coffee}
              className="rounded-md"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A classic cup of medium-roast coffee. <br />
                Also available in decaf.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography>$2.00</Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            className="flex flex-wrap items-center py-2 *:m-auto hover:bg-[#e7d1b6]"
          >
            <Image
              alt="coffee"
              height="100"
              src={Coffee}
              className="rounded-md"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A classic cup of medium-roast coffee. <br />
                Also available in decaf.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography>$2.00</Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            className="flex flex-wrap items-center py-2 *:m-auto hover:bg-[#e7d1b6]"
          >
            <Image
              alt="coffee"
              height="100"
              src={Coffee}
              className="rounded-md"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A classic cup of medium-roast coffee. <br />
                Also available in decaf.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography>$2.00</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
