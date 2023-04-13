// import React, { Component } from 'react';
// import { Map, Marker, InfoWindow } from 'google-maps-react';

// class GoogleReviews extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviews: [],
//       isLoading: true,
//     };
//   }

//   componentDidMount() {
//     const placeId = 'your_place_id'; // replace with your business place ID
//     fetch(`https://maps.googleapis.com/maps/api/place/details/json?key=YOUR_API_KEY&place_id=${placeId}&fields=name,rating,reviews`)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           reviews: data.result.reviews,
//           isLoading: false,
//         });
//       })
//       .catch(error => console.error(error));
//   }

//   render() {
//     const { reviews, isLoading } = this.state;

//     if (isLoading) {
//       return <div>Loading reviews...</div>;
//     }

//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         initialCenter={{ lat: 37.7749, lng: -122.4194 }} // replace with your business location
//       >
//         {reviews.map(review => (
//           <Marker
//             key={review.time}
//             position={{ lat: review.author_name, lng: review.author_url }}
//           >
//             <InfoWindow>
//               <div>
//                 <h4>{review.author_name}</h4>
//                 <p>{review.text}</p>
//               </div>
//             </InfoWindow>
//           </Marker>
//         ))}
//       </Map>
//     );
//   }
// }

// export default GoogleReviews;