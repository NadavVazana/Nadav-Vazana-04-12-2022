import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { utilService } from '../services/util.service';
 
export class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    this.setState({address:''})
    var locationName = address.substring(0,address.indexOf(','))
    this.props.onSearch(locationName)
    
  };
 
  render() {
    return (
      <PlacesAutocomplete
      
        searchOptions={{types:['locality']}}
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='places-autocomplete'>
            <input
            autoCorrect='false'
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
    
              <ul className='suggestions'>
                {suggestions.map(suggestion=>{
                    return  <li {...getSuggestionItemProps(suggestion,{className:'suggestion'})}   className='suggestion'  >{suggestion.formattedSuggestion.mainText}</li>
                })}
              </ul>
            
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}