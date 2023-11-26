// import React from "react";

// const CarouselCard = ({ card }) => {
//     return (
//         <>
//             <div
//                 key={card.id}
//                 className="group mr-14 relative h-[25rem] w-[25rem] overflow-hidden bg-neutral-200"
//             >
//                 <div
//                     style={{
//                         width: "100%", // Set the width to 100% of the container
//                         height: "100%", // Set the height to 100% of the container
//                     }}
//                     className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//                 >
//                     <img
//                         src={card.url}
//                         alt={card.title}
//                         style={{
//                             width: "100%", // Set the width to 100% of the container
//                             height: "100%", // Set the height to 100% of the container
//                             objectFit: "cover", // Ensure the image covers the container
//                         }}
//                     />
//                 </div>
//                 <div className="absolute inset-0 z-10 grid place-content-center">
//                     <p className="p-8 text-3xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-sm">
//                         {card.title}
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CarouselCard


// import React from "react";
// import "./Carousel.css"; // Import your CSS file for styling

// const CarouselCard = ({ card }) => {
//   const cardStyle = {
//     width: "100%",
//     height: "100%",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   };

//   return (
//     <div className="carousel-card group mr-14 relative h-[25rem] w-[25rem] overflow-hidden bg-neutral-200">
//       <div style={cardStyle} className="absolute inset-0 z-0 transition-transform duration-300 hover:scale-110">
//         <img src={card.url} alt={card.title} style={imageStyle} />
//       </div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="p-8 text-3xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-sm">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CarouselCard;



// import React from "react";
// import "./Carousel.css"; // Import your CSS file for styling

// const CarouselCard = ({ card }) => {
//   return (
//     <div className="carousel-card group mr-14 relative overflow-hidden bg-neutral-200">
//       <div className="transition-transform">
//         <img className="w-full h-full" src={card.url} alt={card.title} />
//       </div>
//       <div className="grid">
//         <p>{card.title}</p>
//       </div>
//     </div>
//   );
// };

// export default CarouselCard;


const Card = ({ card }) => {
  return (
    <>
      <div
        key={card.id}
        className="group mr-14 relative h-[25rem] w-[25rem] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            width: "100%", 
            height: "100%",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        >
          <img
            src={card.url}
            alt={card.title}
            style={{
              width: "100%", 
              height: "100%",
              objectFit: "cover", 
            }}
          />
        </div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="p-8 text-3xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-sm">
            {card.title}
          </p>
        </div>
      </div>
    </>
  );
};


export default Card;