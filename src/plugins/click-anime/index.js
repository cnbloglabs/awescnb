/**
 * Disabled!
 */
import { animeJs } from 'constants/libs'
import { clickConfig } from 'options/plugins'
import { userAgent, loadScript } from 'utils/helpers'

/**
 * 构建点击特效
 * @param {*} options
 */
function build(options) {
    const anime = window.anime
    if (options.enable && userAgent() === 'pc') {
        $('body').append(`<canvas id="click-effects"></canvas>`)
        window.human = false
        let canvasEl = document.querySelector('#click-effects')
        let ctx = canvasEl.getContext('2d')
        let numberOfParticules = options.maxCount
        let pointerX = 0
        let pointerY = 0

        let tap =
            'ontouchstart' in window || navigator.msMaxTouchPoints
                ? 'touchstart'
                : 'mousedown'

        let colors = options.colors.length
            ? options.colors
            : ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C']

        const clickEffects = () => {
            canvasEl.style.position = 'fixed'
            canvasEl.style.top = 0
            canvasEl.width = window.innerWidth * 2
            canvasEl.height = window.innerHeight * 2
            canvasEl.style.width = window.innerWidth + 'px'
            canvasEl.style.height = window.innerHeight + 'px'
            canvasEl.getContext('2d').scale(2, 2)
        }

        const updateCoords = e => {
            pointerX = e.clientX || e.touches[0].clientX
            pointerY = e.clientY || e.touches[0].clientY
        }

        const setParticuleDirection = p => {
            let angle = (anime.random(0, 360) * Math.PI) / 180
            let value = anime.random(50, 180)
            let radius = [-1, 1][anime.random(0, 1)] * value
            return {
                x: p.x + radius * Math.cos(angle),
                y: p.y + radius * Math.sin(angle),
            }
        }

        const createParticule = (x, y) => {
            let p = {}
            p.x = x
            p.y = y
            p.color = colors[anime.random(0, colors.length - 1)]
            p.radius = anime.random(16, 32)
            p.endPos = setParticuleDirection(p)
            p.draw = function() {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
                ctx.fillStyle = p.color
                ctx.fill()
            }
            return p
        }

        const createCircle = (x, y) => {
            let p = {}
            p.x = x
            p.y = y
            p.color = '#FFF'
            p.radius = 0.1
            p.alpha = 0.5
            p.lineWidth = 6
            p.draw = function() {
                ctx.globalAlpha = p.alpha
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
                ctx.lineWidth = p.lineWidth
                ctx.strokeStyle = p.color
                ctx.stroke()
                ctx.globalAlpha = 1
            }
            return p
        }

        const renderParticule = anim => {
            for (let i = 0; i < anim.animatables.length; i++) {
                anim.animatables[i].target.draw()
            }
        }

        const animateParticules = (x, y) => {
            let circle = createCircle(x, y)
            let particules = []
            for (let i = 0; i < numberOfParticules; i++) {
                particules.push(createParticule(x, y))
            }
            anime
                .timeline()
                .add({
                    targets: particules,
                    x(p) {
                        return p.endPos.x
                    },
                    y(p) {
                        return p.endPos.y
                    },
                    radius: 0.1,
                    duration: anime.random(1200, 1800),
                    easing: 'easeOutExpo',
                    update: renderParticule,
                })
                .add({
                    targets: circle,
                    radius: anime.random(80, 160),
                    lineWidth: 0,
                    alpha: {
                        value: 0,
                        easing: 'linear',
                        duration: anime.random(600, 800),
                    },
                    duration: anime.random(1200, 1800),
                    easing: 'easeOutExpo',
                    update: renderParticule,
                    offset: 0,
                })
        }

        const render = anime({
            duration: Infinity,
            update() {
                ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
            },
        })

        document.addEventListener(
            tap,
            function(e) {
                window.human = true
                render.play()
                updateCoords(e)
                animateParticules(pointerX, pointerY)
            },
            false,
        )

        const autoClick = () => {
            let centerX = window.innerWidth / 2
            let centerY = window.innerHeight / 2
            if (window.human) return
            animateParticules(
                anime.random(centerX - 50, centerX + 50),
                anime.random(centerY - 50, centerY + 50),
            )
            anime({
                duration: 200,
            }).finished.then(autoClick)
        }

        if (options.auto) autoClick()
        window.addEventListener('resize', clickEffects, false)
        clickEffects()
    }
}

export default (theme, devOptions) => {
    const options = clickConfig(devOptions)
    loadScript(animeJs, () => {
        build(options)
    })
}
