import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {

    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p='20px'>
            <Typography variant='h4' mb='33px'> Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
                {name}</span> exercise videos</Typography>

            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems='center'
                sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }} >
                {/* question mark is make sure that the video is not loading before the video is rendered */}
                {exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a key={index} className='exercise-video'
                        href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='blank'
                        rel='noreferrer'>
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant='h6' color='#000'>{item.video.title}</Typography>
                        </Box>
                    </a>
                ))}

            </Stack>
        </Box>
    )
}

export default ExerciseVideos