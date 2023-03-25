import './filter.scss'

type Props = {}

const Filter = (props: Props) => {
  return (
    <section className="filterContainer">
      <select name="filter" id="#filter" className='filter'>
        <option value="">classic</option>
        <option value="">new</option>
        <option value="">nobels</option>
      </select>
    </section>
  )
}

export default Filter
