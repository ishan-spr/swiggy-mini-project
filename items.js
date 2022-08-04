(
    function(){

        let data = [
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/gfkicyyqxr0aegwrtyfh',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/crumbigyyv72dwoepcxx',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/soafwfvm6b7narqfemmu',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ghswgwzuh0lo8k4dn51m',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/j2vhfamlnsk70zk1qhxb',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/yiz4d7ztgtinx2xygbr5',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/vts5euhkwodjpaq45nnm',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ghswgwzuh0lo8k4dn51m',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/qfc7iuzrsckx4hujzujp'
        ]

        function createNewCard(url){
            let itemsCard = document.createElement('div');
            itemsCard.classList.add('items-card')
    
            let itemImage = document.createElement('div')
            itemImage.classList.add('item-image')
    
            let img = document.createElement('img')
            img.setAttribute('src',url)
            itemImage.appendChild(img)
    
            let itemDetail = document.createElement('div')
            itemDetail.classList.add('item-detail')
            
            let itemTitle = document.createElement('p')
            itemTitle.classList.add('item-title')
            itemTitle.innerText = "Natutal Ice Cream"
            itemDetail.appendChild(itemTitle)
    
            let itemCusine = document.createElement('p')
            itemCusine.classList.add('item-cuisine')
            itemCusine.innerText ="Desserts"
            itemDetail.appendChild(itemCusine)
    
            let deliveryDetail = document.createElement('p')
            deliveryDetail.classList.add('delivery-detail')
            
            let rating = document.createElement('span')
            rating.classList.add('rating')
            rating.innerText=4
            deliveryDetail.appendChild(rating)
    
            let dotBefore = document.createElement('span')
            dotBefore.innerText='.'
            deliveryDetail.appendChild(dotBefore)
    
            let time = document.createElement('span')
            time.innerText = '25 Mins'
            time.classList.add('time')
            deliveryDetail.appendChild(time)
            deliveryDetail.appendChild(dotBefore)
    
            let cost = document.createElement('span')
            cost.classList.add('cost')
            cost.innerText = "₹400 for two"
            deliveryDetail.appendChild(cost)
    
            itemDetail.appendChild(deliveryDetail)
    
            let itemOffer = document.createElement('p')
            itemOffer.classList.add('item-offer')
            itemOffer.innerText="50% off | Use welcome20"
            itemDetail.appendChild(itemOffer)
    
            let quickView = document.createElement('div')
            quickView.classList.add('order-item')
            let pTag = document.createElement('p')
            pTag.innerText ="Ouick view"
            quickView.appendChild(pTag)
    
            itemsCard.appendChild(itemImage)
            itemsCard.appendChild(itemDetail)
            itemsCard.appendChild(quickView)

            return itemsCard
        }

        let itemsGrid = document.querySelector('.items-grid')

        data.forEach((img)=>{
            itemsGrid.appendChild(createNewCard(img))
        })
    }
)()