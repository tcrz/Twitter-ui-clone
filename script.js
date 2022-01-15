$(document).ready(function() {
    // autoresize input-tweet field
    autosize($('textarea'));
    
    // Highlight searchbox onclick
    $('.search-box').click(function () {
        $(this).addClass('search-box-highlight')
    })

        // $('html').click(function () {
        //     if ($('.search-box').hasClass('search-box-hightlight'))
        //     {
        //         $('.search-box').removeClass('search-box-hightlight')
        //     }
        // })

    // Show or Hide extra trend topics
    $('.show-more').click(function () {
        $('.extra-topics').toggleClass('show')
        $("#text-toggle").fadeOut(function () {
            $("#text-toggle").text(($("#text-toggle").text() == 'Show more trends') ? 'Hide extra trends' : 'Show more trends').fadeIn()
        })
    })

    // Highlights selected Nav menu-option
    const nodes = document.querySelectorAll('.color-toggle');
    nodes.forEach((node) => {
    node.addEventListener('click', (e) => {
    nodes.forEach(ele => {
      if(ele === e.target){
        ele.style.fontWeight = '700'
        ele.style.boxShadow= '0 0 0 0.5pt #1b97e9'
      } else {
        ele.style.fontWeight = '300'
        ele.style.boxShadow= 'none'
      }
    })
  })
})


    




})
