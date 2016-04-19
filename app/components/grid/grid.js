import React from 'react'

import './grid.scss'

export default class Grid extends React.Component {
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

        <div className="g-grid styleguide-grid-coloring">
            <div className="g-group">
                <div className="g-cell g-cell-12-12 g-cell-md-4-12">
                    <div className="styleguide-grid-content">A</div>
                </div>
                <div className="g-cell g-cell-12-12 g-cell-md-4-12">
                    <div className="styleguide-grid-content">B</div>
                </div>
                <div className="g-cell g-cell-12-12 g-cell-md-4-12">
                    <div className="styleguide-grid-content">C</div>
                </div>
            </div>
        </div>

      </div>
    )
  }
}
