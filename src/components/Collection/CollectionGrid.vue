<template>
  <div>
    <div class="filters m-4 justify-content-evenly d-flex">
      <div>
        <input type="text" placeholder=" Search" value="" />
      </div>
      <div>
        <button class="btn btn-light me-2">Reset</button>
        <button class="btn btn-light">Filters</button>
      </div>
    </div>

     <!-- <div class="container d-flex flex-nowrap" style="padding-bottom: 20%; overflow: auto;">
        <div class="d-flex flex-nowrap overflow-auto">
            <div class="d-flex flex-column align-items-center justify-content-center border border-1 me-2">
                <router-link to="/ProductPage"  class="text-dark" style="text-decoration: none;">
                <div>
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-sports-bra-in-stone-blue-with-racerback-734363.jpg" alt="" style="height:300px;">
                </div>
                </router-link>
                <div class="colors d-flex">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="card-text d-flex overflow-auto">
                    <button class="btn btn-light border border-1 m-2">S</button>
                    <button class="btn btn-light border border-1 m-2">M</button>
                    <button class="btn btn-light border border-1 m-2">L</button>
                    <button class="btn btn-light border border-1 m-2">XL</button>
                    <button class="btn btn-light border border-1 m-2">XXL</button>
                </div>
                <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center border border-1 me-2">
                <div class="me-2">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-racerback-sports-bra-in-yellow-205324.jpg" alt="" style="height:300px;">
                </div>
                <div class="colors d-flex">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="card-text d-flex overflow-auto">
                    <button class="btn btn-light border border-1 m-2">S</button>
                    <button class="btn btn-light border border-1 m-2">M</button>
                    <button class="btn btn-light border border-1 m-2">L</button>
                    <button class="btn btn-light border border-1 m-2">XL</button>
                    <button class="btn btn-light border border-1 m-2">XXL</button>
                </div>
                <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
            </div>    
            <div class="d-flex flex-column align-items-center justify-content-center border border-1 me-2">
                <div class="me-2">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-racerback-sports-bra-in-yellow-205324.jpg" alt="" style="height:300px;">
                </div>
                <div class="colors d-flex">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="card-text d-flex overflow-auto">
                    <button class="btn btn-light border border-1 m-2">S</button>
                    <button class="btn btn-light border border-1 m-2">M</button>
                    <button class="btn btn-light border border-1 m-2">L</button>
                    <button class="btn btn-light border border-1 m-2">XL</button>
                    <button class="btn btn-light border border-1 m-2">XXL</button>
                </div>
                <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
            </div>    
        </div>
        
    </div>
    
    <div class="container d-flex flex-nowrap" style="padding-bottom: 20%; overflow: auto;">
        <div class="d-flex flex-nowrap overflow-auto">
            <div class="d-flex flex-column align-items-center justify-content-center border border-1 me-2">
                <router-link to="/ProductPage"  class="text-dark" style="text-decoration: none;">
                <div>
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-sports-bra-in-stone-blue-with-racerback-734363.jpg" alt="" style="height:300px;">
                </div>
                </router-link>
                <div class="colors d-flex">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="card-text d-flex overflow-auto">
                    <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                </div>
                <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center border border-1 me-2">
                <div class="me-2">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-racerback-sports-bra-in-yellow-205324.jpg" alt="" style="height:300px;">
                </div>
                <div class="colors d-flex">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="card-text d-flex overflow-auto">
                   <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                </div>
                <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
            </div>    
            <div class="d-flex flex-column align-items-center justify-content-center border border-1 me-2">
                <div class="me-2">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-racerback-sports-bra-in-yellow-205324.jpg" alt="" style="height:300px;">
                </div>
                <div class="colors d-flex">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="card-text d-flex overflow-auto">
                    <button class="btn btn-light border border-1 m-2">S</button>
                    <button class="btn btn-light border border-1 m-2">M</button>
                    <button class="btn btn-light border border-1 m-2">L</button>
                    <button class="btn btn-light border border-1 m-2">XL</button>
                    <button class="btn btn-light border border-1 m-2">XXL</button>
                </div>
                <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
            </div>    
        </div>
        
    </div>  -->

    <!-- <div class="maint-container mb-4">
        <div class="cotainer d-flex overflow-auto">
            <div class="d-flex flex-column align-items-center justify-content-center w-50" style="margin:0 10px;">
                <router-link to="/ProductPage"  class="text-dark" style="text-decoration: none;">
                <div class="img">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-sports-bra-in-stone-blue-with-racerback-734363.jpg" alt="" style="height:250px;">
                </div>
            </router-link>
                <div class="colors">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="size">
                    <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                </div>
                <div class="para">
                    <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center w-50" style="margin:0 10px;">
                <div class="img">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-racerback-sports-bra-in-yellow-205324.jpg" alt="" style="height:250px;">
                </div>
                <div class="colors">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="size">
                    <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                </div>
                <div class="para">
                    <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center w-50" style="margin:0 10px;">
                <div class="img">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-pretty-florals-two-piece-swimsuit-in-multicolour-784300.jpg" alt="" style="height:250px;">
                </div>
                <div class="colors">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="size">
                    <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                </div>
                <div class="para">
                    <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
        </div>
    </div>
    <div class="maint-container mb-4">
        <div class="cotainer d-flex overflow-auto">
            <div class="d-flex flex-column align-items-center justify-content-center w-50" style="margin:0 10px;">
                <div class="img">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-sports-bra-in-stone-blue-with-racerback-734363.jpg" alt="" style="height:250px;">
                </div>
                <div class="colors">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="size">
                    <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                </div>
                <div class="para">
                    <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center w-50" style="margin:0 10px;">
                <div class="img">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-racerback-sports-bra-in-yellow-205324.jpg" alt="" style="height:250px;">
                </div>
                <div class="colors">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="size">
                    <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                </div>
                <div class="para">
                    <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center w-50" style="margin:0 10px;">
                <div class="img">
                    <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-pretty-florals-two-piece-swimsuit-in-multicolour-784300.jpg" alt="" style="height:250px;">
                </div>
                <div class="colors">
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                    <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                </div>
                <div class="size">
                    <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                    <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                </div>
                <div class="para">
                    <p class="text-center mt-2">PRICE - 499 / pc </p>
                <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
        </div>
    </div> -->

    <div class="container">
        <div class="row gx-2 mb-2">
            <div class="col-6">
                <div class=" border bg-light d-flex flex-column align-items-center">
                    <router-link to="/ProductPage"  class="text-dark" style="text-decoration: none;">
                        <div>
                            <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-sports-bra-in-stone-blue-with-racerback-734363.jpg" alt="" class="card-img-top" >
                        </div>
                        </router-link>
                        <div class="colors d-flex">
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                        </div>
                        <div class="card-text d-flex overflow-auto">
                            <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                        </div>
                        <p class="text-center mt-2 mb-1">PRICE - 499 / pc </p>
                        <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
            <div class="col-6">
                <div class="border bg-light d-flex flex-column align-items-center">
                    <router-link to="/ProductPage"  class="text-dark" style="text-decoration: none;">
                        <div>
                            <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-printed-racerback-active-sports-bra-in-black-903487.jpg" alt="" class="card-img-top">
                        </div>
                    </router-link>
                        <div class="colors d-flex">
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                        </div>
                        <div class="card-text d-flex overflow-auto">
                            <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                        </div>
                        <p class="text-center mt-2 mb-1">PRICE - 499 / pc </p>
                        <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
        </div>
        <div class="row gx-2">
            <div class="col-6">
                <div class=" border bg-light d-flex flex-column align-items-center">
                    <router-link to="/ProductPage"  class="text-dark" style="text-decoration: none;">
                        <div>
                            <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-text-graphic-print-sports-bra-with-racerback-design-in-black-333970.jpg" alt="" class="card-img-top">
                        </div>
                        </router-link>
                        <div class="colors d-flex">
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                        </div>
                        <div class="card-text d-flex overflow-auto">
                            <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                        </div>
                        <p class="text-center mt-2 mb-1">PRICE - 499 / pc </p>
                        <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
            <div class="col-6">
                <div class="border bg-light d-flex flex-column align-items-center">
                    <router-link to="/ProductPage"  class="text-dark" style="text-decoration: none;">
                        <div>
                            <img src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-medium-impact-padded-paint-splatter-print-racerback-sports-bra-in-black-883885.jpg" alt="" class="card-img-top">
                        </div>
                    </router-link>
                        <div class="colors d-flex">
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: yellow" ></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: hotpink"></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: red"></button>
                            <button class="rounded-circle m-2 border-0" style="height: 15px; width: 15px; background-color: black"></button>
                        </div>
                        <div class="card-text d-flex overflow-auto">
                            <a href="" class="me-2" style="text-decoration: none;color: black;">S</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">M</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">L</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">XL</a>
                            <a href="" class="me-2" style="text-decoration: none;color: black;">XXL</a>
                        </div>
                        <p class="text-center mt-2 mb-1">PRICE - 499 / pc </p>
                        <p class="text-center mt-2">MOQ - 10 pcs</p>
                </div>
            </div>
        </div>
        
    </div>
    
    
  </div>
</template>
<script>
export default {
  name: "CollectionGrid",
};
</script>
<style>

</style>
