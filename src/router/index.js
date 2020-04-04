import routes from './routes'
import Router from '@/assets/js/director.min'

function router() {
    function allroutes() {
        var route = window.location.hash.slice(2)
        var sections = $('section')
        var section

        section = sections.filter('[data-route=' + route + ']')

        if (section.length) {
            sections.hide(250)
            section.show(250)
        }
    }

    var router = Router(routes)
    router.configure({
        on: allroutes,
    })

    router.init()
}

export default router
