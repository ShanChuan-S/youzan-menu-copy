import React, { PureComponent } from "react";

import { Carousel } from 'antd';

import './index.scss';

const dataList = [
    {
        imgUrl: '//img.yzcdn.cn/public_files/2018/05/29/topbanner1@2x.jpg',
        title: {
            text: '有赞微商城',
            color: '#000000'
        },
        subtitleColor: '#777',
        subtitle: [
            '一个软件解决网上开店所有问题'
        ],
        btn: {
            href: '//account.youzan.com/register',
            btnBgType: 'blue',
            text: '免费试用'
        },
        showphone: true,
    },
    {
        imgUrl: '//img.yzcdn.cn/public_files/2018/05/29/topbanner2@2x.jpg',
        title: {
            text: '有赞零售',
            color: '#000000'
        },
        subtitleColor: '#777',
        subtitle: [
            '全渠道一体化解决方案',
            '让门店经营更高效'
        ],
        btn: {
            href: '//account.youzan.com/register',
            btnBgType: 'blue',
            text: '免费试用'
        },
        showphone: true,
    },
    {
        imgUrl: '//img.yzcdn.cn/upload_files/2020/04/09/FnGqjqTDZQiOpJ9jjIfnFNsczl1U.jpg',
        title: {
            text: '有赞教育',
            color: '#000000'
        },
        subtitleColor: '#777',
        subtitle: [
            '教育机构的经营增长解决方案'
        ],
        btn: {
            href: '//account.youzan.com/register',
            btnBgType: 'green',
            text: '免费试用'
        },
        showphone: true,
    },
    {
        imgUrl: '//img.yzcdn.cn/intro/img/banner3/3x.png',
        title: {
            text: '有赞精选 30万商家的选择',
            color: '#ffffff'
        },
        subtitleColor: '#ffffff',
        subtitle: [
            '加入即可共享单日过百万流量'
        ],
        btn: {
            href: '//www.youzan.com/intro/choice',
            btnBgType: 'white',
            text: '了解更多'
        },
        showphone: false,
    }
];

class CarouselList extends PureComponent {
    render() {
        return(
            <div className='carousel-container'>
                <Carousel
                    autoplay
                    ref={(Carousel) => this.Carousel = Carousel}
                    dotPosition='top'
                    dots={{className: 'dots-content'}}
                >
                    {
                        dataList.map((item) => {
                            return(
                                <div key={item.imgUrl}>
                                    <div
                                        className='carousel-content'
                                        style={{ backgroundImage: `url("${item.imgUrl}")` }}
                                    >
                                        <div className='content-track'>
                                            <h3 className='title' style={{ color: item.title.color }}>{item.title.text}</h3>
                                            <div className='subtitle-container'>
                                                {
                                                    item.subtitle.map((subtitle) => {
                                                        return(
                                                            <span className='subtitle' style={{ color: item.subtitleColor }} key={subtitle}>{subtitle}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <a className={`btn a-${item.btn.btnBgType}`} href={item.btn.href}>{item.btn.text}</a>
                                            { item.showphone ? <span className='phone'>或致电 0571 - 8685 7988</span> : null }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className='carousel-btn'>
                    <div className='carousel-prev' onClick={() => this.Carousel.prev()} />
                    <div className={`carousel-prev carousel-next`} onClick={() => this.Carousel.next()}  />
                </div>
            </div>
        )
    }
}

export default CarouselList;