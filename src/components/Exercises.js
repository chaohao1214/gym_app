import React, { useEffect, useState } from 'react';
import { Pagination, Box, Stack, Typography } from '@mui/material';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from '../components/ExerciseCard';
import { getValue } from '@testing-library/user-event/dist/utils';

const Exercises = ({ setExercises, bodyPart, exercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisePerPage = 9;

    const paginate = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
    return (
        <Box id='exercises'
            sx={{ mt: { lg: '1100px' } }}
            mt='50px'
            p='20px'>
            <Typography variant='h3' mb='46px'>Showing Results</Typography>
            <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }}
                flexWrap='wrap' justifyContent="center">
                {exercises.map((exercise, index) => (
                    // exercise is an object with the exercise data
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack ml='100px' alignItems='center'>
                {exercises.length > 9 && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        count={Math.ceil(exercises.length / exercisePerPage)}
                        //current page is the page number
                        page={currentPage}
                        onChange={paginate}
                        size='large'
                    />
                )}

            </Stack>
        </Box>
    )
}

export default Exercises