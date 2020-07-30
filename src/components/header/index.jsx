import React, { PureComponent } from 'react';

import { Button } from 'antd';

import NavList from './navList/index.jsx';

import './index.scss';

class Header extends PureComponent {
    render() {
        return(
            <div className='header-container'>
                <div className='header-content'>
                    <a className='logo' href='//www.youzan.com' />
                    <div className='nav-link-container'>
                        <span className='nav-link'>香港上市代码</span>
                        <span className='nav-link'>08083.HK</span>
                    </div>
                    <NavList />
                    <ul className='nav-button-list'>
                        <li className='nav-search'>
                            <Button
                                type='text'
                                className='nav-search-btn'
                            >
                                <span className='search-icon' />
                                <span className='search-text'>搜一搜</span>
                            </Button>
                        </li>
                        <li className='nav-login'>
                            <Button
                                type='link'
                                href='//account.youzan.com/login?fromSource=SOURCE_PC'
                                className='nav-login-btn'
                            >
                                商家后台
                            </Button>
                        </li>
                        <li className='nav-register'>
                            <Button
                                type='link'
                                href='//account.youzan.com/register?fromSource=SOURCE_PC'
                                className='nav-register-btn'
                            >
                                免费试用
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;