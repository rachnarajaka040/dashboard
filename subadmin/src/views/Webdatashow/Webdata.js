
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem
} from '@mui/material';
import axios from 'axios';
import { apiURL } from '../../constants/constants';

const Webdata = () => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiURL.baseURL}/skyTrails/api/user/getWebBanner`);
      const result = response.data.result;
      setData(result);
      setFilteredData(result);
      // console.log(result,"result");
      
    } catch (error) {
      console.log('Error response details:', error.response);
    }
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase(); 
    setSearchTerm(term);
  
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.content.toLowerCase().includes(term)
    );
  
    setFilteredData(filtered);
  };
  const handleStatusChange = (event, id) => {
    const newStatus = event.target.value;
    const updatedData = data.map((item) => (item._id === id ? { ...item, approvalStatus: newStatus } : item));
    setData(updatedData);
  };



  return (
    <div>
    <h4  style={{textAlign:"center", fontSize:"30px"}}>Web Adversement Table</h4>
      <TextField label="Search" variant="outlined" value={searchTerm} onChange={handleSearch} style={{ marginBottom: '16px' }} />

      <TableContainer component={Paper} >
        <Table aria-label="customized table">
          <TableHead style={{ background: '#E25141' }}>
            <TableRow>
            <TableCell>Serial Number</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Images</TableCell>
             <TableCell>Remaining Days</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, key) => (
              <TableRow key={row._id} >
              <TableCell>{key + 1}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.content}</TableCell>
                <TableCell>{new Date(row.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(row.endDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <img src={row.image} alt="" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </TableCell>
                <TableCell>{row.remainigDays}</TableCell>
                
                <TableCell>
                  <Select
                    value={row.approvalStatus}
                    displayEmpty
                    onChange={(e) => handleStatusChange(e, row._id)}
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{ width: '100%' }}
                  >
                    <MenuItem value="" disabled>
                      Select Status
                    </MenuItem>
                    <MenuItem value="APPROVED">Approved</MenuItem>
                    <MenuItem value="PENDING">Pending</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     
    </div>
  );
};

export default Webdata;