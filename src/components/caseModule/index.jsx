import React, { PureComponent } from 'react';

import './index.scss';

const csaeData = {
    title: '他们都在用有赞',
    more: '更多案例',
    moreUrl: '//www.youzan.com/intro/wsc/case',
    list: [
        {
            bgImg: '//img.yzcdn.cn/static/intro/business/wechat_pictures_20191022141109.jpg',
            logo: '//img.yzcdn.cn/static/intro/business/wechat_pictures_20191022141104.jpg',
            type: '经营类目：自媒体',
            detail: '“有赞给很多自媒体提供了电商机会，我们用有赞已经很多年，一起度过了无数个奋斗的日夜，愿我们和有赞越走越远。”'
        },
        {
            bgImg: '//img.yzcdn.cn/static/intro/img/newIndex/case2@2x.jpg',
            logo: '//img.yzcdn.cn/static/intro/img/index-b/case_logo_2@2x.png',
            type: '经营类目：休闲零食',
            detail: '“优惠券、满减送、签到有礼...有赞的营销工具给良品铺子微信1000多万粉丝提供了多元化的活动玩法，增强了品牌及粉丝的用户粘性。有你，有赞！”'
        },
        {
            bgImg: '//img.yzcdn.cn/static/intro/img/newIndex/case3@2x.jpg',
            logo: '//img.yzcdn.cn/static/intro/img/newIndex/case_logo_3@2x.png',
            type: '经营类目：水果生鲜',
            detail: '“我们新店开业，公众号做‘蓝莓十人团1元购’活动，要求门店自提。顾客蜂拥而至，提货时再买点其他水果，不但把蓝莓亏的钱赚回来，开业3天销售额就超60万。”'
        },
        {
            bgImg: '//img.yzcdn.cn/static/intro/img/newIndex/case4@2x.jpg',
            logo: '//img.yzcdn.cn//static/intro/daily_0514/an_unnamed_-1.png',
            type: '经营类目：蛋糕烘焙',
            detail: '“坚持新鲜现做，覆盖200多个城市。今年的‘狂欢节活动’，借助有赞的‘满就送多张优惠券’功能，单日销售破千万。”'
        },
        {
            bgImg: '//img.yzcdn.cn/public_files/2018/12/03/6d54cee51921c6ad363903e16fc5ed07.jpg',
            logo: '//img.yzcdn.cn/public_files/2018/12/03/3634261509da23c171b7f68d4c9d9dbd.png',
            type: '经营类目：美妆',
            detail: '“植观的第一家店铺就是有赞店铺，它将内容图文输出+精细化客户运营+数据分析有效结合，帮助店铺快速成长、沉淀用户。利用拼团、瓜分券等工具，给我们带来更多新客和转化。”'
        },
        {
            bgImg: '//img.yzcdn.cn/static/intro/img/index/case6@2x.jpg',
            logo: '//img.yzcdn.cn/static/intro/img/index/Bitmap@2x.png',
            type: '经营类目：服饰',
            detail: '“作为款式多、更新快、性价比高的韩风快时尚知名品牌，借助有赞‘瓜分券’功能，实现快速裂变、流量聚合。活动预热2天，参与客户达10万+，转化率高达10%。”'
        }
    ]
};

class CaseModelu extends PureComponent {
    render() {
        return(
            <div className='case-container'>
                <h2 className='case-title'>{csaeData.title}</h2>
                <div className='list-container'>
                    {
                        csaeData.list.map((item, index) => {
                            return(
                                <div className='content' key={index}>
                                    <img className='bg-img' src={item.bgImg} />
                                    <div className='card'>
                                        <img className='logo' src={item.logo} />
                                        <p className='type'>{item.type}</p>
                                        <p className='detail'>{item.detail}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <a className='more-case' href={csaeData.moreUrl}>{csaeData.more}</a>
            </div>
        )
    }
}

export default CaseModelu;