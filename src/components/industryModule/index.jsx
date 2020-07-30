import React, { PureComponent } from 'react';

import './index.scss';

const industryData = {
    title: '为超过36个行业和场景提供经营解决方案',
    moreText: '了解更多',
    list: [
        {
            bgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_mapp.png',
            bigBgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_mapp@2x.png',
            icon: '//img.yzcdn.cn/intro/index/icon/icon_mapp.png',
            bigIcon: '//img.yzcdn.cn/intro/index/icon/icon_mapp@2x.png',
            text: '小程序',
            url: '//www.youzan.com/intro/weapp',
        },
        {
            bgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_payforreading.png',
            bigBgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_payforreading@2x.png',
            icon: '//img.yzcdn.cn/intro/index/icon/icon_pfrding.png',
            bigIcon: '//img.yzcdn.cn/intro/index/icon/icon_pfrding@2x.png',
            text: '知识付费',
            url: '//help.youzan.com/qa?cat_sys=K#/menu/13938/detail/2688?_k=qyzc64',
        },
        {
            bgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_food.png',
            bigBgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_food@2x.png',
            icon: '//img.yzcdn.cn/intro/index/icon/icon_food.png',
            bigIcon: '//img.yzcdn.cn/intro/index/icon/icon_food@2x.png',
            text: '餐饮外卖',
            url: '//www.youzan.com/intro/cy',
        },
        {
            bgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_naive.png',
            bigBgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_naive@2x.png',
            icon: '//img.yzcdn.cn/intro/index/icon/icon_naive.png',
            bigIcon: '//img.yzcdn.cn/intro/index/icon/icon_naive@2x.png',
            text: '自媒体',
            url: '//www.youzan.com/intro/media',
        },
        {
            bgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_tickets.png',
            bigBgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_tickets@2x.png',
            icon: '//img.yzcdn.cn/intro/index/icon/icon_tickets.png',
            bigIcon: '//img.yzcdn.cn/intro/index/icon/icon_tickets@2x.png',
            text: '票务卡券',
            url: '//www.youzan.com/intro/solution/piaowu',
        },
        {
            bgImg: '//img.yzcdn.cn/intro/index/pc/motel.png',
            bigBgImg: '//img.yzcdn.cn/intro/index/pc/motel@2x.png',
            icon: '//img.yzcdn.cn/intro/index/icon/icon_motel.png',
            bigIcon: '//img.yzcdn.cn/intro/index/icon/icon_motel@2x.png',
            text: '酒店客栈',
            url: '//www.youzan.com/intro/solution/jiudian',
        },
        {
            bgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_fruits.png',
            bigBgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_fruits@2x.png',
            icon: '//img.yzcdn.cn/intro/index/icon/icon_fruits.png',
            bigIcon: '//img.yzcdn.cn/intro/index/icon/icon_fruits@2x.png',
            text: '生鲜果蔬',
            url: '//www.youzan.com/intro/wsc/case',
        },
        {
            bgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_cakes.png',
            bigBgImg: '//img.yzcdn.cn/intro/index/pc/pc_bg_cakes@2x.png',
            icon: '//img.yzcdn.cn/intro/index/icon/icon_cakes.png',
            bigIcon: '//img.yzcdn.cn/intro/index/icon/icon_cakes@2x.png',
            text: '蛋糕烘焙',
            url: '//www.youzan.com/intro/wsc/case',
        },
    ]
}

class IndustryModule extends PureComponent {
    render() {
        return(
            <div className='industry-container'>
                <h3 className='industry-title'>{industryData.title}</h3>
                <div className='content'>
                    {
                        industryData.list.map((item, index) => {
                            return(
                                <a className='industry-card' href={item.url} key={index}>
                                    <div className='img-container'>
                                        <img className='bg' src={item.bgImg} srcSet={item.bigBgImg ? `${item.bigBgImg} 2x` : ''} />
                                        <img className='icon' src={item.icon} srcSet={item.bigIcon ? `${item.bigIcon} 2x` : ''} />
                                    </div>
                                    <p className='industry-name'>{item.text}</p>
                                    <span className='more-text'>{industryData.moreText}</span>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default IndustryModule;