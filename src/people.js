import React, {Component} from 'react';

class People extends Component{

    render () {
        // this gives me the value of props
        console.log(this.props)
        // us destructuring on props
        const { name, age, favoriteFood } = this.props
        return (
        <div className="people">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
        <div>Favorite Food: {favoriteFood}</div>
        </div>
        )
    }

}

export default People;