const tooltip = document.querySelector('.tooltip')
const regions = document.querySelectorAll('.region')

regions.forEach(region => {
    region.addEventListener('mousemove', function(event){
        tooltip.innerHTML = region.dataset.title;
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