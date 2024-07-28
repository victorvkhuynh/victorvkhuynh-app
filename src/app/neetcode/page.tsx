import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function NeetCode() {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow className="*:text-xl">
            <TableCell>Problem</TableCell>
            <TableCell>Completion</TableCell>
            <TableCell>Thoughts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Contains Duplicate</TableCell>
            <TableCell>2024/07/25</TableCell>
            <TableCell>
              Easy, initially had nlog(n) solution but ended up solving using a
              hash set
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Is Anagram</TableCell>
            <TableCell>2024/07/25</TableCell>
            <TableCell>Easy, solved using hashmap</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Two Integer Sum</TableCell>
            <TableCell>2024/07/25</TableCell>
            <TableCell>
              Meh, had to look at solution since I went with the typical N
              squared solution, complement was a clever idea
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Anagram Groups</TableCell>
            <TableCell>2024/07/26</TableCell>
            <TableCell>
              Bad, actually had no idea how to solve this, had initially thought
              about using multiple hashmaps but didn&apos;t really work out the
              way I hoped - struggled with pushing to the array with new values
              and checking it
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Top K Elements in List</TableCell>
            <TableCell>2024/07/27</TableCell>
            <TableCell>
              Meh, I had the right idea but couldn&apos;t quite get the logic
              working... the provided solution was much more elegant
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>String Encode and Decode</TableCell>
            <TableCell>2024/07/27</TableCell>
            <TableCell>
              Bad, had no idea how to solve this with special characters
              involved and without an external array, although I feel like I
              should have been able to think that I had to make the encode the
              external array I needed... smh
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Products of Array Discluding Self</TableCell>
            <TableCell>2024/07/27</TableCell>
            <TableCell>
              Meh, I solved it with the division and hashmap strategy, but could
              not come up with a O(n) solution and had to learn from the
              solution
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
