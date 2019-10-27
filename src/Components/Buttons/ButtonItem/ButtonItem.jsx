import React from 'react'
import { Button } from '@material-ui/core'

const ButtonItem = ({ buttonName, onClick }) => {
    return (
        <Button onClick={onClick}>{buttonName}</Button>
    )
}

export default ButtonItem