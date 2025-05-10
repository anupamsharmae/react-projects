
import './App.css'
import Accordion from './components/accordion/accordion';
import SearchableList from './components/searchable-list/searchable-list';
import { PLACES } from './constants/places';
import Place from './place';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title className="accordion-item-title" id="experience">We got 20 years of experience</Accordion.Title>
            <Accordion.Content id="experience" className="accordion-item-content">
              <article>
                <p>You can't go wrong with us.</p>
                <p>We are in the business of planning highly individualized vacation trips for more than 20 years</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="accordion-item">
            <Accordion.Title id="guides" className="accordion-item-title">We're working with local guides</Accordion.Title>
            <Accordion.Content id="guides" className="accordion-item-content">
              <article>
                <p>We are not doing this along from our office.</p>
                <p>Instead, we are working with local guides to ensure a safe and a pleasant vacation.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <h2>Searchable list</h2>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={['item1', 'item2']} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  )
}

export default App
