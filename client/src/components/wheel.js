import React, { Component } from "react";
import WheelComponent from 'react-wheel-of-prizes'
//import 'react-wheel-of-prizes/dist/index.css'
// This will require to npm install axios
import axios from 'axios';
 
export default class Wheel extends Component {
  // This is the constructor that stores the data.
 
 
  // This following section will display the form that takes the input from the user.
  render() {
    const segments = [
        'Andreea',
        'Claudia',
        'Laura',
        'Geta',
        'Bety',
        'Rares',
        'Bibi',
        'David',
        'Andrei',
        'Gabriel',
        'Leo'
      ]
      const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000',
        '#FF6AD4',
        '#6AFAFF',
        '#AFD600',
        '#C70039',
        '#D6005B',
      ]
      const onFinished = (winner) => {
        console.log(winner)
      }
    
    return (
        <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        size={250}
        upDuration={100}
        downDuration={1000}
        fontFamily='Arial'
      />
    );
  }
}