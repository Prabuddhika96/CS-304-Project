import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function BookNow() {
    const [openbook, setOpenbook] = React.useState(false);

    const handleClickOpenBook = () => {
      setOpenbook(true);
    };
  
    const handleCloseBook = () => {
      setOpenbook(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpenBook}>
          Open form dialog
        </Button>
        <Dialog open={openbook} onClose={handleCloseBook}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseBook}>Cancel</Button>
            <Button onClick={handleCloseBook}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default BookNow