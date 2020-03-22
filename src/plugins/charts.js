import roughViz from 'rough-viz'

const opts = window.opts.charts

function charts() {
    if (!opts.enable) return

    const wrap = '<div id="charts"></div>'
    const wrapStyle = {
        display: 'block',
        position: 'fixed',
        top: '60px',
        right: '60px',
    }

    $('body').append(wrap)
    $('#charts').css(wrapStyle)

    // $('#custom-avatar')
    //     .mouseover(() => {
    //         console.log(12)
    //         $('#skill').show()
    //     })
    //     .mouseout(() => {
    //         console.log(12)
    //         $('#skill').hide()
    //     })
    skill()
}

function skill() {
    const skill = '<div id="skill"></div>'
    $('#charts').append(skill)

    new roughViz.Pie({
        element: '#skill',
        data: {
            labels: ['javascript', 'node', 'vue', 'react'],
            values: [10, 5, 8, 3],
        },
        bowing: 0,
        colors: ['red', 'orange', 'blue', 'skyblue'],
        fillStyle: 'hachure', //'hachure' 'cross-hatch', 'zigzag','zigzag-line', 'dashed', 'solid'
        fillWeight: 0.85,
        font: 1,
        highlight: 'coral',
        innerStrokeWidth: 0.75,
        interactive: true,
        legend: true,
        legendPosition: 'right',
        margin: { top: 50, right: 20, bottom: 70, left: 100 },
        padding: 0.1,
        roughness: 1,
        simplification: 0.2,
        strokeWidth: 1,
        title: '123',
        titleFontSize: '0.2rem',
        tooltipFontSize: '0.15rem',
    })
}

export default charts
