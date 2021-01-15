import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/NewNav.scss';

class NewNav extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { store: ''}
  // }
  // componentDidMount = () => {
  //   let _this = this;
  //   $('button').on('click', function() {
  //     // alert('Hery There!')
  //     _this.setState({ store : Math.random() })
  //   })
  // }
  render() {
    return (
      <div>
          <input type="checkbox" id="check" />
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
    <header>My App</header>
  <ul>
<li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
<li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
<li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
<li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
<li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
<li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
<li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
</ul>
</div>
      </div>
    )
  }
}

export default NewNav;