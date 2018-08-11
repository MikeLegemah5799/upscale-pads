import React, {Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super();
    this.state = {
      name: 'Mike'
    }
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }
  cities() {
    if(this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData

      console.log(cities)
      return cities.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }

  }
  homeTypes() {
    if(this.props.globalState.populateFormsData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData

      console.log(homeTypes)
      return homeTypes.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }
  bedrooms() {
    if(this.props.globalState.populateFormsData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData

      console.log(bedrooms)
      return bedrooms.map((item) => {
        return(
          <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }
  }

  render () {
    return (
      <section id="filter">
        <div className="inside">
            <h4>Filter</h4>
            <label htmlFor="city">City</label>
            <select name="city" className="filters city" onChange={this.props.change}>
                <option value="All">All</option>
                {this.cities()}
            </select>
            <label htmlFor="homeType">Home Type</label>
            <select name="homeType" className="filters homeType" onChange={this.props.change}>
                <option value="All">All Homes</option>
                {this.homeTypes()}
            </select>
            <label htmlFor="room">Bedrooms</label>
            <select name="rooms" className="filters bedrooms" onChange={this.props.change}>
                {this.bedrooms()}
            </select>
            <div className="filters price">
                <span className="title">Price (Min. - Max.)</span>
                <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
                <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
            </div>
            <div className="filters floor-space">
                <span className="title">Sq. ft (Min. - Max.)</span>
                <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
                <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
            </div>
            <div className="filters amenities">
                <span className="title">Amenities</span>
                <label htmlFor="amenities">
                    <span>Elevators</span>
                    <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Swimming Pool</span>
                    <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Finished Basement</span>
                    <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Gym</span>
                    <input name="gym" value="gym" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Door Man</span>
                    <input name="doorman" value="doorman" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Driver</span>
                    <input name="driver" value="driver" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Business Center</span>
                    <input name="business_center" value="business_center" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Bullet Proof Glass</span>
                    <input name="bullet_proof_glass" value="bullet_proof_glass" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Guest Apartment</span>
                    <input name="guest_apartment" value="guest_apartment" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Concierge Service</span>
                    <input name="concierge" value="concierge" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Poolhouse</span>
                    <input name="poolhouse" value="poolhouse" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Outdoor Kitchen</span>
                    <input name="outdoor_kitchen" value="outdoor_kitchen" type="checkbox" onChange={this.props.change} />
                </label>
                <label htmlFor="amenities">
                    <span>Pool Table</span>
                    <input name="pool_table" value="pool_table" type="checkbox" onChange={this.props.change} />
                </label>
            </div>
        </div>
      </section>
    );
  }
}

