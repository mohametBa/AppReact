import React from 'react';
import propType from 'prop-type';

function SimLogin(props) {
    return (
        <div className="mb-3">
              <button onClick={() => props.setUser('Eva')} className='btn btn-danger me-1'>Eva</button>
              <button onClick={() => props.setUser('Chris')}className='btn btn-primary'>Chris</button>
        </div>
    );
}
SimLogin.prototype = {
    setUser: propType.func
}

export default SimLogin;