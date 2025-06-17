import {
    Box,
    Button,
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bookingAPI } from '../services/api';
import BookingSummary from '../steps/BookingSummary';
import HotelSchedule from '../steps/HotelSchedule';
import MealPreferences from '../steps/MealPreferences';
import GroupDetails from './GroupDetails';

const steps = [
  'Group Details',
  'Hotel & Schedule',
  'Meal Preferences',
  'Booking Summary'
];

const CreateBooking = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    group: {
      name: '',
      countryOfOrigin: '',
      groupType: '',
      adults: 0,
      children: 0
    },
    hotels: [{
      city: '',
      distanceFromMosque: '',
      checkIn: null,
      checkOut: null,
      serviceStartDate: null,
      serviceEndDate: null
    }],
    mealPlan: {
      type: '',
      serviceType: '',
      cuisine: {
        country: '',
        state: ''
      }
    }
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleStepDataChange = (step, data) => {
    setBookingData(prev => ({
      ...prev,
      ...data
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await bookingAPI.createBooking(bookingData);
      toast.success('Booking created successfully!');
      navigate('/booking/' + response.data.id);
    } catch (error) {
      toast.error('Failed to create booking. Please try again.');
      console.error('Booking creation error:', error);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <GroupDetails 
            data={bookingData.group} 
            onDataChange={(data) => handleStepDataChange('group', data)} 
          />
        );
      case 1:
        return (
          <HotelSchedule 
            data={bookingData.hotels} 
            onDataChange={(data) => handleStepDataChange('hotels', data)} 
          />
        );
      case 2:
        return (
          <MealPreferences 
            data={bookingData.mealPlan} 
            onDataChange={(data) => handleStepDataChange('mealPlan', data)} 
          />
        );
      case 3:
        return <BookingSummary data={bookingData} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Create New Booking
        </Typography>
        
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 2, mb: 2 }}>
          {getStepContent(activeStep)}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              color="primary"
            >
              Submit Booking
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              color="primary"
            >
              Next
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default CreateBooking;
