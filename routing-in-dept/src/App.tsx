import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import EventsPage from './Pages/EventsPage'
import EventDetailPage from './Pages/EventDetailPage'
import NewEventPage from './Pages/NewEventPage'
import EditEventPage from './Pages/EditEventPage'
import RoutLayoutPage from './Pages/RoutLayout'
import EventRoutLayout from './Pages/EventRoutLayout'
import ErrorPage from './Pages/ErrorPage'
import { eventDetailsloader, deferEventsloader, deferEventGroupLoader } from './Router/loaders'
import { newEventAction, newsletterAction, deleteEventAction } from './Router/router-actions';
import NewsletterPage from './Pages/NewsletterPage'

const routes = createBrowserRouter([
  {
    path: '',
    element: <RoutLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventRoutLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: deferEventsloader },
          {
            path: ':eventId',
            id: 'event-details',
            loader: deferEventGroupLoader, // shared ;loader function
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: 'edit', element: <EditEventPage />, action: newEventAction },
            ]
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
