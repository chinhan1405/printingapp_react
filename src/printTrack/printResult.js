import React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardActions, CardHeader, CardMedia } from '@mui/material';
export default function MyDialog(open, handleClose) {
    return(
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            Xóa yêu cầu in
          </DialogTitle>
          <DialogContent>
            Bạn muốn xóa lệnh in này?
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose}>Đồng ý</Button>
            <Button onClick = {handleClose}>Hủy</Button>
          </DialogActions>
         
        </Dialog>
    );
}

function popupContent(document){
    return(
    <Box sx={{ display: 'flex', flexDirection: 'row'}} >
      <imgage
        component="img"
        sx={{ width: 151 }}
        image={document.ava}
        alt="Document"
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
        <Box sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography component="h5" variant="h5">
              Tài liệu: {document.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Số trang in: {document.pages}
            </Typography>
          </Box>
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Thời gian in: hh:mm:ss DD/MM/YYYY
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Tình trạng: {document.state}
            </Typography>
            
          </Box>
        </Box>
        
      </Box>
    </Box>
    );
}