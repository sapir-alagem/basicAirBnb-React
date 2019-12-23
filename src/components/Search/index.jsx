import React, {Component} from 'react';
import './Search.scss';

class Search extends Component {
    handleChange = (event) => {
        const { value } = event.target;
        const { onType } = this.props;
        
        onType(value);
    }

    render(){
        const { placeholder } = this.props;

        return(
            <input 
                type="text" 
                className="search"
                onChange={this.handleChange}
                placeholder={placeholder} />
        );
    }
}

export default Search;