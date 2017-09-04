// Top Menu for site. Drop Down.

import React, { Component } from 'react';

class MenuBar extends Component{
    constructor (props) {
        super(props);
        this.state = {
            selectedPage : 'Home'
        };

        this.updatePage = this.updatePage.bind(this);
    }

    updatePage(page) {
        this.setState(function(){
            return{
                selectedPage: page
            }
        });
    }

    render() {
        var pages = ['Home', 'Lighting', 'Photography', 'Graphics'];
        return (
            <ul className='pages'>
                {pages.map(function (page) {
                    return(
                        <li
                        style={page === this.state.selectedPage ? {color:'#d0021b'}: null}
                        onClick={this.updatePage.bind(null, page)}
                        key={page}>
                        {page}
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
};

export default MenuBar;