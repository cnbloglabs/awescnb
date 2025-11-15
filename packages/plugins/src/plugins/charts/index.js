import { getChartsOptions } from '@tona/options'
import { chartJs } from '../../constants/cdn'
import { loadScript } from '../../utils/helpers'

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
  // eslint-disable-next-line no-new
  new _Chart(document.getElementById('myChart'), config)
}

export function charts(_, devOptions, pluginOptions) {
  const { enable, labels, datasets } = getChartsOptions(devOptions)
  if (!enable) {
    return
  }

  const { mountedNode } = {
    mountedNode: '#sidebar_news',
    ...pluginOptions,
  }

  loadScript(chartJs, () => {
    createChartContainer(mountedNode)
    createChart(labels, datasets)
  })
}
