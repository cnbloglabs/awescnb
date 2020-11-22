import { cacheScript } from '@tools'
import { viz } from '@constants/urls'
import { chartsConfig } from '@config/plugins.js'

/**
 * 构建容器
 */
function wrap() {
    const wrap = '<div id="charts"></div>'
    $('#sidebar_news').append(wrap)
}

/**
 * 构建图表
 * @param {*} pie
 */
function buildPieChart(pie) {
    const el = '<div id="charts-skill"></div>'
    $('#charts').append(el)

    new roughViz.Pie({
        element: '#charts-skill',
        data: pie.data,
        title: pie.title,
        titleFontSize: '20px',
        tooltipFontSize: '30px',
        legend: false,
        width: 244,
        height: 280,
        fillWeight: 5,
        fillStyle: 'zigzag',
        roughness: 4,
        colors: [
            '#10ac84',
            '#ff6b6b',
            '#0abde3',
            '#ffa502',
            '#a55eea',
            '#ff6b81',
        ],
    })
}

export default devOptions => {
    const { enable, pie } = chartsConfig(devOptions)
    if (!enable) return

    cacheScript(viz, () => {
        wrap()
        buildPieChart(pie)
    })
}
