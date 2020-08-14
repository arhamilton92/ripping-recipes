import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class Ingredients extends Component {

    state = {
        ingredients: []
    }

    componentDidMount() {
        axios.get("/api/ingredients")
        .then((response) => {
            this.setState({
                ingredients: response.data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s9">
                        <h1>Ingredients</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3">
                        <h5>
                            <Link to="/ingredients/new">Create a new ingredient</Link>
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {this.state.ingredients.map((ingredient)=> (
                            <div key={ingredient._id}>
                                <h3>{ingredient.name}</h3>

                            </div>

                        ))}
                    </div>
                    <div className="col s12">
                        {this.state.ingredients.length === 0 && <p>No ingredients returned.</p>}
                    </div>
                </div>
            </div>
        );
    }
};

export default Ingredients;