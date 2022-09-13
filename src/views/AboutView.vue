<template>

<!-- start overviwe -->

<div class="overviwe text-center">
  <div class="container">
    <h2 class="h1">Company Overview</h2>
    <div class="row">
      <div class="col-lg-12">
        <img src="../assets/img/Untitled-2.png" width="200px" alt="">
      </div>
       <div class="col-lg-12">
        <p class="lead">DAR AL MUBTAKER is an emerging company which is dealing in TELECOM solutions &amp; services sectors in the Kingdom of Saudi Arabia offering a high quality products &amp; services.DAR ALMUBTAKER TELECOM. Was setup with a view to address the gowing needs of telecommunication infrastructure support for the discerning clientele in the Kingdom of Saudi Arabia. The main focus of DAR ALMUBTAKER TELECOM. Is to provide a comprehensive service that is capable of designing, implementing &amp; providing technical support for TELECOMs &amp; LANs. Furthermore, we have vast exposure on telecommunication, networking and billing software We work closely with our customers to understand their requirements and offer them the best solution and services as a single source vendor.</p>
       </div>

    </div>
  </div>
</div>
<!-- end overviwe -->

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






/* start overviwe */
.overviwe{
  padding: 54px 13px 25px 15px;
  background-color: rgb(255, 255, 255);
}
.overviwe h2{
  font-size: 50px;

  font-weight: bold;
  margin-bottom: 40px;
}
@media(max-width:992px){
  .overviwe h2{
    font-size: 29px;
    margin-bottom: 15px;


  }
}
@media(max-width:400px){

  .overviwe img{
    margin-left:-20px;
  }
}

.overviwe img
{
margin-bottom: 13px;
}
.overviwe p{
  line-height: 2;
  font-size: 20px;
  width: 90%;
  margin: 0 auto;
  color: #000000;
  font-weight: inherit;
  text-align: center;
}
@media(max-width:992px){

  .overviwe p{
    font-size: 18px;
    width: 100%;

  }
}
.overviwe h4{
  letter-spacing: 2px;
  font-weight: normal;
  color: #8b8a8a;
  margin-bottom: 40px;
}
.overviwe button{
  background-color: #ed1d24;
  color: #fff;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #ed1d24;
  margin-bottom:-40px;
}
 /* end overviwe */

</style>
