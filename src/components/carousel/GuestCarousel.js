// FUTURE WORK TODO

// import React from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';
//
// const GuestCarousel = ( props ) => {
//   const slides = props.guestList.map((guest) => {
//     return (
//       <CarouselItem
//         onExiting={ props.onExiting }
//         onExited={ props.onExited }
//         key={ guest.id }
//       >
//         <CarouselCaption captionText={ guest.attendees } captionHeader={ guest.name } />
//       </CarouselItem>
//     )
//   })
//
//   return (
//     <Carousel
//       activeIndex={ props.activeIndex }
//       next={ props.next }
//       prev={ props.prev }
//     >
//       <CarouselIndicators
//         guestList={ props.guestList }
//         activeIndex={ props.activeIndex }
//         onClickHandler={ props.goToIndex }
//       />
//       { slides }
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={ props.prev }
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={ props.next }
//       />
//     </Carousel>
//   );
// }
//
// export default GuestCarousel
