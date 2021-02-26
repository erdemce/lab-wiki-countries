import React, { Component } from 'react';
import countriesJSON from "../countries.json";

export default class CountriesList extends Component {

  state={
    countries:countriesJSON
  }

  render() {
    return (
      
        <div className="col-5">
          <div className="list-group">

          {this.state.countries.map((country,index)=>{
            return <a 
            key={index}
            className="list-group-item list-group-item-action"
            href={"/"+country.cca3}>
             {country.flag} {country.name.common}
       
            </a>
          })
          }

          </div>
        </div>
    );
  }
}
