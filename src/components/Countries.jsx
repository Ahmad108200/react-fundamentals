import React from 'react'
//Assignment: clear console error
//display countries as a row
//create a new react app
const Country = ({country:{name , capital}}) => {
    return(
        <div>
            <h2>{name}</h2>
            <small>{capital}</small>
        </div>
    )
}

const Countries = ({countries}) => {
    const countriesList = countries.map((country) => <Country details={country} key={country.id} country={country}/>)
  return (
    <>
    {countriesList}
    </>
  )
}

export default Countries