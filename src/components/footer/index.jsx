import React, { PureComponent, Fragment } from 'react';

import './index.scss';

const footerData = {
    serviceText: '开店咨询',
    servicePhone: '0571 - 8685 7988',
    contact: {
        title: '联系我们',
        list: [
            {text: '中国有赞',url: 'https://www.chinayouzan.com/'},
            {text: '公司文化',url: 'https://www.youzan.com/intro/about'},
            {text: '合作联系',url: 'https://bbs.youzan.com/forum.php?mod=viewthread&tid=443834&page=1&extra=#pid3069621'},
            {text: '加入我们',url: 'https://job.youzan.com/'},
            {text: '品牌物料',url: 'https://www.youzan.com/intro/download'}
        ]
    },
    product: {
        title: '产品与服务',
        list: [
            {text: '有赞微商城',url: 'https://www.youzan.com/intro/wsc'},
            {text: '小程序',url: 'https://www.youzan.com/intro/weapp'},
            {text: '有赞零售',url: 'https://www.youzan.com/intro/ls'},
            {text: '分销',url: 'https://fx.youzan.com/'},
            {text: '有赞连锁',url: 'https://www.youzan.com/intro/chain-store'},
            {text: '会议',url: 'https://www.youzan.com/intro/huiyi'},
            {text: '有赞教育',url: 'https://www.youzan.com/intro/edu'},
            {text: '公益',url: 'https://www.youzan.com/intro/gongyi'},
            {text: '有赞美业',url: 'https://www.youzan.com/intro/beauty'},
            {text: '广告投放',url: 'https://www.youzan.com/intro/ga'},
            {text: '有赞精选',url: 'https://www.youzan.com/intro/choice'},
            {text: '营销应用',url: 'https://www.youzan.com/intro/ump/dashboard'},
            {text: '消费保障',url: 'https://www.youzan.com/intro/protection'},
            {text: '定制服务',url: 'https://www.youzan.com/intro/custom'}
        ]
    },
    cert: {
        title: '权威认证',
        list: [
            {text: 'CSA C*STAR云计算安全国际认证',url: 'https://www.youzan.com/intro/renzheng'},
            {text: 'ISO27001信息安全管理体系国际认证',url: 'https://www.youzan.com/intro/renzheng'},
            {text: '信息安全等级保护（三级）',url: 'https://www.youzan.com/intro/renzheng'},
            {text: '支付业务许可证',url: 'https://www.youzan.com/intro/lincense/payment'},
            {text: '工商营业执照',url: 'https://www.youzan.com/intro/lincense/business'},
            {text: '食品经营许可证',url: 'https://www.youzan.com/intro/lincense/food'},
            {text: '互联网药品信息服务资格证书',url: 'https://www.youzan.com/intro/lincense/medical'}
        ]
    },
    news: {
        title: '公司动态',
        list: [
            {text: '澎湃｜有赞MENLO发布会晒5个千万级订单数据',url: 'https://www.thepaper.cn/newsDetail_forward_7860513'},
            {text: '凤凰网｜“有赞零售”凭什么给实体店带来10倍增长？',url: 'http://finance.ifeng.com/c/7xLlJ3QImPj'},
            {text: '钛媒体｜逆风增长！有赞Q1商家交易额达208亿',url: 'https://www.tmtpost.com/nictation/4372558.html'},
            {text: '央广网｜有赞与酷狗直播达成合作',url: 'http://www.cnr.cn/rdzx/cxxhl/zxxx/20200428/t20200428_525071854.shtml'},
            {text: '亿欧网｜高端纸巾品牌Tempo得宝签约有赞',url: 'https://baijiahao.baidu.com/s?id=1665089950674936152&wfr=spider&for=pc'},
            {text: '凤凰财经｜有赞2019年服务商家年交易额翻倍至645亿',url: 'http://finance.ifeng.com/c/7vBvQHoFUwB'},
            {text: '腾讯财经｜Zippo签约有赞微商城连锁，50家门店一起“云卖货”',url: 'https://xw.qq.com/finance/20200317027150/FIN2020031702715000?from=singlemessage&isappinstalled=0'},
        ]
    },
    company: {
        name: '杭州起码科技有限公司',
        time: '© 2012-2020 Youzan.com. All Rights Reserved'
    },
    statement: [
        {text: '知识产权',url: 'https://www.youzan.com/intro/ipr'},
        {text: '规则中心',url: 'https://www.youzan.com/intro/rule/index'},
        {text: '廉洁有赞',url: 'https://www.youzan.com/intro/lianjie'},
        {text: '法律声明',url: 'https://www.youzan.com/intro/statement'},
        {text: '隐私政策',url: 'https://www.youzan.com/intro/rule/detail?alias=132atyi19&pageType=rules'},
        {text: '有赞音乐',url: 'https://www.youzan.com/intro/music'},
        {text: '有赞动漫',url: 'https://www.youzan.com/intro/cartoon'},
        {text: '违法和不良信息举报邮箱：blxxjb@youzan.com',url: 'mailto:blxxjb@youzan.com'},
        {text: '客服热线：0571 - 2620 0262',url: 'https://www.youzan.com/tel:057126200262'}
    ],
    record: {
        publicLogo: 'https://img.yzcdn.cn/public_files/2016/07/19/276d5f72dc85cc584d83c08fefa36c2b.png',
        publicUrl: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602004354',
        recordNum: '浙公网安备 33010602004354号 ',
        licence: '增值电信业务经营许可证：浙B2-20140331 - ',
        licenceNum: '浙ICP备13037466号',
        licenceUrl: 'http://beian.miit.gov.cn/',
        zhehang: '浙网食A33010012'
    },
    zhebeizi: {
        text: '新出发浙备字第2019008号',
        wangxie: '（浙）网械平台备字【2018】第00003号'
    },
    escort: {
        url: 'https://www.youzan.com/intro/huhang',
        logoImg: 'https://img.yzcdn.cn/upload_files/2020/05/28/FtHhyZk9mcxHL8DVX2cy2mY_ioyn.png',
        effectImg: 'https://img.yzcdn.cn/upload_files/2020/05/28/FnETTEVyDdF7GlhfSVGuk3RQCwg_.png',
        text: '有赞护航',
        introduce: '系统稳定高于一切'
    }
}

