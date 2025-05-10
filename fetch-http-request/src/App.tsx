import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places';
import Modal from './components/Modal';
import DeleteConfirmation from './components/DeleteConfirmation';
import logoImg from '/src/assets/react.svg';
import AvailablePlaces from './components/AvailablePlaces';
import { fetchUserPlaces, updateUserPlaces } from './http';
import ErrorPage from './components/ErrorPage';

function App() {
  const selectedPlace = useRef('');

  const [userPlaces, setUserPlaces] = useState([]);
  const [isFetchState, setIsFetchState] = useState(false);
  const [errorState, setErrorState] = useState<unknown>();

  const [errorUpdatingPlace, setErrorUpdatingPlace] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    const fetchPlaces = async () => {
      setIsFetchState(true)
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places)
      } catch (error) {
        setErrorState({ message: error.message || 'Failed to fetch the user places' })
      }
      setIsFetchState(false);
    }
    fetchPlaces();
  }, [])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces])
    } catch (err) {
      setErrorUpdatingPlace({ message: err.message || 'Failed to set the places' })
      setTimeout(() => {
        setUserPlaces(userPlaces);
      }, 1000);
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id))
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlace({
        message: error.message || 'Failed to delete place'
      })
    }

    setModalIsOpen(false);
  }, []);

  function handleError() {
    setErrorUpdatingPlace(null);
  }

  return (
    <>
      <Modal open={errorUpdatingPlace} onClose={handleError}>
        {errorUpdatingPlace && (
          <ErrorPage
            title="An error occured!"
            message={errorUpdatingPlace.message}
            onConfirm={handleError}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {errorState && <ErrorPage title="An error occured!!" message={errorState.message} />}
        {!errorState && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            isLoading={isFetchState}
            loadingFallbackText="Fetching your places ...."
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
