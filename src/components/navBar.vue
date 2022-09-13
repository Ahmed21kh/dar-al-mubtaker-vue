<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand"><img src="../assets/img/logo-1.png" width="44px"/><span class="a">Dar Al</span> <span>  Mubtaker</span> </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#nav-bar"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav-bar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" data-value="" href="#" 
            ><router-link to="/">Home</router-link>  <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-value="features" href="#" ><router-link to="/about">About</router-link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-value="featured-Work" href="#" ><router-link to="/products">Products</router-link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#" > <router-link to="/services">Services</router-link>  </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" data-value="contact-us" href="#" ><router-link to="/billing">Billing Software</router-link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-value="contact-us" href="#" ><router-link to="/contact" >Contact</router-link> </a>
        </li>




      </ul>
    </div>
  </div>
</nav>


</template>

<style>

*{
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}


/* start navbar */
.navbar {
    
      padding: 2px 0px 2px 0px !important;
  }
.navbar-brand > span
{
  
  font-size: 35px;
}

.navbar-brand span.a
{
  color:#08526d;
  font-weight: bold;
}
.navbar-brand span:last-child
{
  color: #ed1d24;
}
.navbar-light .navbar-nav a{
    font-size: 16px ;
    text-transform: uppercase;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    color: #08526d;
}
.navbar-light .navbar-nav a:hover{
  color: #ed1d24;
}

.navbar-light a.router-link-exact-active {
  color: #ed1d24;
  
}





  /* end nav bar */

</style>