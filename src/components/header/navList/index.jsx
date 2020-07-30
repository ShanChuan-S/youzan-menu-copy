import React, { PureComponent } from 'react';

import './index.scss';

class NavList extends PureComponent {
    render() {
        return(
            <ul className='nav-list-container'>
                <li>
                    首页
                </li>
                <li className='menu-wrapper'>
                    商家服务
                    <i className='caret'/>
                </li>
                <li className='menu-wrapper'>
                    消费者
                    <i className='caret'/>
                </li>
                <li className='menu-wrapper'>
                    渠道合作
                    <i className='caret'/>
                </li>
                <li className='menu-wrapper'>
                    有赞云
                    <i className='caret'/>
                </li>
                <li className='menu-wrapper'>
                    更多服务
                    <i className='caret'/>
                </li>
            </ul>
        )
    }
}

export default NavList;