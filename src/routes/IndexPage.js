import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example';

const IndexPage=({dispatch,example})=>{
  
  return (
    <div>
       <Example {...example} dispatch={dispatch}></Example>
       <button>123</button>
    </div>

  );
};

IndexPage.propTypes = {
};
function mapStateToProps(state) {
  return { example: state.example };
}
export default connect(mapStateToProps)(IndexPage);
