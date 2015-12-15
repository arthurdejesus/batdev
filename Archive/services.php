<?php include 'header.php'; ?>
<div class="grid-product-list grid-we-do m-0 p-0 product-list-holder our-process-holder our-services-holder">
    <div class="process-list">
        <ul class="process--list">
            <li>
                <a href="#trampoline" class="scroll" id="trampoline">
                </a>
            </li>
            <li>
                <a href="#attraction" class="scroll" id="attraction">
                </a>
            </li>
            <li>
                <a href="#entertainment" class="scroll" id="entertainment">
                </a>
            </li>
            <li>
                <a href="#3dRenderings" class="scroll" id="3dRenderings">
                </a>
            </li>
            <li>
                <a href="#software" class="scroll" id="software">
                </a>
            </li>
        </ul>
    </div>
    <section class="product-section product-section-trampoline animatedParent" data-section-name="trampoline">
        <a href="trampoline.php">
            <div class="grid-we-do-item p-0">
                <div class="grid-we-do-img-wrap grid-wrap-black">
                    <h3 class="grid-desc">Trampoline Parks</h3>
                    <div class="grid--img" style="background-image:url('images/services/services1.jpg');"></div>
                </div>
            </div>
        </a>
    </section>
    <section class="product-section product-section-attraction animatedParent" data-section-name="attraction">
        <a href="attractions.php">
            <div class="grid-we-do-item p-0">
                <div class="grid-we-do-img-wrap grid-wrap-black">
                    <h3 class="grid-desc">Attractions</h3>
                    <div class="grid--img" style="background-image:url('images/services/services2.jpg');"></div>
                </div>
            </div>
        </a>
    </section>
    <section class="product-section product-section-entertainment animatedParent" data-section-name="entertainment">
        <a href="entertainment.php">
            <div class="grid-we-do-item p-0">
                <div class="grid-we-do-img-wrap grid-wrap-black">
                    <h3 class="grid-desc">Entertainment Centers</h3>
                    <div class="grid--img" style="background-image:url('images/services/services3.jpg');"></div>
                </div>
            </div>
        </a>
    </section>
    <section class="product-section product-section-3dRenderings animatedParent" data-section-name="3dRenderings">
        <a href="entertainment.php">
            <div class="grid-we-do-item p-0">
                <div class="grid-we-do-img-wrap grid-wrap-black">
                    <h3 class="grid-desc">3D Renderings</h3>
                    <div class="grid--img" style="background-image:url('images/services/services3.jpg');"></div>
                </div>
            </div>
        </a>
    </section>
    <section class="product-section product-section-software animatedParent" data-section-name="software">
        <a href="entertainment.php">
            <div class="grid-we-do-item p-0">
                <div class="grid-we-do-img-wrap grid-wrap-black">
                    <h3 class="grid-desc">Software</h3>
                    <div class="grid--img" style="background-image:url('images/services/services3.jpg');"></div>
                </div>
            </div>
        </a>
    </section>
</div>


<section class="warning-section product-section" data-section-name="warning">
    <div class="section-warning">
        <div class="warning-wrap">
            <div class="warning-grid mw-410">
                <h3 class="warning-title">Warning<img src="images/warning-icon.png"></h3>
            </div>
            <div class="warning-grid warning-grid-lg">
                <div class="content">
                    <div class="description">
                        <p>Landing on the head or neck can cause serious injury, paralysis,
                            or death, even when landing in the middle of the bed.</p>
                    </div>
                </div>
            </div>
            <div class="warning-grid">
                <div class="content">
                    <div class="description">
                        <p>Use trampoline only with mature, knowledgeable supervision.  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer-section">
        <div class="footer">
            <div class="footer-gray">
                <!--            <div class="footer-container container-fluid">-->
                <div class="container">
                    <div class="col-md-3">
                        <div class="content">
                            <h4 class="footer-title">Quick Links</h4>
                            <div class="description">
                                <ul class="footer-links">
                                    <li class="<?php echo $_SERVER['REQUEST_URI']=='/batdev/about.php'?'current_page_item':'';?>"><a href="about.php">About Us</a></li>
                                    <li class="<?php echo $_SERVER['REQUEST_URI']=='/batdev/products.php'?'current_page_item':''; ?>"><a href="products.php">Our Services</a></li>
                                    <li class="<?php echo $_SERVER['REQUEST_URI']=='/batdev/portfolio.php'?'current_page_item':''; ?>"><a href="portfolio.php">Portfolio</a></li>
                                    <li class="<?php echo $_SERVER['REQUEST_URI']=='/batdev/our-process.php'?'current_page_item':''; ?>"><a href="our-process.php">Our Process</a></li>
                                    <li class="<?php echo $_SERVER['REQUEST_URI']=='/batdev/news.php'?'current_page_item':''; ?>"><a href="news.php">News & Events</a></li>
                                    <li class="<?php echo $_SERVER['REQUEST_URI']=='/batdev/contact.php'?'current_page_item':''; ?>"><a href="contact.php">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="content">
                            <h4 class="footer-title">Contact Us</h4>
                            <div class="description">
                                <div class="contact-details">
                                    <p class="contact-details-title">We’d love to hear from you:<p>
                                        <br/>
                                    <p><a href="#">info@trampolinepark.com</a></p>
                                    <div class="contact-details-description">
                                        <p>local:</p> <a href="#">972-475-0092</a><p>|  toll free:</p> <a href="#">866-690-3272</a>
                                    </div>
                                    <br/>
                                    <p>Best American Trampolines <br/>
                                        1701 Summit Ave, Ste 4 <br/>
                                        Plano, Texas 75074</p>
                                </div>

                                <ul class="social-media social-media-bottom">
                                    <li><a href="#"><span class="icon-facebook"></span></a></li>
                                    <li><a href="#"><span class="icon-google-plus"></span></a></li>
                                    <li><a href="https://twitter.com/bat_inc"><span class="icon-twitter"></span></a></li>
                                    <!--                                <li><a href="#"><span class="icon-pinterest"></span></a></li>-->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="content">
                            <h4 class="footer-title">View Other BAT Sites</h4>
                            <div class="description">
                                <ul class="footer-links">
                                    <li><a href="bestamericantrampolines.com" target="_blank">Best American Trampolines</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-black">
                <div class="container-fluid">
                    <div class="pull-left">
                        <ul class="footer-menu">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <p>© Best American Trampolines, Inc., 2002-2014</p>
                    </div>

                    <div class="pull-right">
                        <ul class="footer-logos">
                            <li><a href="http://www.astm.org/"><img src="images/footer-logo3.png"></a></li>
                            <li><a href="http://www.indoortrampolineparks.org/"><img src="images/footer-logo2.png"></a></li>
                            <li><a href="http://www.indoortrampolineparks.org/"><img src="images/footer-logo1.png"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</section>

<script src="js/jquery.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>


<script>
    $(".product-section").css({"height":$(window).height()});
    $.scrollify({
        section:".product-section",
        sectionName : "section-name"
    });
</script>