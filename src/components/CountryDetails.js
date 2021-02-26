import React, { Component } from 'react';
import countriesJSON from '../countries.json';
import{ Link} from "react-router-dom"

export default class CountryDetails extends Component {
  state = {
    country:{},
    borderObjs:[]
  };

  getCountry = () => {
    let countryId = this.props.match.params.countryId;
    let oneCountry = countriesJSON.filter(
      (cntry) => countryId === cntry.cca3
    )[0];

    let name = oneCountry.name.official;
    let id = oneCountry.cca3;
    let newBorders = oneCountry.borders.map((border)=>{
      let borderObj={
        border,
        name:countriesJSON.filter((country)=>(country.cca3===border))[0].name.common
      }
      return borderObj;
    })
    let capital = oneCountry.capital[0];
    let area = oneCountry.area;

    let newCountry={ name, id, capital, area}

    this.setState({
      country:newCountry,
      borderObjs:newBorders
  
    });
  };

  componentDidMount() {
    this.getCountry();
  }

  componentDidUpdate() {
    let countryId = this.props.match.params.countryId;
    if (countryId !== this.state.country.id) {
      this.getCountry();
    }
  }

  render() {
    const { name, id, capital, area} = this.state.country;

    return (
      <div>
        <h1>{name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
          <ul>
                 {this.state.borderObjs.map((borderObject)=>{
                    return (<li key={borderObject.border}><Link to={borderObject.border}>{borderObject.name}</Link></li>)
                 } 
                 )}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
