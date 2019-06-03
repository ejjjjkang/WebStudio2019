import React from 'react'
import './Main.css'
import Nav from './Nav'
import Articles from './Articles'
import { Button } from 'antd'
import { Link } from "react-router-dom"

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Link to="/blank">
          <Button type="primary">Go to Blank</Button>
        </Link>
        <div className="main-wrapper">
          <div className="main-container">
            <Articles />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MainPage
