import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example';

const IndexPage=({dispatch,example})=>{
  console.log(dispatch);
  return (
   <Example {...example} dispatch={dispatch}></Example>
  );
};

IndexPage.propTypes = {
};
function mapStateToProps(state) {
  return { example: state.example };
}
export default connect(mapStateToProps)(IndexPage);
