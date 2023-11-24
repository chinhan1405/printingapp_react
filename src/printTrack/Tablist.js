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
import configs from '../configs/api_config';
import { Button, CardActions, CardHeader, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const moment = require('moment');
export default function TrackTab() {
    const [value, setValue] = React.useState('1');
    const [histories, setHistories] = React.useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    React.useEffect(() => {
        let status = "";
        if (value === "1") {
            status = "inqueue";
        }
        else if (value === "2") {
            status = "printing";
        }
        else if (value === "3") {
            status = "printed";
        }
        else {
            status = "done";
        }
        fetch(configs.baseAPI + configs.getHisByStatusAPI + status)
            .then(response => response.json())
            .then(data => {
                setHistories(data.data);
                
            })
            .catch(error => console.error('Error fetching documents:', error));
        console.log(histories);
    }, [value]);

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
                      histories.map((his) => (
                          <OrderCard key={his._id} history={his} />
                      )
                      )
                  }
              </TabPanel>
              <TabPanel value="2">
                  {
                      histories.map((his) => (
                          <OrderCard key={his._id} history={his} />
                      )
                      )
                  }
              </TabPanel>
              <TabPanel value="3">
                  {
                      histories.map((his) => (
                          <OrderCard key={his._id} history={his} />
                      )
                      )
                  }
              </TabPanel>
              <TabPanel value="4">
                  {
                      histories.map((his) => (
                          <OrderCard key={his._id} history={his} />
                      )
                      )
                  }
              </TabPanel>
      </TabContext>
    </Box>
  );
}

function OrderCard({ history }) {
    const [document, setDocument] = React.useState('')
    const [config, setConfig] = React.useState('')
  const [open, setOpen] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const navigate = useNavigate();
    
  const handleDeleteClick = () => {
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

    const handleDelete = () => {
        fetch(configs.baseAPI + configs.delHisByIdAPI + history._id)
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => console.error('Error fetching documents:', error));

        fetch(configs.baseAPI + configs.getHisByIdAPI)
            .then(response => response.json())
            .then(data => {
                let found_config = data.data.find(obj => obj.config_id === history.config_id)
                if (!found_config) {
                    fetch(configs.baseAPI + configs.delPrtConfigByIdAPI + history.config_id)
                        .then(response => response.json())
                        .then(data => {
                        })
                        .catch(error => console.error('Error fetching documents:', error));
                }
            })
            .catch(error => console.error('Error fetching documents:', error));
        document.status = "ready";
        fetch(configs.baseAPI + configs.updateDocByIdAPI + history.document_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(document),
        })
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => console.error('Error updating document:', error));
        setOpen(false);
        window.location.reload();
    };

  const handleConfirmClick = () => {

    };
    React.useEffect(() => {
        fetch(configs.baseAPI + configs.getAllDocAPI + history.document_id)
            .then(response => response.json())
            .then(doc => {
                setDocument(doc.data);
            })
            .catch(error => console.error('Error fetching documents:', error));
        fetch(configs.baseAPI + configs.getPrtConfigByIdAPI + history.config_id)
            .then(response => response.json())
            .then(data => {
                setConfig(data.data)
            })
            .catch(error => console.error('Error fetching documents:', error));
    }, []);
  return (
    <div>
    <Card sx={{ display: 'flex', flexDirection: 'row', border: '2px solid #5DADE2'}} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: hover ? 'lightgray' : 'white' }}
          onClose={handleConfirmClick}
    >
      <CardMedia 
        component="img"
        sx={{ width: 151 }}
        image={"img/fileAva/img4.png"}
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
              Thời gian in: {moment(history.created_at).format('DD/MM/YYYY')}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                              {history.status === "inqueue" ? <p>Tình trạng: Đang đợi </p> : history.status === "printing" ? <p>Tình trạng: Đang in </p> : history.status === "printed" ? <p>Tình trạng: Chờ xác nhận </p> : <p>Tình trạng: Đã xác nhận</p>}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Máy in: {config.printer}
            </Typography>
            
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          {
                          history.status === "inqueue" ? <Button size="small" id="deleteBtn" onClick =  {handleDeleteClick}>Hủy</Button> : null
          }
          {
                          history.status === "printed"?  <Button size="small" id="confirmBtn" onClick =  {handleConfirmClick}>Xác nhận</Button> : null
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
          <Button onClick={handleDelete}>Đồng ý</Button>
          <Button onClick={handleClose} autoFocus>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}