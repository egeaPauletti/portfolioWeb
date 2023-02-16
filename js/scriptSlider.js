$(function(){

  function nomeDoProjeto(){
    $("#nomeProjeto").text( $(".slick-center").data("name"));
  }

  $(".sliderProjetos").on("init", function(){
    nomeDoProjeto();

  });


  $(".sliderProjetos").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    prevArrow: $("#arrowPrev"),
    nextArrow: $("#arrowNext"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },

    ]
  });

  $(".sliderProjetos").on("afterChange", function(){
    nomeDoProjeto();

  });

})

