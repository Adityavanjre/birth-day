import People from './People'

const List = ({ persons }) => {
  return (
    <section>
      {persons.map((person) => {
        return <People key={person.id} {...person} />
      })}
    </section>
  )
}
export default List
