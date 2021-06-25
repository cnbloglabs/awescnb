import { loadScript } from 'utils/helpers'
import { chart } from 'constants/libs'
import { chartConfig } from 'options/plugins'

/**
 * 构建图表容器
 */
function createChartContainer(mountedNode) {
    const container = $('<div id="chart"></div>')
    const el = '<canvas id="myChart"></canvas>'
    container.append(el)
    $(mountedNode).append(container)
}

function createChart(labels, datasets) {
    const _Chart = window.Chart

    _Chart.defaults.color = '#999'

    const config = {
        type: 'radar',
        data: {
            labels,
            datasets,
        },
        options: {
            elements: {
                line: {
                    borderWidth: 1,
                },
            },
            plugins: {
                // legend: {
                //     labels: {
                //         color: '#f00',
                //     },
                // },
            },
        },
    }

    new _Chart(document.getElementById('myChart'), config)
}

export default (theme, devOptions, pluginOptions) => {
    const { enable, labels, datasets } = chartConfig(devOptions)
    if (!enable) return

    const { mountedNode } = Object.assign(
        {},
        {
            mountedNode: '#sidebar_news',
        },
        pluginOptions,
    )

    loadScript(chart, () => {
        createChartContainer(mountedNode)
        createChart(labels, datasets)
    })
}
