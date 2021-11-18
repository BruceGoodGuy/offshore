<template>
  <div>
    <!--====== NAVBAR NINE PART START ======-->
    <section class="navbar-area navbar-nine">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <nuxt-link class="navbar-brand" to="/">
                <img height="50px" src="assets/images/exe.png" alt="Logo">
              </nuxt-link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNine"
                aria-controls="navbarNine"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon" />
                <span class="toggler-icon" />
                <span class="toggler-icon" />
              </button>

              <div
                id="navbarNine"
                class="collapse navbar-collapse sub-menu-bar"
              >
                <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                    <a class="page-scroll active" href="#hero-area">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#services">Services</a>
                  </li>

                  <li class="nav-item">
                    <a class="page-scroll" href="#technologies">Technologies</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#projects">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
            <!-- navbar -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </section>

    <!--====== NAVBAR NINE PART ENDS ======-->

    <!--====== SIDEBAR PART START ======-->

    <!--====== SIDEBAR PART ENDS ======-->

    <Nuxt />

    <!-- Start Footer Area -->
    <footer class="footer-area footer-eleven">
      <!-- Start Footer Top -->
      <div class="footer-top">
        <div class="container">
          <div class="inner-content">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12">
                <!-- Single Widget -->
                <div class="footer-widget f-about">
                  <div class="logo">
                    <a href="index.html">
                      <img src="assets/images/logo.svg" alt="#" class="img-fluid">
                    </a>
                  </div>
                  <p>
                    We create Japanese quality products for customers around the world from the hands of Vietnamese people
                  </p>
                  <p class="copyright-text">
                    <span>© 2021 SYSTEMEXE VN Co., Ltd</span>
                  </p>
                </div>
              <!-- End Single Widget -->
              </div>
              <div class="col-lg-2 col-md-6 col-12">
                <!-- Single Widget -->
                <div class="footer-widget f-link">
                  <h5>About</h5>
                  <ul>
                    <li><a href="javascript:void(0)">Services</a></li>
                    <li><a href="javascript:void(0)">Products</a></li>
                    <li><a href="javascript:void(0)">Technologies</a></li>
                  </ul>
                </div>
              <!-- End Single Widget -->
              </div>
            </div>
          </div>
        </div>
      </div>
    <!--/ End Footer Top -->
    </footer>
    <!--/ End Footer Area -->

    <a href="#" class="scroll-top btn-hover">
      <i class="lni lni-chevron-up" />
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head () {
    return {
      title: this.title,
      meta: [
        {
          httpEquiv: 'x-ua-compatible',
          content: 'ie=edge'
        },
        {
          name: 'description',
          hid: 'description',
          content: ''
        },
        {
          name: 'viewport',
          hid: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['title'])
  }
}
</script>
