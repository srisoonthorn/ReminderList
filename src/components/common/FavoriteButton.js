import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';

export default function FavoriteButton({
    checked = false,
    onClick = () => { },
}) {
    return (
        <div onClick={onClick}>
            {
                checked ?
                    <StarIcon style={{ color: "#f50057" }} />
                    :
                    <StarBorderIcon style={{ color: "gray" }} />

            }
        </div>
    )
}