import React, { useContext, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { ReminderContext } from '../contexts/ReminderContext';

export default function InputPanel() {

    const reminderContext = useContext(ReminderContext);

    const [title, setTitle] = useState("");

    const handleOnClick = () => {
        reminderContext.addTask(title);
        setTitle("");
    }

    return (
        <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item>
                <TextField
                    size="small"
                    id="outlined-basic"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Todo"
                    variant="outlined"
                />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    size="medium"
                    onClick={handleOnClick}
                >
                    Add
                </Button>
            </Grid>


        </Grid>
    )
}