// Imports
import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";
// Prompt 2
// write a custom hook called useFlip which will hold the business logic for flipping any type of card.useFlip doesn’t need to take an argument, and similar to useState, it should return an array with two elements. The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.

/** useFlip Custom Hook
 * 
 * This custom hook holds the business logic for flipping any type of card.
 * 
 * Parameters: None
 * 
 * Returns an array with two elements:
 * - the current flip state of the card
 * - a function that will toggle the flip state
 */
const useFlip = () => {
    // Set up the state
    const [isFacingUp, setIsFacingUp] = useState(true);
    // Create function that inverts the state
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    // return the state var and state inverting function
    return [isFacingUp, flipCard];
};

// Prompt 3
// useAxios should take in a URL, and similar to useState, it should return an array with two elements. The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array.
// Prompt 4
// Figure out a way to modify your useAxios hook so that when you call useAxios you can just provide a base url, and when you want to add to your array of response data in state, you can provide the rest of the url.

/** useAxios Custom Hook
 * 
 * This custom hook holds the business logic for making AJAX requests.
 * 
 * Parameters:
 * - url: the URL to make the AJAX request to
 * - urlAddition: the rest of the URL to add to the base URL
 * 
 * Returns an array with two elements:
 * - an array of data obtained from previous AJAX requests
 * - a function that will add a new object of data to the array
 */
const useAxios = (url) => {
    // Set Up State
    const [resData, setResData] = useState([]);
    // create function to add data to the state
    const addData = async (route) => {
        // Make AJAX request
        const response = await axios.get(url+route);
        response.data.id = uuid();
        // Add data to the state
        setResData(data => [...data, response.data]);
    };
    // Return the state and function to add to the state
    return [resData, addData];
};

export {useFlip, useAxios};