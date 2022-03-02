$(document).ready(function() {
    /* autoresize input-tweet field */
//     autosize($('textarea'));
    
    /* Highlight searchbox onclick */
    $('.search-box').click(function () {
        $(this).addClass('search-box-highlight')
    })

    /* Show or Hide extra trend topics */
    $('.show-more-trends').click(function () {
        $('.extra-topics').toggleClass('show')
        $("#text-toggle").fadeOut(function () {
            $("#text-toggle").text(($("#text-toggle").text() == 'Show more trends') ? 'Hide extra trends' : 'Show more trends').fadeIn()
        })
    })

     /* Show or Hide extra follow suggestions */
     $('.show-more-follows').click(function () {
      $('.extra-follows').toggleClass('show')
      $("#text-toggle-follows").fadeOut(function () {
          $("#text-toggle-follows").text(($("#text-toggle-follows").text() == 'Show more') ? 'Hide extra' : 'Show more').fadeIn()
      })
  })

    /* Highlights selected Nav menu-option */
    const nodes = document.querySelectorAll( '.color-toggle');
    nodes.forEach((node) => {
    node.addEventListener('click', (e) => {
    nodes.forEach(ele => {
      if(ele === e.target){
        ele.style.fontWeight = '700'
        ele.style.color= '#1b97e9'
      } else {
        ele.style.fontWeight = '300'
        ele.style.color= 'black'
      }
        })
      })
    })

 

})
