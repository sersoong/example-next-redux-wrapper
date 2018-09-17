import React from 'react'
import { startClock } from '../store';
import Clock from '../components/clock';
import { connect } from 'react-redux';

class Index extends React.Component{

  componentDidMount(){
    const {dispatch} = this.props
    this.timer = startClock(dispatch,false)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render(){
    return(
      <Clock lastUpdate={this.props.lastUpdate} light={this.props.light} />
    )
  }
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Index) 
