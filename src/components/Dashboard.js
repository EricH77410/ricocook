import React from 'react'

// Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RecipesList from '../containers/RecipesList';
import RecipeFilter from '../components/recipes/RecipeFilter';

const Dashboard = ()=>(
    <div>
        <RecipeFilter/>
        <RecipesList />
    </div>
)

export default Dashboard