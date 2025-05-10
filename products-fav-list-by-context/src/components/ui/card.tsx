import React from 'react';
import classes from './card.module.css';

export default function Card({ style, children }: { style: React.CSSProperties; children: React.ReactNode }) {
   return <div className={classes.card} style={style}> {children} </div>

}