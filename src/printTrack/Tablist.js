import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import MyDialog from './printResult';

import { Button, CardActions, CardHeader, CardMedia } from '@mui/material';

export default function TrackTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Tab for track printing" centered>
            <Tab label="Đang đợi" value="1" />
            <Tab label="Đang in" value="2" />
            <Tab label="Đã in xong - Chờ nhận" value="3" />
            <Tab label="Hoàn tất" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {
            waitingDoc.map(doc => (
              <OrderCard document = {doc}/>
            ))
          }
        </TabPanel>
        <TabPanel value="2">
          {
            printingDoc.map(doc => (
              <OrderCard document = {doc}/>
            ))
          }
          
        </TabPanel>
        <TabPanel value="3">
          {
            readyDoc.map(doc => (
              <OrderCard document = {doc}/>
            ))
          }
        </TabPanel>
          
        <TabPanel value="4">
          {
            completedDoc.map(doc => (
              <OrderCard document = {doc}/>
            ))
          }
        </TabPanel>
      </TabContext>
    </Box>
  );
}

function OrderCard({document}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };


  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Card sx={{ display: 'flex', flexDirection: 'row', border: '2px solid #5DADE2'}} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: hover ? 'lightgray' : 'white' }}
    >
      <CardMedia 
        component="img"
        sx={{ width: 151 }}
        image={document.ava}
        alt="Document"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'row' }}>
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
              Thời gian in: {document.printStart}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Tình trạng: {document.state}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Máy in: {document.printer}
            </Typography>
            
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          {
          document.state == "Đang đợi" ? <Button size="small" onClick =  {handleClickOpen}>Hủy</Button> : null
          }
        </Box>
      </Box>
    </Card>
    <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Xác nhận xóa lệnh"}
        </DialogTitle>
        <DialogContent>
          Bạn chắc chắn muốn xóa yêu cầu này?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đồng ý</Button>
          <Button onClick={handleClose} autoFocus>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}




var waitingDoc = [
  {
    "name" : "document1",
    "date" : "2015-01-01 00:00:00",
    "pages" : 10,
    "ava" : "img/fileAva/img1.png",
    "state": "Đang đợi",
    "printStart": null, 
    "printer": "Máy in 1"
  },
  {
    "name" : "document5",
    "date" : "2015-01-01 00:00:00",
    "pages" : 102,
    "ava" : "img/fileAva/img5.png",
    "state": "Đang đợi",
    "printStart": null, 
    "printer": "Máy in 1"
  },
  {
    "name" : "document7",
    "date" : "2015-01-01 00:00:00",
    "pages" : 102,
    "ava" : "img/fileAva/img7.png",
    "state": "Đang đợi",
    "printStart": null, 
    "printer": "Máy in 1" 
  }
]
var printingDoc = [
  {
    "name" : "document2",
    "date" : "2015-01-01 00:00:00",
    "pages" : 102,
    "ava" : "img/fileAva/img2.png",
    "state": "Đang in",
    "printStart": "2023-11-16 00:00:00", 
    "printer": "Máy in 1"

  }
]

var readyDoc = [
  {
    "name" : "documen 4",
    "date" : "2015-01-01 00:00:00",
    "pages" : 10123,
    "ava" : "img/fileAva/img4.png",
    "state": "Đã in xong",
    "printStart": "2023-11-16 15:20:00",
    "printer": "Máy in 1"

  },
  {
    "name" : "document6",
    "date" : "2015-01-01 00:00:00",
    "pages" : 10123,
    "ava" : "img/fileAva/img6.png",
    "state": "Đã in xong",
    "printStart": "2023-11-16 00:00:00", 
    "printer": "Máy in 1"

  }
]

var completedDoc = [
  
  {
      "name" : "document8",
      "date" : "2015-01-01 00:00:00",
      "pages" : 10123,
      "ava" : "img/fileAva/img8.png",
      "state": "Đã xác nhận",
      "printStart": "2023-11-12 00:00:00", 
      "printer": "Máy in 2"
  },
  {
      "name" : "document9",
      "date" : "2015-01-01 00:00:00",
      "pages" : 102,
      "ava" : "img/fileAva/img9.png",
      "state": "Đã xác nhận",
      "printStart": "2023-11-10 00:00:00", 
      "printer": "Máy in 2"
  },
  {
      "name" : "document10",
      "date" : "2015-01-01 00:00:00",
      "pages" : 10123,
      "ava" : "img/fileAva/img10.png",
      "state": "Đã xác nhận",
      "printStart": "2023-11-10 00:00:00", 
      "printer": "Máy in 1"
  },

  {
      "name" : "document14",
      "date" : "2015-01-01 00:00:00",
      "pages" : 10123,
      "ava" : "img/fileAva/img14.png",
      "state": "Đã xác nhận",
      "printStart": "2023-11-10 00:00:00"
  },
  {
      "name" : "document3",
      "date" : "2015-01-01 00:00:00",
      "pages" : 10141,
      "ava" : "img/fileAva/img3.png",
      "state": "Đã xác nhận",
      "printStart": "2023-11-10 00:00:00", 
      "printer": "Máy in 3"
  }
]