import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Spin, message } from 'antd';

import { Login } from './login';

const UserLogin = ({dispatch, app}) => {
    console.log(app);
    const {login, loading, loginButtonLoading, user} = app;
    const loginProps = {
        loading,
        loginButtonLoading,
        onOk(data) {
            dispatch({ type: 'app/login', payload: data })
        }
    }

    return (
        <div>
            {
                login ?
                    <div>已经登录了</div>
                    :
                    <div>
                        <Spin tip="加载用户信息..." spinning={loading} size="large">
                            <Login {...loginProps} />
                        </Spin>
                    </div>
            }
        </div>
    )

}

UserLogin.ProTypes = {
    dispatch: PropTypes.func,
    loading: PropTypes.object,
    loginButtonLoading: PropTypes.bool,
    login: PropTypes.bool,
    user: PropTypes.object
}

export default connect(({app})=>({app}))(UserLogin)