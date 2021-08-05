import React, { useEffect, useState } from 'react'
// import contriesData from './../countries.json'
import axios from 'axios'

import {
    Link,
} from 'react-router-dom'

export default function CountriesList() {
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        const getCurrencies = async () => {
            const res = await axios.get(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)
            const data = await res.data
            setCurrencies(data)
        }
        getCurrencies()
    }, [])
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: 'scroll'}}>
            <div className="list-group">
                {
                    currencies.map((e, i) => {
                        return (
                            <Link key={i} to={`/${e.cca3}`} className="list-group-item list-group-item-action">
                                {e.flag} { e.name.common}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
