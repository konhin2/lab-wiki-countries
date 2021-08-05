import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    Link,
    useParams
} from 'react-router-dom'

export default function CountryDetails(props) {
    const { country } = useParams()
    const [data, setData] = useState()
    const [borders, setBorders] = useState()
    // console.log(props.match.params.currency)
    useEffect(() => {
        const getCurrencies = async () => {
            const res = await axios.get(`https://raw.githubusercontent.com/mledoze/countries/master/countries.json`)
            const dataFromAPI = await res.data
            const getData = await dataFromAPI.filter((eachCountry) =>{
                return eachCountry.cca3 === country
            })[0]
            setData(
                getData
            )
            setBorders(
                getData.borders.map((eachBorder) => {
                    return dataFromAPI.find((eachCountry) => {
                        return eachCountry.cca3=== eachBorder
                    })
                })
            )
        }
        getCurrencies()
    }, [country])
    return (
        <div className="col-7">
            <h1>{data ? data.name.common : "Not Data Yet"}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>
                            {
                                data ? data.capital.map((e) => {
                                    return e
                                })
                                : "Not Data Yet"
                            }
                            
                        </td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{data ? data.area : "Not Data yet"} km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {
                                    borders ? borders.map((element) => {
                                        return (
                                            <li>
                                                <Link to={`/${element.cca3}`}>
                                                    {element.name.common}
                                                </Link>
                                            </li>
                                        )
                                    })
                                    : "Not Data Yet"
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
