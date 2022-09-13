<template>


<!-- Back to top button -->
<button id="back-to-top-btn">
  <i class="fa fa-angle-double-up"></i></button>


<div class="slider">
  <div
    id="main-slider"
    class="carousel slide"
    data-ride="carousel"
  >
    <div class="carousel-inner " >

      <div  class="overlay">
        <ul data-aos="fade-down" data-aos-duration="1200" data-aos-delay="500" class="list-unstyled">
          <li><h1 >DAR AL Mubtaker</h1>
            <p><strong>DAR AL MUBTAKER</strong>  is an emerging company which is  dealing in TELECOM <br> solutions &amp; services sectors in the  Kingdom of Saudi Arabia<br> offering a high quality products &amp; services.</p>
          </li>
          <li>
            <a > <router-link   to="/about" class="about">About Us</router-link> </a>
            <a  > <router-link to="/contact" class="contact"> Contact Us</router-link></a>
          </li>
        </ul>


      </div>

      <div class="carousel-item  active">
        <img src="http://www.mubtaker.com.sa/images/slider/2.Jpg" alt="" class="img-responsive">
      </div>
      <div class="carousel-item ">
        <img src="http://www.mubtaker.com.sa/images/slider/1.jpg" alt="" class="img-responsive">
      </div>
      <div class="carousel-item ">
        <img src="http://www.mubtaker.com.sa/images/slider/3.jpg" alt="" class="img-responsive">
      </div>
      <div class="carousel-item ">
        <img src="http://www.mubtaker.com.sa/images/slider/4.jpg" alt="" class="img-responsive">
      </div>
      <div class="carousel-item ">
        <img src="http://www.mubtaker.com.sa/images/slider/5.jpg" alt="" class="img-responsive">
      </div>
      <div class="carousel-item ">
        <img src="http://www.mubtaker.com.sa/images/slider/6.jpg" alt="" class="img-responsive">
      </div>
    </div>
    <ol class="carousel-indicators">
      <li
        data-target="#main-slider"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#main-slider" data-slide-to="1"></li>
      <li data-target="#main-slider" data-slide-to="2"></li>
      <li data-target="#main-slider" data-slide-to="3"></li>
      <li data-target="#main-slider" data-slide-to="4"></li>
      <li data-target="#main-slider" data-slide-to="5"></li>
    </ol>

    <button class="carousel-control-prev" type="button" data-target="#main-slider" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#main-slider" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
 </div>
</div>

<!-- start overviwe -->

<div data-aos="fade-up"
data-aos-anchor-placement="center-bottom" data-aos-duration="1200" data-aos-delay="500" class="overviwe text-center">
  <div class="container">
    <h2 class="h1">Company Overview<hr width="15%"><hr width="10%" style="margin-top:-10PX ;"></h2>
    <p class="lead">DAR AL MUBTAKER is an emerging company which is dealing in TELECOM solutions &amp; services sectors in the Kingdom of Saudi Arabia offering a high quality products &amp; services..</p>
    <h4>Lets Start Today!!</h4>
    <a ><router-link to="/about" class="view">Viwe More</router-link></a>
  </div>
</div>
<!-- end overviwe -->

<!-- start statistics -->
<div id="statis" class="stats text-center">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-4">
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1200" data-aos-delay="500" class="card " >
          <div class="card-body">
            <i class="fa fa-users fa-fw fa-4x"></i>
            <h3 class="card-title">Our Mission </h3>
            <p class=" card-text lead">To be the leaders in our business, we stand apart from the competition by being the first in market to innovate and change the game, making our customers market leaders.</p>
            <!-- <a href="#" class="card-link">Read More</a> -->
          </div>
        </div>
      </div>
          <div class="col-md-6 col-lg-4">
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200" data-aos-delay="500" class="card " >
              <div class="card-body">
                <i class="fa fa-eye fa-fw fa-4x" aria-hidden="true"></i>
                <h3 class="card-title ">Our Vision </h3>
                <p class=" card-text lead">We will be the leaders in our business by - maintaining high quality, introducing new and innovative products, reaching every part of world, remaining customer-centric, constantly upgrading our knowledge and skills</p>
                <!-- <a href="#" class="card-link" >Read More</a> -->
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
            data-aos-duration="1200" data-aos-delay="500" class="card " >
              <div class="card-body">
                <i class="fa fa-codepen fa-fw fa-4x"></i>
                <h3 class="card-title">Our Core Values </h3>
                <p class=" card-text lead"> To listen to our customers and provide them with quality solutions, that is the best value for their money and which brings a smile to their face To be a leader, leading a team to success, exceeding expectations in the assigned tasks, or taking new initiatives that create value for the company and the customer.</p>
                <!-- <a href="#" class="card-link">Read More</a> -->
              </div>
            </div>
          </div>

    </div>
  </div>
