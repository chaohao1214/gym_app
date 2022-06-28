import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

// data props get passed in as an object 
//bodyPart is the body part, setBodyPart is the function to set the body part
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);



    useEffect(() => {
        // fetchData('/api/bodyParts').then(res => {
        const fetchExercises = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

            setBodyParts(['all', ...bodyPartData]);
        }
        fetchExercises();
        // only render once, not every time the component is rendered
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

            const filteredExercises = exercisesData.filter(exercise =>
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            // after search, clear the search input
            setSearch('');
            setExercises(filteredExercises);
        }

    }
    return (
        <Stack alignItems="center" mt='37px' justifyContent="center" p='20px'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='49px' textAlign='center'>
                Awesome Exercises You <br />should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    height='76px'
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none', borderRadius: '4px'
                        },
                        width: { lg: '1170px', xs: '350px' },
                        backgroundColor: '#fff', borderRadius: '40px'
                    }}
                    value={search}
                    // onChange get the typed value in the search input
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    variant="outlined"
                    placeholder='Search Exercises'
                    type='text' />
                <Button className="search-btn" sx={{
                    bgcolor: '#FF2625',
                    color: '#fff', textTransform: 'none', width:
                        { lg: '173px', xs: '80px' }, height: '56px',
                    position: 'absolute', right: '0px',
                    fontSize: { lg: '20px', xs: '14px' }
                }} onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart}
                    setBodyPart={setBodyPart} isBodyParts />

            </Box>
        </Stack>
    )
}

export default SearchExercises;