import { useEffect, useState } from 'react';
import Places from './Places';
import ErrorPage from './ErrorPage';
import { sortPlacesByDistance } from '../loc';
import { fetchAvailPlaces } from '../http';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetchState, setIsFetchState] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState<any[]>([]);
  const [errorState, setErrorState] = useState<unknown>();

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsFetchState(true);
      try {
        const places = await fetchAvailPlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places.places,
            position.coords.latitude,
            position.coords.longitude,
          )
          setAvailablePlaces(sortedPlaces);
          setIsFetchState(false);
        })
      }
      catch (err) { setErrorState({message: err.message || 'Could not fetch data'}); }
      // finally { setIsFetchState(false); }
    }

    fetchPlaces();
  }, [])

  if (errorState) {
    return <ErrorPage title="An error occured" message={errorState.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetchState}
      loadingFallbackText="fetching data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
