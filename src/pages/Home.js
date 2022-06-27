import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    // exercises is home page data to be passed to Exercises component
    const [exercises, setExercises] = useState([]);
    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
            <Exercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises} />
        </Box>
    )
}

export default Home