class Footer extends PureComponent {
    constructor(props) {
        super(props);
        this.dealProductList = this.dealProductList.bind(this);
    }

    dealProductList() {
        let resultArr = [];
        footerData.product.list.map((item, index) => {
            if(!(index % 2)) {
                resultArr[resultArr.length]=[];
            }
            resultArr[resultArr.length - 1].push(item);
        })
        return resultArr;
    }

    render() {
        return(
            <div className='footer-container'>
                <div className='container'>
                    <div className='about'>
                        <div className='contact'>
                            <h3>{footerData.contact.title}</h3>
                            {
                                footerData.contact.list.map((item, index) => {
                                    return(
                                        <p key={index}>
                                            <a className='text' href={item.url}>{item.text}</a>
                                        </p>
                                    )
                                })
                            }
                            <p className='service'>
                                {footerData.serviceText}
                                <br />
                                {footerData.servicePhone}
                            </p>
                        </div>
                        <div className='product'>
                            <h3>{footerData.product.title}</h3>
                            {
                                this.dealProductList().map((item, index) => {
                                    return(
                                        <p key={index}>
                                            {
                                                item.map((eItem, eIndex) => {
                                                    return(
                                                        <a className='text' key={eIndex} href={eItem.url}>{eItem.text}</a>
                                                    )
                                                })
                                            }
                                        </p>
                                    )
                                })
                            }
                        </div>
                        <div className='product'>
                            <h3>{footerData.cert.title}</h3>
                            {
                                footerData.cert.list.map((item, index) => {
                                    return(
                                        <p key={index}>
                                            <a className='text' href={item.url}>{item.text}</a>
                                        </p>
                                    )
                                })
                            }
                        </div>
                        <div className='product news'>
                            <h3>{footerData.news.title}</h3>
                            {
                                footerData.news.list.map((item, index) => {
                                    return(
                                        <p key={index}>
                                            <a className='text' href={item.url}>{item.text}</a>
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='common'>
                        <div className='left'>
                            <div className='company'>
                                <span className='name'>{footerData.company.name}</span>
                                <span className='name'>{footerData.company.time}</span>
                            </div>
                            <div className='statement'>
                                {
                                    footerData.statement.map((item, index) => {
                                        return(
                                            <Fragment key={index}>
                                                <a className='item' href={item.url}>{item.text}</a>
                                                <span className='split'>|</span>
                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                            <div className='record'>
                                <a className='public' href={footerData.record.publicUrl}>
                                    <img src={footerData.record.publicLogo} />
                                    <span>{footerData.record.recordNum}</span>
                                </a>
                                <span>{footerData.record.licence}</span>
                                <a className='licence' href={footerData.record.licenceUrl}>{footerData.record.licenceNum}</a>
                                <span className='zhehang'>{footerData.record.zhehang}</span>
                            </div>
                            <div className='company'>
                                <span>{footerData.zhebeizi.text}</span>
                                <span>{footerData.zhebeizi.wangxie}</span>
                            </div>
                        </div>
                        <a className='escort' href={footerData.escort.url}>
                            <div className='img-container'>
                                <img className='logo' src={footerData.escort.logoImg} />
                                <img className='effect' src={footerData.escort.effectImg} />
                            </div>
                            <p className='text'>{footerData.escort.text}</p>
                            <p className='intro'>{footerData.escort.introduce}</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;