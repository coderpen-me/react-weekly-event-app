import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { fade, makeStyles } from '@material-ui/core/styles';


export default function ToggleButtons() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const useStyles = makeStyles({
        root: {
            boxSizing: 'border-box',
            //paddingRight: '5%',
            //paddingLeft: '5%', 
            borderRadius: 8,
            textTransform: 'none',
            padding: '5px 10px',
            border: `0px solid ${fade('#fff', 0.12)}`,
            color: fade('#000', 1),
            backgroundColor: fade('#fff', 1),
            '@media (min-width : 768px)': {
                padding: '10px 20px',
            },
            "&.Mui-selected": {
                color: '#fff',
                backgroundColor: fade('#fcb613', 1),
                '&:hover': {
                    backgroundColor: fade('#fcb613', 1),
                },
            },
            '&.Mui-disabled': {
                color: '#000',
                backgroundColor: fade('#fcb613', 1),
                '&:hover': {
                    backgroundColor: fade('#fcb613', 1),
                },
            },
            "&:hover": {
                textDecoration: 'none',
                // Reset on mouse devices
                backgroundColor: fade('#fcb613', 1),
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
                '&$disabled': {
                    backgroundColor: 'transparent',
                },
            },
            "&:focus": {
                outline : '0px',
                border : '0px',
            },
        },
        disabled: false,
        selected: true,
    });

    const classes = useStyles();

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            size="large"
        >
            <ToggleButton value="left"
                classes={{
                    root: classes.root, // class name, e.g. `root-x`
                    disabled: classes.disabled,
                }}
            >
                Week
            </ToggleButton>
            <ToggleButton value="center"
                classes={{
                    root: classes.root, // class name, e.g. `root-x`
                    disabled: classes.disabled,
                }}
            >
                Month
            </ToggleButton>
        </ToggleButtonGroup>
    );
}