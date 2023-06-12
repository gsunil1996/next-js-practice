import React from 'react';
import classes from "./button.module.css";
import Link from 'next/link';

const Button = (props) => {
    if (props.link) {
        return (
            <div>
                <Link className={classes.btn} href={props.link} >{props.children}</Link>
            </div>
        )
    }
    return <button className={classes.btn} onClick={props.onClick} >{props.children}</button>
}

export default Button