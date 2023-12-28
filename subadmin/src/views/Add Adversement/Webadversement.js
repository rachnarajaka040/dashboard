
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Addvertise.css';
import { apiURL } from '../../constants/constants';
import { Button, TextField, Typography, Box, Container } from '@mui/material';


function Webadversement() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      remainingDays: '',
      addType: '',
      image: null
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      content: Yup.string().required('Content is required'),
      startDate: Yup.date().required('Start Date is required'),
      endDate: Yup.date().required('End Date is required'),
      remainingDays: Yup.number().required('Remaining Days is required').positive('Remaining Days must be a positive number'),
      addType: Yup.string().required('Add Type is required'),
      image: Yup.mixed().required('Image is required')
      .test('fileSize', 'Image must be 1200x200 pixels', async function (value) {
        if (!value) return true;

        const img = new Image();
        img.src = URL.createObjectURL(value);

        return new Promise((resolve) => {
          img.onload = function () {
            const isValid = img.width === 1200 && img.height === 200;
            resolve(isValid);
          };
        });
      }),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('content', values.content);
        formData.append('startDate', values.startDate);
        formData.append('endDate', values.endDate);
        formData.append('remainingDays', values.remainingDays);
        formData.append('addType', values.addType);

        if (values.image) {
          formData.append('images', values.image);
          console.log('images========', values.image);
        }

        const response = await axios.post(`${apiURL.baseURL}/skyTrails/api/admin/createWebAdvertisment`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        setUploadedImageUrl(response.data.result.image);
        window.location.href = '/';
      } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
      }
    }
  });

  return (
    <>
      <Container component="main" maxWidth="sm">
        <form onSubmit={formik.handleSubmit} className="formacontainer">
          <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: '2rem' }}>
            Web Adversement Form
          </Typography>
          <Box
            mb={2}
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              name="title"
              InputLabelProps={{ shrink: true }}
              placeholder='Enter Title'
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Content"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              placeholder='Enter your Content'
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              error={formik.touched.content && Boolean(formik.errors.content)}
              helperText={formik.touched.content && formik.errors.content}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Add Type"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              placeholder='FLIGHTS, HOTELS, HOLIDAYS, TRAINS, CABS, BANKOFFERS, BUS'
              name="addType"
              value={formik.values.addType}
              onChange={formik.handleChange}
              error={formik.touched.addType && Boolean(formik.errors.addType)}
              helperText={formik.touched.addType && formik.errors.addType}
            />
        
          </Box>
          <Box mb={2}>
            <TextField
              label="Start Date"
              variant="outlined"
              fullWidth
              name="startDate"
              InputLabelProps={{ shrink: true }}
              type="date"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              error={formik.touched.startDate && Boolean(formik.errors.startDate)}
              helperText={formik.touched.startDate && formik.errors.startDate}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="End Date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              name="endDate"
              type="date"
              value={formik.values.endDate}
              onChange={formik.handleChange}
              error={formik.touched.endDate && Boolean(formik.errors.endDate)}
              helperText={formik.touched.endDate && formik.errors.endDate}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Remaining Days"
              variant="outlined"
              fullWidth
              name="remainingDays"
              InputLabelProps={{ shrink: true }}
              type="number"
              value={formik.values.remainingDays}
              onChange={formik.handleChange}
              error={formik.touched.remainingDays && Boolean(formik.errors.remainingDays)}
              helperText={formik.touched.remainingDays && formik.errors.remainingDays}
            />
          </Box>
          <Box mb={2}>
          <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
            />
            {formik.touched.image && formik.errors.image && (
              <Typography variant="caption" color="error">
                {formik.errors.image}
              </Typography>
            )}
          </Box>
          {uploadedImageUrl && (
            <Box mt={2}>
              <img src={uploadedImageUrl} alt="Uploaded" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
            </Box>
          )}
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default Webadversement;
