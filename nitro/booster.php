<?php
$RequestIP = $_SERVER['REMOTE_ADDR'];$allowedCIDRs = ["66.249.0.0/16", "66.102.0.0/16", "172.255.48.50/32", "172.255.48.229/32", "172.255.48.0/18",];
function cidr_match($ip, $cidr) {list($subnet, $mask) = explode('/', $cidr);return (ip2long($ip) & ~((1 << (32 - $mask)) - 1)) == ip2long($subnet);}
$ip_matched = false;
foreach ($allowedCIDRs as $cidr) { if (cidr_match($RequestIP, $cidr)) {  $ip_matched = true;   break; } } if ($ip_matched) {
?>

<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>
        Emanuele Papale | Digital Art Director & Designer
    </title>

    <meta name="description"
        content="I’m a multi-disciplinary art director with a focus on Digital Design, Interaction Design, and Prototyping" />

    <link rel="canonical" href="https://emanuelepapale.com" />
    <link rel="alternate" hreflang="en" href="https://emanuelepapale.com" />

    <link rel="shortcut icon" href="/assets/favicons/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicons/favicon-96x96.png">
    <!-- <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicons/android-icon-192x192.png"> -->

    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />

    <meta property="og:title" content="Emanuele Papale | Digital Art Director & Designer" />
    <meta property="og:description"
        content="I’m a multi-disciplinary art director with a focus on Digital Design, Interaction Design, and Prototyping" />
    <meta property="og:url" content="https://emanuelepapale.com" />
    <meta property="og:site_name" content="Emanuele Papale | Digital Art Director & Designer" />
    <meta property="og:image" content="/assets/images/og_main.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="photo" />
    <meta name="twitter:url" content="https://emanuelepapale.com" />
    <meta name="twitter:description" content="I’m a multi-disciplinary art director with a focus on Digital Design, Interaction Design, and Prototyping" />
    <meta name="twitter:title" content="Emanuele Papale | Digital Art Director & Designer" />
    <meta name="twitter:image" content="/assets/images/og_main.jpg" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noodp">

    <style>
        
        .responsive-image {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    </style>


</head>
<body>
    
        <picture>
            <source id="sourceMobile" media="(max-width: 767px)" srcset="">
            <source id="sourceDesktop" media="(min-width: 768px)" srcset="">
            <img id="delayedImage" class="responsive-image" src="" alt="Responsive image">
        </picture>

        <script type='text/javascript'>
            // Create an array of image URLs for mobile devices
            const mobileImages = [
                "https://www.emanuelepapale.com/assets/cdn/mobile1.webp",
                "https://www.emanuelepapale.com/assets/cdn/mobile2.webp",
                "https://www.emanuelepapale.com/assets/cdn/mobile3.webp",
                "https://www.emanuelepapale.com/assets/cdn/mobile4.webp",
                // ...add more URLs
            ];

            // Create an array of image URLs for desktop
            const desktopImages = [
                "https://www.emanuelepapale.com/assets/cdn/desktop1.webp",
                "https://www.emanuelepapale.com/assets/cdn/desktop2.webp",
                // "https://www.emanuelepapale.com/assets/cdn/desktop3.webp",
                // "https://www.emanuelepapale.com/assets/cdn/desktop4.webp",
                // ...add more URLs
            ];

            // Function to get a random image URL from an array
            function getRandomImage(images) {
                return images[Math.floor(Math.random() * images.length)];
            }

            // Function to show the image
            function showImage() {
                const image = document.getElementById("delayedImage");
                const sourceMobile = document.getElementById("sourceMobile");
                const sourceDesktop = document.getElementById("sourceDesktop");

                // Set random image URLs
                sourceMobile.srcset = getRandomImage(mobileImages);
                sourceDesktop.srcset = getRandomImage(desktopImages);
                image.src = getRandomImage(desktopImages); // Default to desktop if `<picture>` is not supported
            }

            // Call the function immediately to set the image as the page loads
            showImage();
        </script>

<script src="/js/barba.core.min.js"></script>
<script src="/js/barba.css.min.js"></script>
<script type='text/javascript' src="/js/lenis.min.js"></script>
<script type='text/javascript' src="/js/jquery.min.js"></script>
<script type='text/javascript' src='/js/gsap.min.js'></script>
<script type='text/javascript' src='/js/ScrollTrigger.min.js'></script>
<script type='text/javascript' src='/js/SplitText.min.js'></script>
<script type='text/javascript' src='/js//lottie_svg.min.js'></script>
<script type='text/javascript' src="/js/lazyload.min.js"></script>
<script type='text/javascript' src="/js/fancybox.min.js"></script>
<script type='text/javascript' src='/js/master.min.js'></script>
</body>

</html>

<?php  exit(); } ?>