</div>
<!-- end statistics -->



<!-- start products -->

<div data-aos="fade-up"
data-aos-anchor-placement="center-bottom" data-aos-duration="1200" data-aos-delay="500" class="produts text-center">
  <div class="container">
    <h2 class="h1">Our Products<hr width="15%"><hr width="10%" style="margin-top:-10PX ;"></h2><br>
    <div class="row" >
      <div class="col-sm-6 col-lg-3">
        <div > <img class="imag " src="http://www.mubtaker.com.sa/images/alcatellogo.jpg" style="width:70% ;"  alt="...">
        </div><br>

      </div>


      <div class="col-sm-6 col-lg-3">
        <div > <img class="imag " src="http://www.mubtaker.com.sa/images/avayalogo.jpg" style="width:40% ;" alt="...">
        </div><br>

      </div>
      <div class="col-sm-6 col-lg-3">
        <div > <img class="imag " src="http://www.mubtaker.com.sa/images/nortellogo.jpg" style="width:70% ;"  alt="...">
        </div><br>

      </div>
      <div class="col-sm-6 col-lg-3">
        <div> <img class="imag " src="http://www.mubtaker.com.sa/images/ericssonlogo.jpg" style="width:80% ; margin-bottom: 20px;" alt="...">
        </div><br>

      </div>
    </div><br><br>

    <a><router-link to="/products" class="viwe">Viwe More</router-link></a>
  </div>
</div>
<!-- end products -->
<!-- start overviwe -->

<div data-aos="fade-up"
data-aos-anchor-placement="center-bottom" data-aos-duration="1200" data-aos-delay="500" class="Services text-center">
  <div id="Services" class="Services text-center">
    <div class="container">
      <h2 class=" h1 text-center">Our Services<hr width="15%"><hr width="10%" style="margin-top:-10PX ;"></h2>
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <i class="fa fa-wifi fa-3x rounded-circle"></i>
          <h3>Network Design</h3>

        </div>
        <div class="col-sm-6 col-lg-3">
          <i class="fa fa-cogs fa-3x rounded-circle"></i>
          <h3>System Engineering</h3>

        </div>
        <div class="col-sm-6 col-lg-3">
          <i class="fa fa-wrench fa-3x rounded-circle"></i>
          <h3>Maintenance</h3>

        </div>
        <div class="col-sm-6 col-lg-3">
          <i class="fa fa-laptop fa-3x rounded-circle"></i>
          <h3>Applications</h3>

        </div>
      </div>

    </div>
        <a><router-link to="/services" class="viwe">Viwe More</router-link></a>
  </div>
</div>
<!-- end overviwe -->

<!-- start Billing -->

<div data-aos="fade-up"
data-aos-anchor-placement="center-bottom" data-aos-duration="1200" data-aos-delay="500" class="Billing text-center">
  <div class="container">
    <h2 class="h1">Billing Software<hr width="15%"><hr width="10%" style="margin-top:-10PX ;"></h2>
    <p class="lead"><strong>TELETIGER Billing Software Solutions</strong>
      TeleTiger is a Telephone Cost Management System (TCMS), sometimes called a Call Accounting System (CAS).Your company’s private telephone exchange (PABX) sends basic information to...</p><br>

          <a><router-link to="/billing" class="viwe">Viwe More</router-link></a>
  </div>
</div>
<!-- end Billing -->

<!-- start clients -->
<div  class="our-clients">
  <div class="container">
    <div class="classs">
      <ul class="list-unstyled">

        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/philips.jpg" alt="Acc">
        </li>
        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/siemens.jpg" alt="Bcc">
        </li>
        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/aastra.jpg" alt="Dcc">
        </li>
        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/alcatel.jpg" alt="Ncc">
        </li>
        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/at&t.jpg" alt="Wcc">
        </li>
        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/cisco.jpg" alt="Kcc">
        </li>
        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/mitel.jpg" alt="Kcc">
        </li>
        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/nec.jpg" alt="Kcc">
        </li>
        <li >
          <img class="img-responsive center-block" src="http://www.mubtaker.com.sa/images/slider/Panasonic.jpg" alt="Kcc">
        </li>


      </ul>



    </div>
  </div>
</div>

<!-- end clients -->
<footerBar></footerBar>
</template>z

<script>
// @ is an alias to /src
 import footerBar from '@/components/footerBar.vue'


