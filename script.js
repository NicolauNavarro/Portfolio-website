
const label = document.querySelector('.label')
const hiddenEl = document.querySelectorAll('.apearAfter')
const me = document.querySelector('.me')

me.addEventListener('mouseenter', () => {
    label.style.opacity = '0'
    label.addEventListener('transitionend', () =>{
        label.style.display = 'none'
    })
    setTimeout(() => {
        hiddenEl.forEach(element => {
            element.style.display = 'flex'
            setTimeout(() => {
                element.style.opacity = '1'
            }, 500);
        });
    }, 500);
});


me.addEventListener('mouseout', () => {
    hiddenEl.forEach(element => {
        element.style.opacity = '0'
        element.addEventListener('transitionend', () =>{
            element.style.display = 'none'
        })
    });

    setTimeout(() => {
        label.style.display = 'flex'
        setTimeout(() => {
            label.style.opacity = '1'
        }, 500);
    }, 500);
});
