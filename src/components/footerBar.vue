
<template>
    <!-- start footer -->
<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-12  col-lg-4">
        <div class="site-info" data-aos="fade-left"
        data-aos-anchor-placement="center-bottom" data-aos-duration="1200" data-aos-delay="500">
          <h2>DAR AL MUBTAKER</h2>
          <div class=" col-lg-12 ">
            <img src="../assets/img/logo-1.png" width="80px">
            <!-- <img src="../../../img/Untitled-2.png" width="90px"  alt=""> -->
            <p>DAR AL MUBTAKER is an emerging company which is dealing in TELECOM
              solutions & services sectors in the Kingdom of Saudi Arabia
              offering a high quality products & services.</p>

          </div>

          


        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="helpful-links" data-aos="fade-left"
        data-aos-anchor-placement="center-bottom" data-aos-duration="1200" data-aos-delay="500">
          <h2>Helpful links </h2>
          <span class="double-border"></span>
          <div class="row">
            <div class="col">
              <ul class="list-unstyled">
                <li>About</li>
                <li>Products</li>
                <li>Services</li>
                <li>Billing Software </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      <div class="col-sm-6 col-lg-4">
        <div class="contact" data-aos="fade-left"
        data-aos-anchor-placement="center-bottom" data-aos-duration="1200" data-aos-delay="500">
           <h2>Contact Us</h2>
           <ul class="list-unstyled">
            <li style="text-transform:capitalize ;"><i class="fa fa-map-marker mr-2" aria-hidden="true"></i>  DAR AL MUBTAKER TELECOM
              OFFICE NO:321 A, 3RD FLOOR, AKARIA NO:2, OLAYYA, RIYADH, SAUDI ARABIA</li>
            <li><i class="fa fa-phone mr-2" aria-hidden="true"></i> Phone:+966 1 4191091 </li>
            <li><i class="fa fa-fax mr-2" aria-hidden="true"></i>  Fax:+966 1 4191091 EXT 216 </li>


           </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- end footer -->

<!-- start copyright -->
<!-- <div class="copyright ">
  <div class="container ">
    <div class="row text-center ">
      <div class="col-sm-6 text-uppercase copy">
        &copy; 2022 Dar Al Mubtaker All rights reserved
      </div>
      <div class="col-sm-6 text-center text-sm-right">
        <ul class="list-unstyled">
          <li>
            <a href="https://www.facebook.com/%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D9%85%D8%A8%D8%AA%D9%83%D8%B1-%D9%84%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%D8%A7%D8%AA-Dar-Al-Mubtaker-Telecom-234343776689425/"><i class="fa fa-facebook"></i>  </a>
          </li>
          <li><a href="mailto: dmt@mubtaker.com.sa?subject=contact"> <i class="fa fa-envelope mr-2" aria-hidden="true"></i></a> </li>
          <li>
            <a href="#"><i class="fa fa-whatsapp"></i></a>
          </li>

        </ul>
      </div>

    </div>
  </div>
</div> -->
<!-- end copyright -->

</template>

<style>

*{
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}


/* start footer */
.footer{
  padding: 53px 0px 0px 0;
  background-color: #343a40;
 }



.footer .site-info h2
{
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 40px;
}

.footer .site-info p{
  line-height: 1.8;
  color: #fbfbfb;
  width: 70%;
}
@media(max-width:992px){

.footer .site-info p{
  line-height: 1.8;
  color: #fbfbfb;
  width: 100%;
}
}
.footer .site-info img{
  float: left;
  margin-right: 13px;
  margin-left: -29px;
  background: linear-gradient(145deg, #3B4248, #2D3238);
  border-radius: 100%;
  box-shadow: 22.22px 22.22px 35px #2B3035, -22.22px -22.22px 35px #3D444B;
  padding: 10px 0 0 0;
}
.footer .site-info a{
 color: #08526d;
 font-size: 15px;
 font-weight: bold;
}
.footer .helpful-links h2,
.footer .contact h2
{
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 60px;
}
.footer .site-info h3{
  color: #fff;
}
.footer .helpful-links ul li{
  color: #fff;
  margin-bottom: 5px;
}
.footer .helpful-links ul li:before {

  font-family: 'fontAwesome';
  content: "\f054";
  margin-right: 9px;
  font-size: 12px;
  color: #ffffff;
  position: relative;
  top: -1px;

}
.footer .contact ul li{
  margin-bottom: 24px;
  color: #fff;

}
@media(max-width:992px){
  .footer .helpful-links h2,
.footer .contact h2
{
  margin-top: 20px;
  margin-bottom: 20px;
}
.footer .contact ul li{
  margin-bottom: 5px;

}
}

.footer .img-thumbnail
{
    background: rgba(0,0,0,0.2);
    border: 1px solid #444;
    margin-bottom: 5px;



}

 /* end footer */

</style>