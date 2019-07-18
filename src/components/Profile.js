import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
        <div>
  <meta charSet="UTF-8" />
  <title>My Portfolio</title>
  <div className="nav">
    <ul className="main-nav">
      <li className="title">Web-head$</li>
      
      <li><a href="#contact" className="contact-btn nav-item">Contact</a></li>
    </ul>
  </div>
  <header>
    <img src="https://timedotcom.files.wordpress.com/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg" alt="Profile_Pic"className="dp"/>
    <h1 className="tag name">Hello, I'm <span style={{fontFamily: 'Lobster Two', letterSpacing: 1}}>jaylen</span>.</h1>
    
    <p className="tag name">boston , massachusetts</p>
  </header>
  <main>
    <div className="container">
      <div className="section">
        <h2>Background</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, tempore? Iste a non ullam ex ut placeat quia qui praesentium, alias itaque perspiciatis beatae voluptates repudiandae possimus dolore iure quasi!</p>
        <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus ipsum dolores quod vero inventore ipsam, molestiae sint nulla corporis mollitia recusandae doloribus perferendis eligendi itaque repellat quisquam ullam reprehenderit.</p>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum porro, consequuntur minima ea beatae perferendis rem autem tenetur vel. Veritatis eaque fuga iusto dolorum! Ducimus ipsa neque aliquam laborum.</p>
      </div>
      <div className="section">
        <h2>Goals</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore aliquam commodi, maxime rerum fugit ipsam soluta laborum beatae repellendus ipsum laboriosam harum nisi sit ut aut? Illum laboriosam quidem enim.</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quas fugit officiis dolorum eaque incidunt fuga at nostrum perspiciatis. Soluta magni atque accusantium incidunt obcaecati sequi aspernatur officiis harum id.</p>
      </div>
    </div>
  </main>
  <footer id="contact">
    <ul>
    </ul>
  </footer>
</div>

        )
    }
}
