import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// custom
import { useCart } from '../../contexts/CartContextProvider';
import { Button, TextField, Typography } from '@mui/material';

export default function Cart() {
    const { getCart, cart } = useCart();

    React.useEffect(() => {
        getCart();
    }, []);

    function cartCleaner(){
        localStorage.removeItem('cart');
        getCart();
    };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">Sub Price</TableCell>
            <TableCell align="center">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <img src={row.item.picture} alt="" width="50" />
              </TableCell>
              <TableCell align="center">
                  {row.item.name}
              </TableCell>
              <TableCell align="center">
                  {row.item.type}
              </TableCell>
              <TableCell align="center">
                  {row.item.price}
              </TableCell>
              <TableCell align="center">
                  <TextField type="number" value={row.count} />
              </TableCell>
              <TableCell align="center">
                  {row.subPrice}
              </TableCell>
              <TableCell align="center">
                  <button>Delete From Cart</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" component="div">
          Total Price: {cart?.totalPrice}
          <Button onClick={cartCleaner}>BUY NOW</Button>
      </Typography>
    </TableContainer>
  );
}