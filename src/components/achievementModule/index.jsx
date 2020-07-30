import React, { PureComponent } from 'react';

import './index.scss';

const achiData = {
    title: '8年技术积累成就行业口碑',
    list: [
        {
            num: '543万',
            type: '商家信赖之选'
        },
        {
            num: '150个',
            type: '覆盖行业和类目'
        },
        {
            num: '4亿',
            type: '在售商品数'
        },
        {
            num: '645亿',
            type: '商家2019年交易额'
        },
        {
            num: '6万/秒',
            type: '订单处理速度'
        }
    ]
}

class AchievementModule extends PureComponent {
    render() {
        return(
            <div className='achi-container'>
                <h2 className='title'>{achiData.title}</h2>
                <div className='list'>
                    {
                        achiData.list.map((item, index) => {
                            return(
                                <div className='card' key={index}>
                                    <p className='num'>{item.num}</p>
                                    <p className='type'>{item.type}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default AchievementModule;