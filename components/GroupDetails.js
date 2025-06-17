import {
    Box,
    Grid,
    MenuItem,
    TextField,
    Typography
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Group name is required'),
  countryOfOrigin: yup
    .string()
    .required('Country of origin is required'),
  groupType: yup
    .string()
    .required('Group type is required'),
  adults: yup
    .number()
    .min(1, 'Must have at least 1 adult')
    .required('Number of adults is required'),
  children: yup
    .number()
    .min(0, 'Cannot be negative')
    .required('Number of children is required'),
});

const GroupDetails = ({ data, onDataChange }) => {
  const formik = useFormik({
    initialValues: {
      name: data.name || '',
      countryOfOrigin: data.countryOfOrigin || '',
      groupType: data.groupType || '',
      adults: data.adults || 0,
      children: data.children || 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onDataChange(values);
    },
  });

  const handleChange = (e) => {
    formik.handleChange(e);
    // Also update parent component on each change
    onDataChange({
      ...formik.values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Group Information
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Group Name"
            value={formik.values.name}
            onChange={handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="countryOfOrigin"
            name="countryOfOrigin"
            label="Country of Origin"
            value={formik.values.countryOfOrigin}
            onChange={handleChange}
            error={formik.touched.countryOfOrigin && Boolean(formik.errors.countryOfOrigin)}
            helperText={formik.touched.countryOfOrigin && formik.errors.countryOfOrigin}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="groupType"
            name="groupType"
            select
            label="Group Type"
            value={formik.values.groupType}
            onChange={handleChange}
            error={formik.touched.groupType && Boolean(formik.errors.groupType)}
            helperText={formik.touched.groupType && formik.errors.groupType}
          >
            <MenuItem value="FIT">FIT (Less than 10 passengers)</MenuItem>
            <MenuItem value="GIT">GIT (35 or more passengers)</MenuItem>
            <MenuItem value="Transit">Transit</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="adults"
            name="adults"
            type="number"
            label="Number of Adults"
            value={formik.values.adults}
            onChange={handleChange}
            error={formik.touched.adults && Boolean(formik.errors.adults)}
            helperText={formik.touched.adults && formik.errors.adults}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="children"
            name="children"
            type="number"
            label="Number of Children"
            value={formik.values.children}
            onChange={handleChange}
            error={formik.touched.children && Boolean(formik.errors.children)}
            helperText={formik.touched.children && formik.errors.children}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GroupDetails;
