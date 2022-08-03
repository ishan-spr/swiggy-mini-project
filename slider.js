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
            let carouselItems = document.querySelectorAll('.carousel-card')
            let width = carouselItems[0].offsetWidth + 23;
            let carouselOffsets = getOffSets(carouselWrapper)
            if( Math.ceil(carouselOffsets.left) + 10 <= Math.ceil(getOffSets(carouselItems[0]).left)){
                leftBtn.style.visibility = 'hidden'   
            }else{
                rightBtn.style.visibility='visible'
            }

            carouselWrapper.scrollBy(-width,0)
        })

        rightBtn.addEventListener('click', () => {
            let carouselItems = document.querySelectorAll('.carousel-card')
            let carouselOffsets = getOffSets(carouselWrapper)
            
            if(Math.ceil(carouselOffsets.right) - 10 >= Math.ceil(getOffSets(carouselItems[carouselItems.length -1]).right)){
                rightBtn.style.visibility = 'hidden'   
            }else{
                leftBtn.style.visibility='visible'
            }
         
            let width = carouselItems[0].offsetWidth + 23;
            carouselWrapper.scrollBy(width,0)
        })
    }
)()