export default {
  name: 'HomeView',
   components: {
    footerBar,
 
}
}
</script>
<style>

* {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}


/* start slider */

.slider {
  background-color: #ddd;


}

@media(max-width:768px) {
  .slider .carousel-inner {


    max-width: 100%;

    text-align: center;


  }

}
.slider .carousel-inner .overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(0, 0, 0 , 0.6);
  z-index: 1;
  justify-content: center;
  }
  .slider .carousel-inner .overlay ul li h1{
    color: white;
    font-size: 50px;
    /* font-weight: bold; */
    text-align: center;
    margin-bottom: 20px;
    text-transform: capitalize;

  }
   @media(max-width:768px) {
    .slider .carousel-inner .overlay ul li h1{

      font-size: 40px;
      margin-bottom: 20px;


    }
    }
    .slider .carousel-inner .overlay ul li p {
    color: #fff;
      margin-bottom: 50px;
      font-size: 18px;
      letter-spacing: 1px;
      line-height: 1.6rem;

    }
      @media(max-width:768px) {
    .slider .carousel-inner .overlay ul li p{
      font-size: 15px;

      


    }
    }
    .slider .carousel-inner .overlay ul li .about{
      color: #fff;
      text-decoration: none;
      background-color: #ed1d24;
      padding: 11px 30px;
      font-size: 20px;
      font-weight: bold;
      margin-top: 15px;
      margin-left: 19px;
      border-radius: 5px;

    }
    .slider .carousel-inner .overlay ul li .about:hover{
      background-color: #a02222;
    }
    .slider .carousel-inner .overlay ul li .contact{
      color: #fff;
      text-decoration: none;
      background-color: #08526d;
      padding: 11px 30px;
      font-size: 20px;
      font-weight: bold;
      margin-top: 15px;
      margin-left: 19px;
      border-radius: 5px;

    }
    .slider .carousel-inner .overlay ul li .contact:hover{
      background-color: #144254;
    }



.slider .carousel-item {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.slider .carousel-item .img-responsive{
  width: 100%;
}



.slider .carousel-indicators li {
  width: 19PX;
  height: 15px;
  margin-left: 10px;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 15px;

}
.slider .carousel-indicators li.active{
  background-color: #ed1d24;


}
.slider .carousel .carousel-control-prev-icon:hover{
  color: #ed1d24 ;
}

/* end slider */

#back-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  font-size: 30px;
  width: 50px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  color: #ed1d24;
  cursor: pointer;
  outline: none;
  border: 2px solid #ed1d24;
  border-radius: 50%;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  transition-property: background-color, color;
  padding: 0px;
  z-index: 2;

}

#back-to-top-btn:hover,
#back-to-top-btn:focus {
  color: #fff;
  background-color: #ed1d24;
  border-color: #fff;
}
/* end backtotop */


/* start overviwe */
.overviwe{
  padding: 100px;
  background-color: rgb(255, 255, 255);
}
.overviwe h2{
  font-size: 50px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 30px;
}
@media(max-width:992px){
  .overviwe h2{
    font-size: 25px;
    margin-bottom: 15px;
  }

}
.overviwe p{
  line-height: 2;
  font-size: 20px;
  width: 80%;
  margin: 0 auto 15px;
  color: #6a6a6a;
}
@media(max-width:992px){

  .overviwe p{
    font-size: 15px;
    width: 100%;

  }
}
.overviwe h4{
  letter-spacing: 2px;
  font-weight: normal;
  color: #8b8a8a;
  margin-bottom: 50px;
}
.overviwe  a.view {
  color: #fff !important;
  text-decoration: none;
  background-color: #ed1d24;
  padding: 11px 30px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #fff;

}
.overviwe a:hover{
    background-color: #08526d;
    /* color: #fff; */
    text-decoration: none;
}
 /* end overviwe */


  /* start statistics */

  .stats{
    padding: 100px 0;
    background-color:#eee;

  }

  .stats span{
    display: block;
    font-size: 50px;
    font-weight: bold;

  }
  .stats  .card .fa{
    margin-bottom: 20px;
    margin-top: 10px;
    padding: 18px 0px 18px 0px;
    color:#08526d;
    background-color: #ffffff;
    border-radius: 50%;
    font-size: 60px;
  }
  .stats  .card{
   height: 460px;
   margin-bottom: 28px;

  }
  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}
  .stats  .card:hover {
    box-shadow: 5px 10px 12px #6a6a6a ,
    -5px -10px 12px #6a6a6a;

  }
  .stats  .card:hover .fa {
    background-color: #08526d;
    color: #fff;


  }


  .stats p{

    font-size: 18px;
    margin-bottom: 25px;



  }
  .stats  .card a{
    margin-top: 10px;
    background-color:#fff;
    border: 1px solid #08526d;
    border-radius: 18px;
    padding: 10px 17px 10px 17px;
    font-weight: bold;
    color: #08526d;
  }
  .stats  .card a:hover{
    background-color:#08526d;
    color: #fff;
  }



  /* end statistics */


 /* start produts */
