import { useEffect } from 'react';

const LocationMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBszY7kXkOy3xTIQLexO_ZQY_tmDUjH0oc&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            console.log('User Location:', userLocation);

            // Fetch nearby places (in this example, we're just logging them to the console)
            const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));

            placesService.nearbySearch(
              {
                location: userLocation,
                radius: 500, // You can adjust the radius as needed
              },
              (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                  console.log('Nearby Places:', results);
                } else {
                  console.error('Error fetching nearby places:', status);
                }
              }
            );
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div style={{ height: '400px', width: '100%' }} />;
};

export default LocationMap;
