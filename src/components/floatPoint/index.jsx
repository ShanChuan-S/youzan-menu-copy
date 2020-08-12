import React, { PureComponent } from 'react';

import './index.scss';

const pointData = {
    ask: {
        icon: '//b.yzcdn.cn/cdn/kdzx.png',
        text: '开店咨询'
    },
    try: {
        icon: '//b.yzcdn.cn/cdn/mfsy.png',
        text: '免费试用',
        href: 'https://account.youzan.com/register'
    },
    case: {
        icon: '//b.yzcdn.cn/cdn/smgz.png',
        text: '获取案例'
    },
    qrcode: {
        img: '//img.yzcdn.cn/static/intro/advisory/qr_code_@2x.png',
        text: '关注“有赞说”学习运营秘籍'
    }
}

class FloatPoint extends PureComponent {
    render() {
        return(
            <div className='point-container'>
                <div className='item'>
                    <img src={pointData.ask.icon} />
                    <p>{pointData.ask.text}</p>
                </div>
                <div className='split'><p></p></div>
                <a className='item' target='_blank' href={pointData.try.href}>
                    <img src={pointData.try.icon} />
			        <p>{pointData.try.text}</p>
                </a>
                <div className='split'><p></p></div>
                <div className='item case'>
                    <img src={pointData.case.icon} />
                    <p>{pointData.case.text}</p>
                </div>
                <div className='qrcode'>
                    <img className="qrcode-img" src={pointData.qrcode.img} />
                    <p className="qrcode-text">{pointData.qrcode.text}</p>
                </div>
            </div>
        )
    }
}

export default FloatPoint;