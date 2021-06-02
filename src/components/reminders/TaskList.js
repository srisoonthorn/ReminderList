import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteButton from '../common/FavoriteButton';
import { ReminderContext } from '../contexts/ReminderContext';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TaskList() {
    const { tasks, handleChecked } = useContext(ReminderContext);
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const [favorite, setFavorite] = React.useState([0]);


    const handleToggle = (value) => () => {
        const currentIndex = tasks.indexOf(value);
        const newChecked = [...tasks];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleToggleFavorite = (value) => () => {
        const currentIndex = favorite.indexOf(value);
        const newChecked = [...favorite];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setFavorite(newChecked);
    };

    return (
        <List className={classes.root}>
            {tasks.map((value, index) => {
                const labelId = `checkbox-list-label-${index}`;

                return (
                    <ListItem key={index} role={undefined} dense button>
                        <ListItemIcon style={{ alignItems: "center" }}>
                            <Checkbox
                                edge="start"
                                checked={value.isChecked}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                                onClick={handleChecked(value)}
                            />
                            <FavoriteButton
                                onClick={handleToggleFavorite(value)}
                                checked={value.isFavorited}
                            />
                        </ListItemIcon>

                        <ListItemText id={labelId} primary={` ${value.title}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="comments">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}