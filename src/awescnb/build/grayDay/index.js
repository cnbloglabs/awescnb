// 哀悼日
import './index.css'
import { getDate, pageName } from '@tools'

const grayDate = [
    {
        date: '2020-04-04',
        desc: '深切哀悼为抗击新冠肺炎疫情斗争牺牲的烈士',
    },
]

function grayDay() {
    if (pageName() === 'post') return
    for (const { date } of grayDate) {
        if (getDate() === date) {
            $('html').addClass('gray-filter')
        }
    }
}

export default grayDay
