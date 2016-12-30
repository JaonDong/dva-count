import React from 'react';
import styles from './index.less';

const Example = ({record,current,dispatch}) => {
  
  return (
    <div className="{styles.normal}">
      <div className="{styles.record}">Highest Record:{record}</div>
      <div className="{styles.current}">{current}</div>
      <div className="{styles.button}">
        <button onClick={()=>{dispatch({type:'example/add'});}}>+</button>
      </div>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
