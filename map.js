const tooltip = document.querySelector('.tooltip')
const regions = document.querySelectorAll('.region')
const popupBg = document.querySelector('.popup-background')
const popup = document.querySelector('.popup')

regions.forEach(region => {

    region.addEventListener('click', function() {
        popup.querySelector('.popup-text').innerHTML = this.dataset.title
        popupBg.classList.add('active')
    })


    region.addEventListener('mousemove', function(event){
        tooltip.innerHTML = this.dataset.title;
        tooltip.style.top = (event.y + 20) + 'px';
        tooltip.style.left = (event.x + 20) + 'px';
    })

    region.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block'
        region.classList.add('active')
    })

    region.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none'
        region.classList.remove('active')
    })

})

document.addEventListener('click', (e) => {
    if (e.target === popupBg)
        popupBg.classList.remove('active')
})