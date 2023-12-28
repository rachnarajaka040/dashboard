import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Button,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiURL } from '../../constants/constants';

const Datashow = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [paginationInfo, setPaginationInfo] = useState({
    totalDocs: 0,
    limit: 0,
    totalPages: 0,
    page: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null
  });

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`${apiURL.baseURL}/skyTrails/api/getadvertisement?page=${parseInt(page, 10)}`);
      const result = response.data.result;
      setData(result.docs);
      setFilteredData(result.docs);
      setPaginationInfo({
        totalDocs: result.totalDocs,
        limit: result.limit,
        totalPages: result.totalPages,
        page: result.page,
        hasPrevPage: result.hasPrevPage,
        hasNextPage: result.hasNextPage,
        prevPage: result.prevPage,
        nextPage: result.nextPage
      });
    } catch (error) {
      console.log('Error response details:', error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.content.toLowerCase().includes(term) ||
        item.startDate.toLowerCase().includes(term) ||
        item.endDate.toLowerCase().includes(term) ||
        item.remainingDays.toString().toLowerCase().includes(term)
    );

    setFilteredData(filtered);
  };

  const handleStatusChange = (event, id) => {
    const newStatus = event.target.value;
    const updatedData = data.map((item) => (item._id === id ? { ...item, approvalStatus: newStatus } : item));
    setData(updatedData);
  };

  const handlePageChange = (newPage) => {
    fetchData(newPage);
    navigate(`?page=${newPage}`);
  };

  return (
    <div>
    <h4 style={{textAlign:"center", fontSize:"30px"}}>App Adversement Table</h4>
      <TextField label="Search" variant="outlined" onChange={handleSearch} value={searchTerm}  style={{ marginBottom: '16px' }}/>
      <TableContainer component={Paper}>
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
            {filteredData.map((row, index) => (
              <TableRow key={row._id}>
              <TableCell>{index  + paginationInfo.page * paginationInfo.limit - paginationInfo.limit + 1}</TableCell>

                <TableCell>{row.title}</TableCell>
                <TableCell>{row.content}</TableCell>
                <TableCell>{new Date(row.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(row.endDate).toLocaleDateString()}</TableCell>
                <TableCell>
                  <img src={row.image} alt="" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                </TableCell>
                <TableCell>{row.remainingDays}</TableCell>
                <TableCell>
                  <Select
                    value={row.approvalStatus}
                    displayEmpty
                    onChange={(e) => handleStatusChange(e, row._id)}
                    inputProps={{'aria-label': 'Without label' }}
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
      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <Button variant="contained" onClick={() => handlePageChange(paginationInfo.prevPage)} disabled={!paginationInfo.hasPrevPage}>
          Previous Page
        </Button>
        <span style={{ margin: '0 16px' }}>
          Page {paginationInfo.page} of {paginationInfo.totalPages}
        </span>
        <Button variant="contained" onClick={() => handlePageChange(paginationInfo.nextPage)} disabled={!paginationInfo.hasNextPage}>
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default Datashow;
