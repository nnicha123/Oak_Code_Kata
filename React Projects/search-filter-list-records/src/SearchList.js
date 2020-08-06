import React, { Component } from 'react'
import data from './data.json'
import "./SearchList.css"

export class SearchList extends Component {
  state = {
    data: [],

  }
  componentDidMount() {
    this.setState({ data: data })
    console.log(data)
  }
  render() {
    return (
      <div className="Container">
        <div className="Options">
          <div className="group">
            <label>Choose a cuisine: </label>
            <select id="restfilter"><option value="any">Choose Any</option><option value="French">French</option><option value="Dutch">Dutch</option><option value="Europea">Europea</option><option value="European">European</option><option value="Vegetarian Friendly">Vegetarian Friendly</option><option value="Gluten Free Option">Gluten Free Option</option><option value="Mediterranean">Mediterranean</option><option value="International">International</option><option value="Vegan Option">Vegan Option</option><option value="Contemporary">Contemporary</option><option value="Vegan Options">Vegan Options</option><option value="Asian">Asian</option><option value="Indonesian">Indonesian</option><option value="Japanese">Japanese</option><option value="Seafood">Seafood</option><option value="Fast Foo">Fast Foo</option><option value="American">American</option><option value="Bar">Bar</option><option value="Central European">Central European</option><option value="Pu">Pu</option><option value="Cafe">Cafe</option><option value="British">British</option><option value="Healthy">Healthy</option><option value="Indian">Indian</option><option value="Tibetan">Tibetan</option><option value="Nepali">Nepali</option><option value="Italian">Italian</option><option value="Vegetarian Friendl">Vegetarian Friendl</option></select>
          </div>
          <div className="group">
            <label>Sort by :</label>
            <select id="sortfilter"><option value="ranking">Ranking</option><option value="asc">Rating: Low to High</option><option value="des">Rating: High to Low</option></select>
          </div>
        </div>
        <div className="itemFrame">
          {this.state.data.map(el => {
            let cuisines = el.Cuisine.substring(1, el.Cuisine.length - 2).split(",")
            return (<div className="itemCards">
              <div className="city">{el.City}</div>
              <div className="name">{el.Name}</div>
              <ul className="cuisineStyle">{
                cuisines.map(item => {
                  return <li className="cuisineList">{item}</li>
                })
              }
              </ul>
              <hr />
              <div className="bottomRate">
                <div>{el["Number of Reviews"]}</div>
                <div>{el["Rating"]}</div>
              </div>
            </div>)
          })}
        </div>
      </div>
    )
  }
}

export default SearchList
