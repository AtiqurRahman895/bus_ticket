"use server";
import React from 'react'

function ChangeTimeTo12HourFormat(inputTimeValue) {

    const time = new Date(`2000-01-01T${inputTimeValue}:00`);

    // Get hours, minutes, and seconds
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // Convert hours to 12-hour format
    const amPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; // Ensure 12-hour format

    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    // Construct the formatted time
    const formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;


    return formattedTime;
};


export default ChangeTimeTo12HourFormat;