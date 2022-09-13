<template>
    <!-- start contact us -->
<div id="contact-us" class="contact-us">
  <div class="container">
    <h1>Contact Us</h1>
    <div class="row">
      <div class="col-lg-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4566.787491103627!2d46.68134453907133!3d24.70416439649127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f032606829f1b%3A0xe1572a21d508cd14!2sAl%20Akaria%202!5e0!3m2!1sar!2seg!4v1660019929180!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <div class="col-lg-4">
        <div class="contact">
          <ul class="list-unstyled">
           <li style="text-transform:capitalize ;"><i class="fa fa-map-marker mr-2" aria-hidden="true"></i>  DAR AL MUBTAKER TELECOM
             OFFICE NO:321 A, 3RD FLOOR, AKARIA NO:2, OLAYYA, RIYADH, SAUDI ARABIA</li>
           <li><i class="fa fa-phone mr-2" aria-hidden="true"></i> Phone:+966 1 4191091 </li>
           <li><i class="fa fa-fax mr-2" aria-hidden="true"></i>  Fax:+966 1 4191091 EXT 216 </li>
           <li> <i class="fa fa-envelope mr-2" aria-hidden="true"></i> E-mail:<a href="mailto: dmt@mubtaker.com.sa?subject=contact"> dmt@mubtaker.com.sa</a> </li>


          </ul>
       </div>


      </div>

    </div>


  </div>
</div>



<!-- end contact us -->

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

/* start contact us */

.contact-us{
  padding: 60px 0px 108px  0;
width: 100%;
height: 100hv;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

}
.contact-us h1{
  color: #333;
  margin-bottom: 40px;
text-align: center;
}

iframe
{
  width: 90%;
  height: 400px;
  justify-content: left;

}

.contact-us ul
{
  margin-top: 90px;
}
.contact-us ul li{
  margin-bottom:30px;
  color: #000;

}
@media(max-width:992px){

.contact-us ul li{
  margin-bottom: 5px;

}
}

 /* end contact us */

</style>