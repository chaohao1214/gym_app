import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
// data props get passed in as an object

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    //key is required for react to know which element to update
                    //itemID is the id of the item in the database
                    // title is the title of the item
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m='0 40px'>
                    <BodyPart item={item} bodyPart={bodyPart}
                        setBodyPart={setBodyPart} />

                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;