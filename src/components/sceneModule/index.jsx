/**
 * 营销玩法经营场景组建
 * 
 * 目前还缺少hover后对应的icon修改
 * 后期使用 redux 进行处理
 * 
 */

import React, { PureComponent } from 'react';

import './index.scss';

const sceneData = {
    title: '丰富多样的营销玩法覆盖所有经营场景',
    getMore: '了解更多',
    list: [
        {
            title: '获客拉新',
            subtitle: '多人拼团、销售员、瓜分券、团购返现…',
            icon: '//img.yzcdn.cn/intro/index/ump1-2@2x.png',
            hoverIcon: '//img.yzcdn.cn/intro/index/ump1-2@2x.png?imageView2/0/w/52/h/52',
            url: '//www.youzan.com/intro/ump/dashboard#section1'
        },
        {
            title: '下单转化',
            subtitle: '限时折扣、优惠券、降价拍、秒杀…',
            icon: '//img.yzcdn.cn/intro/index/ump2-2@2x.png',
            hoverIcon: '//img.yzcdn.cn/intro/index/ump2-2@2x.png?imageView2/0/w/52/h/52',
            url: '//www.youzan.com/intro/ump/dashboard#section2'
        },
        {
            title: '提高客单',
            subtitle: '打包一口价、优惠套餐、满减送…',
            icon: '//img.yzcdn.cn/intro/index/ump3-2@2x.png',
            hoverIcon: '//img.yzcdn.cn/intro/index/ump3-2@2x.png?imageView2/0/w/52/h/52',
            url: '//www.youzan.com/intro/ump/dashboard#section3'
        },
        {
            title: '留存复购',
            subtitle: '积分商城、会员储值、会员卡、签到…',
            icon: '//img.yzcdn.cn/intro/index/ump4-2@2x.png',
            hoverIcon: '//img.yzcdn.cn/intro/index/ump4-2@2x.png?imageView2/0/w/52/h/52',
            url: '//www.youzan.com/intro/ump/dashboard#section4'
        }
    ]
};
class SceneModule extends PureComponent {
    constructor(props) {
        super(props);
        this.img = React.createRef();
    }
    render() {
        return(
            <div className='scene-container'>
                <h3 className='scene-title'>{sceneData.title}</h3>
                <div className='scene-content'>
                    {
                        sceneData.list.map((item, index) => {
                            return(
                                <a
                                    className='scene-card'
                                    href={item.url}
                                    key={index}
                                >
                                    <img className='icon' src={item.icon} ref={this.img}/>
                                    <p className='title'>{item.title}</p>
                                    <p className='subtitle'>{item.subtitle}</p>
                                    <span className='more'>{sceneData.getMore}</span>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SceneModule;