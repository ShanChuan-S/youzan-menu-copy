import React, { PureComponent } from 'react';

import './index.scss';

const serviceData = {
    title: '360°全方位一站式服务',
    list: [
        {
            img: '//img.yzcdn.cn/public_files/2017/12/01/6fd9edbd85abc1fe91ac1e2a4caaf8e5.png',
            title: '专业客服答疑',
            desc: '7*19小时专业指导 答疑解惑'
        },
        {
            img: '//img.yzcdn.cn/static/intro/img/newIndex/service_2@2x.png',
            title: '线上视频教学',
            desc: '随时随地学习，提升能力'
        },
        {
            img: '//img.yzcdn.cn/public_files/2018/02/06/41f9aad012137fe3219b305b9352b7ae.png',
            title: '同行交流活动',
            desc: '直播、社区、商盟，实战分享'
        },
        {
            img: '//img.yzcdn.cn/static/intro/img/newIndex/service_4@2x.png',
            title: '运营者特训营',
            desc: '培训优良运营人群，轻松招人'
        }
    ]
}

class ServiceModule extends PureComponent {
    render() {
        return(
            <div className='service-container'>
                <h2 className='service-title'>{serviceData.title}</h2>
                <div className='content'>
                    {
                        serviceData.list.map((item, index) => {
                            return(
                                <div className='card' key={index}>
                                    <img className='img' src={item.img} />
                                    <p className='text'>{item.title}</p>
                                    <p className='desc'>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ServiceModule;