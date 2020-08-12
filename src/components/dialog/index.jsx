import React, { PureComponent } from 'react';

import './index.scss';

const tipsData = {
    avatorImg: `//b.yzcdn.cn/static/intro/recommend/set_up_a_backup_of_the_advisor's_head_2.png`,
    closeIcon: `//b.yzcdn.cn/cdn/chacha.png`,
    phoneText: `想了解更多，欢迎拨打热线：`,
    phone: `0571-8685 7988`,
    callUsText: `你也可以留下联系方式，我们会主动和你联系`,
    freeUseText: `免费试用`,
    freeUseHref: `//account.youzan.com/register`,
    adviserText: `预约顾问`
}

class PopTips extends PureComponent {
    render() {
        return(
            <div className='pop-container'>
                <img className='avator-img' src={tipsData.avatorImg} />
                <div className='header'>
                    <img className='close-icon' src={tipsData.closeIcon} />
                </div>
                <div className='content'>
                    <p className='phone'>
                        {tipsData.phoneText}
                        <span className='detail'>{tipsData.phone}</span>
                    </p>
                    <p className='call-us'>{tipsData.callUsText}</p>
                </div>
                <div className='footer'>
                    <a className='free' href={tipsData.freeUseHref}>{tipsData.freeUseText}</a>
                    <div className='adviser'>{tipsData.adviserText}</div>
                    <div className='animation'>
                        <div className='animation1'></div>
                        <div className='animation2'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopTips;