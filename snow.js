// const flake_url = 'http://usefulscript.ru/image/snow/the_snow.gif'
const flake_url = 'https://1.downloader.disk.yandex.ru/preview/f129698ccebaa165e1fddb7caad4d5d8e9159bcadbc39f22696b1b989dfa388a/inf/s1GfirPr6cwz-LGA0N4Q9OWaM4qXveXvTHidPLbcVdtr-VxPQnzlcomLJLUsBWzMhr9P2xeyH10NyTiFT2NvUQ==?uid=374864132&filename=flake.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&owner_uid=374864132&size=1349x657'

const new_flake = () => {
    const flake = document.createElement('img')
    flake.style.position = 'absolute'
    flake.style.height = '32px'
    flake.style.width = '32px'
    flake.style.top = `0%`
    flake.style.zIndex = '1000'
    flake.style.transition = 'all 0.5s'
    flake.className = 'flake'
    flake.style.left = `${10 + parseInt(Math.random() * 80)}%`
    flake.src = flake_url
    return flake
}

let flake_iterator = 0
setInterval(() => {
    flake_iterator++
    if (flake_iterator % 4 == 0) {
        const flake = new_flake()
        document.body.appendChild(flake)
    }
    const dom_flakes = document.querySelectorAll('.flake')
    dom_flakes.forEach(f => {
        let curr_h = +f.style.top.split('%')[0]
        let curr_left = +f.style.left.split('%')[0]
        curr_h += 1.0
        if (Math.random() > 0.5) {
            curr_left += 0.2
        } else {
            curr_left -= 0.2
        }
        f.style.top = `${curr_h}%`
        f.style.left = `${curr_left}%`
        if (curr_h >= 100) f.remove()  
    })
}, 100)
