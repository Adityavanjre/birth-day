import { useState } from 'react'
import data from './data'
import List from './List.jsx'

const App = () => {
  const [person, setPerson] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>{person.length} birthdays</h3>
        <List persons={person} />
        <button
          className="btn btn-block"
          type="button"
          onClick={() => setPerson([])}
        >
          Clear
        </button>
      </section>
    </main>
  )
}
export default App
