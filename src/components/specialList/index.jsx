import React, { PureComponent } from "react";

import './index.scss';

const specialData = [
    {
        bgImg: '//img.yzcdn.cn/upload_files/2020/06/16/FinV6rSOGfiKe-PuwPl2g79w9wVS.png',
        text: [
            '新店流量暴增技巧'
        ],
        href: '//h5.youzan.com/appcms/special-topic.html?specialtopicid=2',
    },
    {
        bgImg: '//img.yzcdn.cn/upload_files/2020/04/30/FlS5lsraLI3C6Ks6_8vicRNwZf3v.png',
        text: [
            '一看就懂，',
            '轻松get涨粉精髓'
        ],
        href: '//h5.youzan.com/appcms/special-topic.html?specialtopicid=100087',
    },
    {
        bgImg: '//img.yzcdn.cn/upload_files/2020/06/16/FjyMrcyhwQK23UEe-Q7RE18zN6YL.png',
        text: [
            '打爆店铺销量，',
            '秘密就在「销售员」'
        ],
        href: '//h5.youzan.com/appcms/special-topic.html?specialtopicid=100097',
    },
    {
        bgImg: '//img.yzcdn.cn/upload_files/2020/04/30/FsRFl5FjF1e6ei5nnoSbTXo6G87R.png',
        text: [
            '使用心得：',
            '有赞商家自己说'
        ],
        href: '//h5.youzan.com/appcms/special-topic.html?specialtopicid=100095',
    },
]

class SpecialList extends PureComponent {
    render() {
        return(
            <div className='special-container'>
                {
                    specialData.map(item => {
                        return(
                            <a className='special' target='_blank' style={{ backgroundImage: `url("${item.bgImg}")` }} key={item.bgImg} href={item.href}>
                                <div className='text-container'>
                                    {
                                        item.text.map((item, index) => {
                                            return <p key={index}>{item}</p>
                                        })
                                    }
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default SpecialList;