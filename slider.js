(
    function () {
        let currOffset = 0 

        function getOffSets(el) {
            let coordinates = el.getBoundingClientRect()
            return { left: coordinates.left, right: coordinates.right }
        }

        let leftBtn = document.querySelector('.carousel-btn[data-direction="left"]')
        let rightBtn = document.querySelector('.carousel-btn[data-direction="right"]')

        let carouselWrapper = document.querySelector('.carousel-wrapper')
        leftBtn.addEventListener('click', () => {
            
            let carouselOffsets = getOffSets(carouselWrapper)
            let carouselItems = document.querySelectorAll('.carousel-card')

            if(carouselOffsets.right >= getOffSets(carouselItems[carouselItems.length -1]).right){
                leftBtn.style.visibility = 'hidden'   
            }else{
                rightBtn.style.visibility='visible'
            }
         
            let width = carouselItems[0].offsetWidth + 23;
            currOffset = currOffset - width
            for(let item of carouselItems){
                item.style.transform = `translateX(${currOffset}px)`
                item.style.transitionDuration = "1s"
            }
        })
        rightBtn.addEventListener('click', () => {

            let carouselItems = document.querySelectorAll('.carousel-card')
            let width = carouselItems[0].offsetWidth + 23;
            let carouselOffsets = getOffSets(carouselWrapper)
            if(getOffSets(carouselItems[1]).right >= carouselOffsets.right){
                rightBtn.style.visibility = 'hidden'               
            }else{
                leftBtn.style.visibility='visible'
            }
            currOffset = currOffset + width
            for(let item of carouselItems){
                item.style.transform = `translateX(${currOffset}px)`
            }
        })
    }
)()