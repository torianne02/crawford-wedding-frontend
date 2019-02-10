import React from 'react';
import background from '../images/background.jpg'

console.log(background)

const Home = () => {
  return (
    <div class="background-image">
      <img src={background} alt="Kevin and Tori" />
    </div>
  )
}

export default Home
