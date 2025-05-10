import './App.css'
import { useCallback, useEffect, useRef, useState } from 'react';
import Modal from './assets/components/modal';
import DeleteConfirmation from './assets/components/deleteConfirm';
import headerLogo from '/src/assets/images/logo.png';
import Places from './assets/components/places';
import { AVAILABLE_PLACES } from './assets/scripts/data';
import { sortPlacesByDistance } from './assets/scripts/loc';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map(id => AVAILABLE_PLACES.find(place => place.id === id));


function App() {
  // const dialogRef = useRef<HTMLDialogElement>(null);
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const selectedPlace = useRef('');
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setavailablePlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude,
      )
      setavailablePlaces(sortedPlaces)
      console.log('---- sorted', sortedPlaces, position);
    })
  }, [])


  const handleConfirm = useCallback(() => {
    setPickedPlaces((prevState) => {
      return prevState.filter(place => place.id !== selectedPlace.current)
    })
    setModelIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    const filteredArr = storedIds.filter(id => id !== selectedPlace.current);
    localStorage.setItem('selectedPlaces', JSON.stringify(filteredArr))
  }, [])

  const handleCancel = () => {
    setModelIsOpen(false);
  }

  const handleSelectPlace = (id: string) => {
    setPickedPlaces((prevState: any) => {
      const prevSelectedId = prevState.some(place => place.id === id);
      if (prevSelectedId) return prevState;

      const place = AVAILABLE_PLACES.find(place => place.id === id);
      return [place, ...prevState];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
    }
  }

  const handleStartRemovePlace = (id: string) => {
    console.log('id------', id);
    setModelIsOpen(true);
    selectedPlace.current = id;
  }

  return (
    <>
      <Modal open={modelIsOpen} onClose={handleCancel}>
        <DeleteConfirmation
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </Modal>

      <header>
        <img src={headerLogo} alt="Styled logo" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or
          you have visited.</p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText="Sorting places by distance..... "
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  )
}

export default App
