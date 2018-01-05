import React from 'react';
import { connect } from 'react-redux';
import { setTextFiltter } from '../../actions/filtersAction';

export class RecipeFilter extends React.Component {
    changeTerm = (e)=>{
        this.props.setTextFilter(e.target.value);
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.changeTerm} placeholder="Rechercher"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (txt)=>dispatch(setTextFiltter(txt))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeFilter);
