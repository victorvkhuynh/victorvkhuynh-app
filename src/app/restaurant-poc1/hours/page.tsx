import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Hours() {
  return (
    <>
      {/* TODO: make it dynamic so it takes current time and highlights the day / shows time till next open */}
      <div className="text-primarylight w-full items-center justify-center">
        <div className="text-center text-4xl font-bold">Hours</div>
        <TableContainer className="m-auto my-2 flex w-1/2" component={Paper}>
          <Table>
            <TableHead className="text-xl">
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell>Hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Sunday</TableCell>
                <TableCell className="font-bold">Closed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Monday</TableCell>
                <TableCell>11:00 AM - 10:00 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tuesday</TableCell>
                <TableCell>11:00 AM - 10:00 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wednesday</TableCell>
                <TableCell>11:00 AM - 10:00 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Thursday</TableCell>
                <TableCell>11:00 AM - 10:00 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Friday</TableCell>
                <TableCell>11:00 AM - 11:00 PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Saturday</TableCell>
                <TableCell className="font-bold">Closed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="text-center text-4xl font-bold">
          Location
          <p>(TODO)</p>
        </div>
        {/* TODO: Google Maps embed */}
      </div>
    </>
  );
}
