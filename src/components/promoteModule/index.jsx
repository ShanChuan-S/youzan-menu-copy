import React, { PureComponent } from 'react';

import './index.scss';

const promoteData = {
    title: '现在注册，立享新人专属优惠礼包！',
    bgImg: '//img.yzcdn.cn/static/intro/img/newIndex/footerbg@2x.png',
    text: '立即注册',
    href: '//account.youzan.com/register'
}

class PromoteModule extends PureComponent {
    render() {
        return(
            <div className='promote-container' style={{ backgroundImage: `url(${promoteData.bgImg})` }}>
                <p>{promoteData.title}</p>
                <a href={promoteData.href}>{promoteData.text}</a>
            </div>
        )
    }
}

export default PromoteModule;