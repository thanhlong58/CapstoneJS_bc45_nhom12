var arrSP = [];
function layDanhSachSP() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: JSON,

    })

    promise.then(function (res) {
        console.log(res.data.content);
        var mangSP = res.data.content
        
        for (index = 0; index < mangSP.length; index++) {
            var sneaker = mangSP[index];
            arrSP.push(sneaker);
           renDerSP(arrSP);
           
           
        }
    
       
    })
    promise.catch(function (err) {
        console.log(err.data);
    })
}


layDanhSachSP()
console.log(arrSP);



function renDerSP (mangSp) {
    var htmlContent ='';

    

    for (var index= 0 ; index < mangSp.length;index++ ) {
        var sp = mangSp [index];
        htmlContent +=`
        <div class="col-md-2 col-sm-6"  onclick="window.location='./detail.html?productid=${sp.id}';">
       
        <div class="product-grid2">
            <div class="product-image2">
                <a href="#">
                    <img class="pic-1" src="${sp.image}">
                    <img class="pic-2" src="${sp.image}">
                </a>
                <ul class="social">
                    <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                    <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a style="text-decoration: none;" class="add-to-cart" href="#"  onclick= "themCart(${sp.id});return false;">Add to cart</a>
            </div>
 
            
            <div class="product-content">
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
                <h3 class="title"><a style="text-decoration: none;" href="#">${sp.name}</a></h3>
                <span class="price">${sp.price}</span>
            </div>
        </div>
    </div>
   

        `
        
    }



    document.querySelector('#dsSp').innerHTML = htmlContent;

    return htmlContent;
}

//slideshow

var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

function rotateSpinner() {
    var spinner = document.querySelector("#spinner");
    angle += 45;
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
  }
  setInterval(rotateSpinner, 3000);
//loc san pham 

document.querySelector('#chonSP').onchange = function () {
    console.log(arrSP);
    console.log(12345)
    var arrNike = [];
    var arrAdidas = [];
    var arrConverse = [];
    var arrVans = []
    var vitriChon = document.querySelector('#chonSP').value;

  for(var index = 0 ;index < arrSP.length;index++){
    const firstWord = arrSP[index].name.split(' ')[0];
    if (vitriChon == 2 && firstWord   === 'Adidas') {
       
        // console.log('samsung');
        var adidas = arrSP[index];
        arrAdidas.push(adidas);
        console.log(arrAdidas)
        // console.log('arrSamsung',arrSamsung);
         
       renDerSP(arrAdidas);
       }

    if (vitriChon == 1 && firstWord === "Nike") {
        var nike = arrSP[index];
        arrNike.push(nike);
        renDerSP(arrNike);

    }   
    if (vitriChon == 3 && firstWord === "Vans") {
        var vans = arrSP[index];
        arrVans.push(vans);
        renDerSP(arrVans);

    }   
    if (vitriChon == 4 && firstWord === "Converse") {
        var converse = arrSP[index];
        arrConverse.push(converse);
        renDerSP(arrConverse);

    }   
    if(vitriChon == 0) {
        renDerSP(arrSP);
    }
  }
   
  

}
