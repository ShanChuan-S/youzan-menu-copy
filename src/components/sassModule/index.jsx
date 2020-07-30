import React, { PureComponent } from 'react';

import './index.scss';
import Item from 'antd/lib/list/Item';

const sassData = {
    title: '性能强大、安全、稳定的 SaaS 产品',
    subTitle: '系统稳定高于一切，让商家经营有保障，消费者购物更放心',
    bgImg: '//img.yzcdn.cn/static/intro/index0310/2280.png',
    detailText: '了解详情',
    detailUrl: '//www.youzan.com/intro/huhang',
    list: [
        {
            img: '//img.yzcdn.cn/upload_files/2019/12/23/FtMLPc0jmLEZ1aH5hEu97ydguVmM.png',
            text: '护航店铺稳定',
            desc: '核心服务中断将获补偿'
        },
        {
            img: '//img.yzcdn.cn/upload_files/2019/12/23/FhVMpB7F132f0FL8QXG_U0GOn5HS.png',
            text: '护航数据安全',
            desc: '加密、异地备份'
        },
        {
            img: '//img.yzcdn.cn/upload_files/2019/12/23/Fk58hdWgbI2-OsyhFmk5bR0WIDEu.png',
            text: '护航消费者体验',
            desc: '防止流氓广告乱入'
        },
        {
            img: '//img.yzcdn.cn/upload_files/2019/12/23/FjHOBBuFxv7F-RiYCS7jKzQ-W6W6.png',
            text: '护航页面打开速度',
            desc: '页面打开速度仅需1秒'
        }
    ]
};

class SassModule extends PureComponent {
    render() {
        return(
            <div className='sass-container' style={{ backgroundImage: `url(${sassData.bgImg})` }}>
                <h1 className='title'>{sassData.title}</h1>
                <p className='sub-title'>{sassData.subTitle}</p>
                <div className='features'>
                    {
                        sassData.list.map((item, index) => {
                            return(
                                <div className='feature' key={index}>
                                    <img src={item.img} />
                                    <div className='text'>
                                        <h1>{item.text}</h1>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <a className='go-detail' href={sassData.detailUrl}>{sassData.detailText}</a>
            </div>
        )
    }
}

export default SassModule;