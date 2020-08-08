import React, { Component } from 'react'

const SIZE_VALUES = ["XS", "S", "M", "L", "XL", "XXL"]
const SORT_VALUES = ["Lastest", "lowest", "highest"]

export default class Filter extends Component {

    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    Order{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        {SORT_VALUES.map(sort_value => (<option value={sort_value} key={sort_value}>{sort_value}</option>))}
                    </select>
                </div>
                <div className="filter-size">
                    Filter{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        {SIZE_VALUES.map(size_value => (<option value={size_value} key={size_value}>{size_value}</option>))}
                    </select>
                </div>
            </div>
        )
    }
}

