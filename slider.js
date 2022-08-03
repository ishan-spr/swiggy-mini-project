(
    function () {
        let sliderData = [
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym',
        ]
        let currOffset = 0 

        function getOffSets(el) {
            let coordinates = el.getBoundingClientRect()
            return { left: coordinates.left, right: coordinates.right }
        }

        let leftBtn = document.querySelector('.carousel-btn[data-direction="left"]')
        let rightBtn = document.querySelector('.carousel-btn[data-direction="right"]')
        let carouselWrapper = document.querySelector('.carousel-wrapper')

        sliderData.forEach(slider=>{
            let slide = document.createElement('div')
            slide.classList.add('carousel-card')
            let img = document.createElement('img')
            img.setAttribute('src',slider)
            slide.appendChild(img)
            carouselWrapper.appendChild(slide)
        })

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
