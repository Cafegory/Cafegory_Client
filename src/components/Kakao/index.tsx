// import React, { useEffect } from 'react';
// import { Map } from './Kakao.style';
// import axios from 'axios';

// // @ts-ignore
// const { kakao } = window;

// const Kakao: React.FC<{ addresses: string[] }> = ({ addresses }) => {
//   useEffect(() => {
//     mapscript();
//   });
//   const REACT_APP_MAP_REST_API_KEY = process.env.REACT_APP_MAP_REST_API_KEY;
//   console.log(REACT_APP_MAP_REST_API_KEY);

//   const mapscript = () => {
//     let container = document.getElementById('map');
//     let options = {
//       center: new kakao.maps.LatLng(37.5, 127.02),
//       level: 9,
//     };
//     const map = new kakao.maps.Map(container, options);
//     let bounds = new kakao.maps.LatLngBounds();
//     addresses.forEach((address) => {
//       axios
//         .get(`https://dapi.kakao.com/v2/local/search/address.json`, {
//           headers: {
//             Authorization: `KakaoAK ${REACT_APP_MAP_REST_API_KEY}`,
//           },
//           params: {
//             query: address,
//           },
//         })
//         .then((response) => {
//           const result = response.data.documents[0];
//           if (result && result.y !== undefined && result.x !== undefined) {
//             const latlng = new kakao.maps.LatLng(result.y, result.x);
//             new kakao.maps.Marker({
//               map: map,
//               position: latlng,
//             });

//             bounds.extend(latlng);
//             map.setBounds(bounds);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     });
//   };

//   return <Map id="map"></Map>;
// };

import React, { useEffect } from 'react';
import { Map } from './Kakao.style';
import axios from 'axios';

// @ts-ignore
const { kakao } = window;

const Kakao: React.FC<{ addresses: string[] }> = ({ addresses }) => {
  console.log('받은 주소' + addresses);
  useEffect(() => {
    mapscript();
  }, [addresses]);
  const REACT_APP_MAP_REST_API_KEY = process.env.REACT_APP_MAP_REST_API_KEY;

  const mapscript = () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.5, 127.02),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);
    let bounds = new kakao.maps.LatLngBounds();
    addresses.forEach((address) => {
      axios
        .get(`https://dapi.kakao.com/v2/local/search/address.json`, {
          headers: {
            Authorization: `KakaoAK ${REACT_APP_MAP_REST_API_KEY}`,
          },
          params: {
            query: address,
          },
        })
        .then((response) => {
          const result = response.data.documents[0];
          if (result && result.y !== undefined && result.x !== undefined) {
            const latlng = new kakao.maps.LatLng(result.y, result.x);
            new kakao.maps.Marker({
              map: map,
              position: latlng,
            });

            bounds.extend(latlng);
            map.setBounds(bounds);
          }
          console.log('카카오 성공');
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return <Map id="map"></Map>;
};

export default Kakao;
