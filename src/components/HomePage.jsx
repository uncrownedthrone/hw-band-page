import React from 'react'

const HomePage = () => {
  return (
    <>
      <section className='header'>
        <h1>My Favorite Bands</h1>
      </section>
      <section className='bandHP'>
        <h2 className='bandNames'>Dave Matthews Band</h2>
        <p className='bandDescribe'>
          Dave Matthews Band has been one of my favorite bands since I was
          young. My cousin introduced me to them and as soon as he did, I was
          hooked. I've seen them in concert 35 times and always have a great
          time.
        </p>
      </section>
      <section className='bandHP'>
        <h2 className='bandNames'>Anjunabeats</h2>
        <p className='bandDescribe'>
          Without Anjunabeats, I would not be able to code. Featuring a vast
          group of contributing artists, the Anjunabeats label/band creates
          electronic music that can help you relax, amp you up, or give you a
          nice, steady, melodic trance to help code.
        </p>
      </section>
      <section className='bandHP'>
        <h2 className='bandNames'>Gramatik</h2>
        <p className='bandDescribe'>
          Born Denis Jašarević, the electronic music producer known as Gramatik
          blends hip-hop, rap, and electronic beats to create a wildly engaging
          mix of tracks. Hard driven beats give way to softer melodic sounds
          that guarantees a dynamic and engaging listening experience.
        </p>
      </section>
    </>
  )
}

export default HomePage
