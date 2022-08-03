(
    function(){
        let topNav = document.querySelector('.header')
        let midNav = document.querySelector('.items-nav')
        window.addEventListener('scroll',()=>{

            let scrollHeight = window.pageYOffset
            let itemsHeaderOffset = midNav.getBoundingClientRect().top;

            console.log(scrollHeight,itemsHeaderOffset)

            if(scrollHeight <= itemsHeaderOffset){
                if(!topNav.classList.contains('fix_at_top')){
                    topNav.classList.add('fix_at_top')
                }
                if(midNav.classList.contains('fix_at_top')){
                    midNav.classList.remove('fix_at_top')
                }
            }else{
                if(!midNav.classList.contains('fix_at_top')){
                    console.log('hi',midNav.classList.contains('fix_at_top'))
                    midNav.classList.add('fix_at_top')
                }
                if(topNav.classList.contains('fix_at_top')){
                    console.log('hello')
                    topNav.classList.remove('fix_at_top')
                }
            }
        })
    }
)()