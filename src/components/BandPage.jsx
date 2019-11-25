import React from 'react'
import data from './data/bands.json'

const BandPage = props => {
  const bands = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]
  return (
    <div className={props.match.params.category}>
      {bands.albums.map(band => {
        return (
          <div>
            <header className='names'>{band.title}</header>
            <img src={band.image} alt='' />
            <p>{band.info}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BandPage
