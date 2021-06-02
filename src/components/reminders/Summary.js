import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ReminderContext } from '../contexts/ReminderContext';

export default function Summary() {
    return (
        <Grid>
            <ReminderContext.Consumer>
                {
                    ({ tasks }) => (
                        <Grid>
                            <Typography>Progress: {tasks.filter(m => m.isChecked).length}/{tasks.length}</Typography>
                            <Typography>Counting Star: {tasks.filter(m => m.isFavorited).length}/{tasks.length}</Typography>
                        </Grid>
                    )
                }

            </ReminderContext.Consumer>
        </Grid>
    )
}