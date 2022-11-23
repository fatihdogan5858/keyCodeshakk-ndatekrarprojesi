const insert = document.getElementById("insert")

window.addEventListener('keydown', (event) => {/**window içerinde bir etkinlik gerçekleşsin ve bu bir tuşa bastığımızda gerçekleşsin keydown: tuş takımı , key:tuş down : aşağı  */
    console.log(event)    
    
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
`
})

// not: ${event.key === ' ' ? 'Space' : event.key}
// event.key: bana burda event olduğu zaman bir etkinlik olduğu zaman keyi getir
// space tuşuna bastığımızda boş bir değer gelir bunu istemiyorsak === ''  yazarız
//     === '' ? "space" : event.key :eğer boş tuş space gelir ise(?) içine space yi aktar VideoColorSpace(: ) event.key
