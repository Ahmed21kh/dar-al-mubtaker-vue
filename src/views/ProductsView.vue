<template>
    
    <!-- start products -->
<div id="latest-post" class="products ">
  <div class="container">
    <h2 class="text-center">Our Products</h2>
    <br>
    <div class="row">

      <div class="col-md-6 col-lg-4">
        <div class="card " >
          <img src="http://www.mubtaker.com.sa/images/alcatellogo.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">ALCATEL </h5>
            <p class=" card-text">							Alcatel-Lucent is the trusted transformation  partner of service providers, enterprises, strategic industries such as defense,energy, healthcare and transportation, worldwide, providing solutions to deliver voice, data and video communication services to end-users. A leader in fixed, mobile and converged broadband networking, IP and optics technologies,applications and services, Alcatel-Lucent leverages the unrivaled technical and scientific expertise of Bell Labs,one of the largest innovation powerhouses in the communications industry.</p>

          </div>
        </div>
      </div>


      <div class="col-md-6 col-lg-4">
        <div class="card " >
          <img src="http://www.mubtaker.com.sa/images/avayalogo.jpg" style="width:40% ; padding: 0px 0px 0px 19px;"  class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">AVAYA</h5>
            <p class=" card-text">Avaya is a leading global provider of next-generation business collaboration and communications solutions, providing unified communications, real-time video collaboration, contact center, networking and related services to companies of all sizes around the world. Avaya helps our customers bring people together with the right information at the right time in the right context, enabling business users to improve their efficiency and quickly solve critical business challenges. Because our solutions are based on open standards</p>

          </div>
        </div>
      </div>


      <div class="col-md-6 col-lg-4">
        <div class="card " >
          <img src="http://www.mubtaker.com.sa/images/nortellogo.jpg" style="width:60% ;padding: 18px 0 8px 19px;"  class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">NORTEL</h5>
            <p class="  card-text">Ericsson is a world leading provider of telecommunications equipment and services to mobile and fixed network operators. Ericsson is one of the company in worldwide that can offer end-to-end solutions for all major mobile communication standards. Ericssons networks, telecom services and multimedia solutions make it easier for people, across the world, to communicate. And as communication changes the way we live and work, Ericsson is playing a key role in this evolution. Using innovation to empower people, business and society
						</p>

          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="card " >
          <img src="http://www.mubtaker.com.sa/images/ericssonlogo.jpg" style="width:60% ;padding: 18px 0 8px 19px;"  class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">ERICSSON </h5>
            <p class=" card-text">Avaya is a global leader in enterprise communications systems. The company provides unified communications, contact centers, data solutions and related services directly and through its channel partners to leading businesses and organizations around the world. Enterprises of all sizes depend on Avaya for state-of-the-art communications that improve efficiency, collaboration, customer service and competitiveness.</p>

          </div>
        </div>
      </div>


      <div class="col-md-6 col-lg-4">
        <div class="card " >
          <img src="http://www.mubtaker.com.sa/images/Aastralogo.jpg" style="width:60% ;padding: 0px 0 1px 10px;"  class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">AASTRA</h5>
            <p class=" card-text">Aastra is a leading company at the forefront of the enterprise communication Aastra develops and delivers innovative communications products and applications for businesses. With a strong focus on open standards, Aastra enables enterprises to communicate and collaborate more efficiently. Aastras operations are truly.</p>

          </div>
        </div>
      </div>


      <div class="col-md-6 col-lg-4">
        <div class="card " >
          <img src="http://www.mubtaker.com.sa/images/panasonic.jpg" style="width:60% ;padding: 18px 0 13px 19px;"  class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">PANASONIC</h5>
            <p class="  card-text ">Panasonic  introduces Office Communication Systems, such as PBXs, Voice Mail Systems, and others. It offers a wide range of office communication system from conventional analogue compatible models to digital full IP system models. Select the model that best matches the usage and special needs of your office.
						</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- end products -->


</template>

<script>
export default {
  mounted(){
    window.scrollTo(0,0)
  }
}
</script>
<style>
*{
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.card-body
{
  text-align: center;
  padding:4px 15px 10px  10px
}
.products{
  padding:60px 0 100px ;

 }
 .products h2{
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
 }

 .products .card .card-title{
  font-size: 20px;
  line-height: 1.5;
  color: #08526d;
 }
 .products .card{
  margin-bottom: 50px;
  height: 519px;
 }
 .products .card:hover{

  box-shadow: 5px 10px 8px #888888 ,
  -5px -10px 8px #888888 ;
 }

 .products .card img
 {
  width:70%;
 }
 .products .card .card-text{
color: #787878;
margin-bottom: 5px;

 }
 .products .card .card-link{
  color:#ed1d24;
  font-weight: bold;
   }


</style>