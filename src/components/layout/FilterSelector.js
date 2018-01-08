import React from 'react'
import { connect } from 'react-redux'
import { setTypeFilter } from '../../actions/filtersAction';

class FilterSelector extends React.Component {
    setFilter = (e) => {
        const filter = e.target.textContent;
        if (filter === "Tous") {
            this.props.setTypeFilter('');
            return
        }
        this.props.setTypeFilter(filter)
    }
    render () {
        return (
            <div className="filter">
                <ul className="filter__list">
                    <li className="filter__item"><button onClick={this.setFilter} className="filter__btn">Preparation</button></li>
                    <li className="filter__item"><button onClick={this.setFilter} className="filter__btn">Patisserie</button></li>
                    <li className="filter__item"><button onClick={this.setFilter} className="filter__btn">Plat</button></li>
                    <li className="filter__item"><button onClick={this.setFilter} className="filter__btn">Entree</button></li>
                    <li className="filter__item"><button onClick={this.setFilter} className="filter__btn">Dessert</button></li>
                    <li className="filter__item"><button onClick={this.setFilter} className="filter__btn">Tous</button></li>
                </ul>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        type: state.type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTypeFilter: (type) => (dispatch(setTypeFilter(type)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelector)
