import React from 'react';
import '../../scss/App.scss';


class DropdownList extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"black",width:"100px"}} >
            <div className="button" onClick={this.showDropdownMenu}> Select user type</div>

            { this.state.displayMenu ? (
            <ul>
            <li><a href="#Job Seeker">Job Seeker</a></li>
            <li><a href="#Company">Company</a></li>
            </ul>
            ):
        (
          null
        )
        }
       </div>

    );
  }
}
export default DropdownList;