.produts{
  padding: 100px 0;
  background-color: #ffffff;
}

.produts .imag{
  border-radius: 15px;
;
}
.produts h2{
  font-size: 50px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 80px;
}
.produts h3{
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 80px;
}
@media(max-width:992px){
  .produts h2{
    font-size: 30px;
    margin-bottom: 15px;


  }
}
.produts p{
  line-height: 2;
  font-size: 20px;
  width: 80%;
  margin: 0 auto 15px;
  color: #6a6a6a;
}
@media(max-width:992px){

  .produts p{
    font-size: 18px;
    width: 100%;

  }
}

.produts .imag{

  width: 30%;

}
@media(max-width:500px){

  .produts .imag{

    width: 30%;

  }
}
.produts h4{
  letter-spacing: 2px;
  font-weight: normal;
  color: #8b8a8a;
  margin-bottom: 50px;
}
.produts  .viwe {
  color: #fff;
  text-decoration: none;
  background-color: #ed1d24;
  padding: 11px 30px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #fff;
  margin-bottom:-40px;
}
.produts a:hover{
    background-color: #08526d;
    color: #fff;
    text-decoration: none;
}
 /* end produts */

/* start Services */

.Services{
  padding: 27px 0 40px 0;
  background-color: #eee;
}
.Services i{
  background-color: #08526d;
  color: white;
  padding: 12px;
  margin-bottom: 10px;

}
.Services h2{
  font-size: 50px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 80px;
  margin-top: 40px;
}
.Services h3{
  color: #08526d;
  font-size: 22px;
  margin-bottom: 100px;
}

.Services  .viwe{
  color: #fff;
  text-decoration: none;
  background-color: #ed1d24;
  padding: 11px 30px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #fff;
  margin-bottom:-40px;
}
.Services a:hover{
    background-color: #08526d;
    color: #fff;
    text-decoration: none;
}
 /* end Services */

 /* start Billing */
.Billing{
  padding: 100px;
  background-color: #ffffff;
}
.Billing h2{
  font-size: 50px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 30px;
}
@media(max-width:992px){
  .Billing h2{
    font-size: 30px;
    margin-bottom: 15px;
     width: 105%;

  }
}
.Billing p{
  line-height: 2;
  font-size: 20px;
  width: 80%;
  margin: 0 auto 15px;
  color: #6a6a6a;
}
@media(max-width:992px){

  .Billing p{
    font-size: 18px;
    width: 100%;

  }
}
.Billing h4{
  letter-spacing: 2px;
  font-weight: normal;
  color: #8b8a8a;
  margin-bottom: 50px;
}

.Billing  .viwe {
  color: #fff;
  text-decoration: none;
  background-color: #ed1d24;
  padding: 11px 30px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #fff;
  margin-bottom:-40px;
}
.Billing a:hover{
    background-color: #08526d;
    color: #fff;
    text-decoration: none;
}
/* end Billing */

/* start ourclients */
.our-clients

{
    background: #EEE;
    padding-top: 20px;
    padding-bottom: 20px;


}
.classs{
  padding: 40px 0;
  width: 600px;
  margin: auto;
 overflow: hidden;
}
@media(max-width:768px){
  .classs{

    width: 480px;
    margin-bottom:-10px;

  }
}
.our-clients ul{
  width: 2000px;
  position: relative;
  animation: sliding 7s ease infinite;
}
.our-clients ul:hover{
  animation-play-state: paused;
}
.our-clients ul li{
  float: left;
  position: relative;
  padding: 20px;
  cursor: pointer;
}

@keyframes sliding{
  0%{left: 0;}
  20%{left: -300px;}
  40%{left: -600px;}
  60%{left: -1200px;}
  80%{left: -1200px;}

}
.our-clients img
{

    filter: alpha(opacity=40);
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 50%;
}
.our-clients img:hover
{
    opacity: 1;
    -webkit-transition: all 0.5s ease;
   -moz-transition: all 0.5s ease;
   -o-transition: all 0.5s ease;
   transition: all 0.5s ease;
}
/* end ourclients */



</style>