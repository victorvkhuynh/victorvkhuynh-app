import Link from "next/link";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Projects() {
  return (
    <>
      <TableContainer className="m-auto my-2 flex w-full md:w-3/4">
        <Table>
          <TableHead>
            <TableRow className="*:bg-primarylighter *:text-xl *:dark:bg-primarydark *:dark:text-primarylighter">
              <TableCell>Projects</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="*:text-lg *:dark:bg-secondarydark *:dark:text-primarylighter">
              <TableCell>Liar&apos;s Dice</TableCell>
              <TableCell>
                My multiplayer take on the popular deception game
              </TableCell>
              <TableCell>
                <Link className="text-progress" href="/liars-dice">
                  In Progress
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="*:text-lg *:dark:bg-secondarydark *:dark:text-primarylighter">
              <TableCell>Flatflat</TableCell>
              <TableCell>
                My multiplayer take on a DDR game, inspired by MapleStory
              </TableCell>
              <TableCell>
                <span className="text-error"> Not Started</span>
              </TableCell>
            </TableRow>
            <TableRow className="*:text-lg *:dark:bg-secondarydark *:dark:text-primarylighter">
              <TableCell>Neetcode</TableCell>
              <TableCell>
                This is for tracking progress on Neetcode problems
              </TableCell>
              <TableCell>
                <span className="text-error">Not Started</span>
              </TableCell>
            </TableRow>
            <TableRow className="*:text-lg *:dark:bg-secondarydark *:dark:text-primarylighter">
              <TableCell>Restaurant Website</TableCell>
              <TableCell>
                Need a website? Send me an e-mail and we can have a chat!
              </TableCell>
              <TableCell>
                <Link href="/restaurant-poc1" className="text-progress">
                  In Progress
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
