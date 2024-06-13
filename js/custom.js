$(window).on("load", function () {
  "use strict";

  // --------------------------------------------- //
  // Loader & Homescreen Slider Loading Start
  // --------------------------------------------- //
  $(".loader__logo").addClass("scaleOut");

  var mainSlider = $(".main-slider");

  setTimeout(function () {
    $("body").removeClass("overflow-hidden");
    $(".loader").addClass("loaded");
    if (mainSlider.length) {
      var swiper = new Swiper(".swiper-main", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        autoplay: {
          disableOnInteraction: true,
        },
        loop: true,
        parallax: true,
        speed: 1300,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }, 600);
  // --------------------------------------------- //
  // Loader & Homescreen Slider Loading End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function () {
    $("body").addClass("loaded");
    $(".headline__animate").textillate({
      in: {
        effect: "fadeInUp",
        delayScale: 1.2,
        delay: 40,
      },
    });
  }, 600);
  // --------------------------------------------- //
  // Main Section Loading Animation End
  // --------------------------------------------- //
});

$(function () {
  "use strict";

  // --------------------------------------------- //
  // Swiper Slider Settings Start
  // --------------------------------------------- //
  var slider = $(".media-slider"),
    aboutSlider = $(".about-slider"),
    partnersSlider = $(".partners-slider");

  if (aboutSlider.length) {
    var swiper3 = new Swiper(".swiper-about", {
      spaceBetween: 0,
      grabCursor: true,
      slidesPerView: "auto",
      speed: 1000,
      loop: true,
      autoplay: true,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  if (partnersSlider.length) {
    var swiper4 = new Swiper(".swiper-partners", {
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: true,
      speed: 500,
      loop: true,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }
  // --------------------------------------------- //
  // Swiper Slider Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $("#bgndKenburns");
  if (bgndKenburns.length) {
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: "fade2",
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/1200x1400-bg-main-kenburns-1.webp" },
        { src: "img/backgrounds/1200x1400-bg-main-kenburns-2.webp" },
      ],
      animation: [
        "kenburnsUp",
        "kenburnsDown",
        "kenburnsLeft",
        "kenburnsRight",
      ],
    });
  }

  var bgndKenburnsFull = $("#bgndKenburnsFull");
  if (bgndKenburnsFull.length) {
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 10000,
      transition: "fade2",
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/1920x1280-main-kenburns-1.webp" },
        { src: "img/backgrounds/1920x1280-main-kenburns-2.webp" },
        { src: "img/backgrounds/1920x1280-main-kenburns-3.webp" },
      ],
      animation: [
        "kenburnsUp",
        "kenburnsDown",
        "kenburnsLeft",
        "kenburnsRight",
      ],
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $("#countdown").countdown({
    until: $.countdown.UTCDate(+10, 2024, 3, 26),
    format: "D",
  });
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbar Settings Start
  // --------------------------------------------- //
  $(".skillbar").skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
    decimals: 0,
  });
  // --------------------------------------------- //
  // Skillbar Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $("#inner-video-trigger").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () {
        $("body").addClass("overflow-hidden");
      },
      close: function () {
        $("body").removeClass("overflow-hidden");
      },
    },
  });
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $(".notify-form").ajaxChimp({
    callback: mailchimpCallback,
    url: "https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900",
  });

  function mailchimpCallback(resp) {
    if (resp.result === "success") {
      $(".notify").find(".form").addClass("is-hidden");
      $(".notify").find(".subscription-ok").addClass("is-visible");
      setTimeout(function () {
        // Done Functions
        $(".notify").find(".subscription-ok").removeClass("is-visible");
        $(".notify").find(".form").delay(300).removeClass("is-hidden");
        $(".notify-form").trigger("reset");
      }, 5000);
    } else if (resp.result === "error") {
      $(".notify").find(".form").addClass("is-hidden");
      $(".notify").find(".subscription-error").addClass("is-visible");
      setTimeout(function () {
        // Done Functions
        $(".notify").find(".subscription-error").removeClass("is-visible");
        $(".notify").find(".form").delay(300).removeClass("is-hidden");
        $(".notify-form").trigger("reset");
      }, 5000);
    }
  }
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  // Night Sky BG - particlesJS
  var bgndNightSky = $("#nightsky-js");
  if (bgndNightSky.length) {
    particlesJS("nightsky-js", {
      particles: {
        number: {
          value: 300,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            opacity_min: 0.05,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
});

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.innerText = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_kunga67";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.innerText = "Email Sent";
      btn.ariaDisabled = true;
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
