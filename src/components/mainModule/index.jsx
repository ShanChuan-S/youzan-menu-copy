import React, { PureComponent, Fragment } from 'react';

import './index.scss';

const mainList = [
    {
        title: '有赞微商城 全行业全场景的电商解决方案',
        smallImg: '//img.yzcdn.cn/public_files/2018/02/11/6d246a7ac6abbcee3c39ceb6396f3ec3.png',
        bigImg: '//img.yzcdn.cn/public_files/2018/02/11/d159123ec2a1a16bf590e4c971f8a681.png',
        width: '100%',
        sectionList: [
            {
                title: '3分钟搭建移动商城',
                subTitle: '深挖行业特点 匹配产品功能，提供全行业解决方案',
            },
            {
                title: '近百种营销工具',
                subTitle: '社群营销&节日营销，拉新、转化、复购面面俱到',
            },
            {
                title: '系统化管理客户',
                subTitle: '客户画像帮您了解客户，会员卡/储值卡实现精准营销',
            },
            {
                title: '分销拓展销售渠道',
                subTitle: '客户帮你卖，员工帮你卖，543万商家帮你卖',
            },
        ],
        btnList: [
            {
                text: '免费试用',
                url: '//account.youzan.com/register',
                btnColor: 'blue',
            },
            {
                text: '功能介绍',
                url: '//www.youzan.com/intro/wsc',
                btnColor: 'white',
            },
        ]
    },
    {
        title: '有赞零售 店铺经营场景的一体化解决方案',
        smallImg: '//img.yzcdn.cn/public_files/2018/02/12/9de50602de27fc75b392fee1a43f9de6.png',
        bigImg: '//img.yzcdn.cn/public_files/2018/02/12/4ec899c8bd9b4b2ae97947007d1eccb8.png',
        width: '112%',
        left: '-10%',
        sectionList: [
            {
                title: '门店网店互通',
                subTitle: '基于门店地理位置的微商城，做消费者的身边店',
            },
            {
                title: '总部运营中心',
                subTitle: '总部网店和多门店联合经营，督导区域化运营帮助门店成功',
            },
            {
                title: '深度营销和服务',
                subTitle: '智能分析客户喜好，让门店导购轻松服务新老客户',
            },
            {
                title: '重新定义收银',
                subTitle: '稳定高效的收银设备；自由组合，快速上手',
            },
        ],
        btnList: [
            {
                text: '免费试用',
                url: '//account.youzan.com/register',
                btnColor: 'blue',
            },
            {
                text: '功能介绍',
                url: '//www.youzan.com/intro/ls',
                btnColor: 'white',
            }
        ]
    },
    {
        title: '有赞美业 美业经营一体化解决方案',
        smallImg: '//img.yzcdn.cn/public_files/2018/05/28/pc_meiye.png',
        bigImg: '//img.yzcdn.cn/public_files/2018/05/28/pc_meiye.png',
        width: '100%',
        sectionList: [
            {
                title: '科学灵活的预约解决方案',
                subTitle: '微信小程序在线预约，合理安排服务时间',
            },
            {
                title: '丰富的营销工具',
                subTitle: '独特的营销创新方法，拓新客、老带新、会员激活',
            },
            {
                title: '完善的会员管理体系',
                subTitle: '全方位积累会员资产，人人都是回头客',
            },
            {
                title: '高效的连锁门店管理方案',
                subTitle: '提成轻松算、业绩随时看，老板经营全掌握',
            },
        ],
        btnList: [
            {
                text: '免费试用',
                url: '//account.youzan.com/register',
                btnColor: 'blue',
            },
            {
                text: '功能介绍',
                url: '//www.youzan.com/intro/beauty',
                btnColor: 'white',
            }
        ]
    },
    {
        title: '有赞教育 教育机构的经营增长解决方案',
        smallImg: '//img.yzcdn.cn/public_files/2019/07/05/3b37d88aea57b8faf58ef38de6b036ab.png',
        bigImg: '',
        width: '100%',
        sectionList: [
            {
                title: '丰富的招生拓客工具',
                subTitle: '多渠道搜集客户线索，裂变式招生，降低推广成本',
            },
            {
                title: '高效的线索管理转化',
                subTitle: '线索跟进、记录，回访提醒，发掘线索价值',
            },
            {
                title: '清晰的教务管理体系',
                subTitle: '排课消课、学员生命周期管理，提升运营效率',
            },
            {
                title: '多样的互动督学手段',
                subTitle: '打卡、证书、奖励，提升教学效果，促进口碑传播',
            },
        ],
        btnList: [
            {
                text: '免费试用',
                url: '//account.youzan.com/register',
                btnColor: 'blue',
            },
            {
                text: '功能介绍',
                url: '//www.youzan.com/intro/edu',
                btnColor: 'white',
            }
        ]
    },
    {
        title: '有赞连锁 多门店统一运营解决方案',
        smallImg: '//img.yzcdn.cn/public_files/2018/05/28/pc_liansuo.png',
        bigImg: '//img.yzcdn.cn/public_files/2018/05/28/pc_liansuo.png',
        width: '100%',
        sectionList: [
            {
                title: '适配多类连锁',
                subTitle: '直营和加盟连锁门店均可使用，总部用一个后台统一管理',
            },
            {
                title: '数据全面互通',
                subTitle: '打通商品、库存、订单、会员、储值、营销、资产、数据八大模块',
            },
            {
                title: '简化运营难度',
                subTitle: '复杂操作均由总部进行，门店仅需简单执行总部规则，服务好消费者',
            },
            {
                title: '高效利用资金',
                subTitle: '灵活配置资金归集方式，门店营业额自动转账至总部账户',
            },
        ],
        btnList: [
            {
                text: '免费试用',
                url: '//account.youzan.com/register',
                btnColor: 'blue',
            },
            {
                text: '功能介绍',
                url: 'https://www.youzan.com/intro/chain-store',
                btnColor: 'white',
            }
        ]
    }
];

class MainModule extends PureComponent {
    render() {
        return(
            <div className='all-main-container'>
                {
                    mainList.map((item, index) => {
                        return (
                            <div className='main-container' key={index}>
                                <h3 className='main-title'>{item.title}</h3>
                                <div className='main-content' style={{ marginTop:( index === mainList.length - 1) ? '50px' : '70px' }}>
                                    <div
                                        className={`section-container ${index % 2 === 0 ? 'left' : 'right'}`}
                                        style={{
                                            paddingLeft: index % 2 === 0 ? '0px' : '72px',
                                            paddingRight: index % 2 === 0 ? '72px' : '0px',
                                        }}
                                    >
                                        {
                                            item.sectionList.map((subItem, subIndex) => {
                                                return(
                                                    <div className='section' key={subIndex}>
                                                        <p className='section-title'>{subItem.title}</p>
                                                        <p className='section-subtitle'>{subItem.subTitle}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className='section'>
                                            {
                                                item.btnList.map((subItem, subIndex) => {
                                                    return(
                                                        <a className={`section-btn ${subItem.btnColor}_btn`} href={subItem.url} target='_blank' key={subIndex}>{subItem.text}</a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={`img-container ${index % 2 !== 0 ? 'left' : 'right'}`}>
                                        <img style={{ width: item.width, marginLeft: item.left || 'auto' }} src={item.smallImg} srcSet={item.bigImg ? `${item.bigImg} 2x` : ''} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default MainModule;