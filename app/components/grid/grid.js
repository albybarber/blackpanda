import React from 'react'

require('./grid.scss');


export default class GridExample extends React.Component {
  constructor (props) {
    super(props)
    this.togglePush = this.togglePush.bind(this)
    this.togglePlop = this.togglePlop.bind(this)
    this.state = {
      push: false,
      plop: false
    }
  }
  togglePush () {
    this.setState({push: !this.state.push})
  }
  togglePlop () {
    this.setState({plop: !this.state.plop})
  }
  render () {

    var pushState = this.state.push ? 'open' : 'closed';
    var plopState = this.state.plop ? 'open' : 'closed';

    return (
      <div>
        <div className="controls">
          <button onClick={this.togglePush}>Push - {pushState}</button>
          <button onClick={this.togglePlop}>Plop - {plopState}</button>
        </div>
        <section data-sidebar-state={pushState} data-sidebar-type='push' className="slidebar">
          <p>PUSH</p>
        </section>
        <section data-sidebar-state={plopState} data-sidebar-type='plop' data-sidebar-postion='right' className="slidebar">
          <p>PLOP</p>
        </section>
        <main className="grid-container">
          <section className="row">
            <div className="col-1">1</div>
            <div className="col-1">2</div>
            <div className="col-1">3</div>
            <div className="col-1">4</div>
            <div className="col-1">5</div>
            <div className="col-1">6</div>
            <div className="col-1">7</div>
            <div className="col-1">8</div>
            <div className="col-1">9</div>
            <div className="col-1">10</div>
            <div className="col-1">11</div>
            <div className="col-1">12</div>
          </section>
          <section className="row">
            <div className="col-2">
              <div className="col-4">1.1</div>
              <div className="col-4">2.2</div>
              <div className="col-4">3.3</div>
            </div>
            <div className="col-2">2</div>
            <div className="col-2">3</div>
            <div className="col-2">4</div>
            <div className="col-2">5</div>
            <div className="col-2">6</div>
          </section>
        </main>
      </div>
    )
  }
}
