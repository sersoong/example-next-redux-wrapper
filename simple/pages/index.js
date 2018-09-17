import React,{Component} from 'react'
import { connect } from "react-redux";

class Page extends Component {
  static getInitialProps({store,isServer,pathname, query}) {
    store.dispatch({type:'Foo',payload:'foo'})        
    return {custom: 'test by sersoong'}; // pass some custom props to component
  }
  render() {
    return (
      <div>
        <div>Prop from Redux {this.props.foo}</div>
        <div>Prop from getInitialProps {this.props.custom}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {foo}  = state
  return {foo}
}

export default connect(mapStateToProps)(Page)


