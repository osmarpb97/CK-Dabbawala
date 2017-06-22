$(document).ready(function() {

  Ticket = {
    packages: {},
    cartridges: {}
  }

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';');
      let i = 0;
      for (; i < cookies.length; i++) {
        let cookie = jQuery.trim(cookies[i]);
        /** Does this cookie string begin with the name we want? */
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  
  /**
   * Adds the elements to the ticket json
   * 
   * @param {Number} id
   * @param {String} name
   * @param {Number} cost
   */
  function addProductToTicketObj(id, name, cost){
     // Cheks if there's a same product in the ticket json
    if (Ticket.cartridges[id]) {
      Ticket.cartridges[id].total += cost;
      Ticket.cartridges[id].quantity++;
    } else {
      let newProduct = {
        id: parseInt(id),
        name: name,
        cost: cost,
        quantity: 1,
        total: cost
      }
      Ticket.cartridges[id] = newProduct;
    }
    // console.log("Ticket %O:", Ticket)
  };

  $('.product').on('click', function(event) {
    let productId = +$(this).attr('id').split('-')[1];
    let productName = $(this).find('.product-name').text();
    let productCost = +$(this).find('.product-cost').text();
    
    addProductToTicketObj(productId, productName, productCost);

    // let newItem = $("<li class='list-item'>" +
    //   "<span class=prod-name>" + productName + "</span>" +
    //   "<span class='prod-unit'>" + productCost + "</span>" +
    //   "<span class='prod-quantity'>Cant</span>" +
    //   "<span class='prod-total'>Total</span>" +
    //   "</li>");

    // $('#list-container-prods').append(newItem);
  });
});

function visible() {
  $('#frontdisplay').removeClass('panels-backface-invisible');
  $('#backdisplay').addClass('panels-backface-invisible');
  $('#rightdisplay').addClass('panels-backface-invisible');
  $('#leftdisplay').addClass('panels-backface-invisible');
  $('#topdisplay').addClass('panels-backface-invisible');

}
function visible1() {
  $('#frontdisplay').addClass('panels-backface-invisible');
  $('#backdisplay').removeClass('panels-backface-invisible');
  $('#rightdisplay').addClass('panels-backface-invisible');
  $('#leftdisplay').addClass('panels-backface-invisible');
  $('#topdisplay').addClass('panels-backface-invisible');
}
function visible2() {
  $('#frontdisplay').addClass('panels-backface-invisible');
  $('#backdisplay').addClass('panels-backface-invisible');
  $('#rightdisplay').removeClass('panels-backface-invisible');
  $('#leftdisplay').addClass('panels-backface-invisible');
  $('#topdisplay').addClass('panels-backface-invisible');

}
function visible3() {
  $('#frontdisplay').addClass('panels-backface-invisible');
  $('#backdisplay').addClass('panels-backface-invisible');
  $('#rightdisplay').addClass('panels-backface-invisible');
  $('#leftdisplay').removeClass('panels-backface-invisible');
  $('#topdisplay').addClass('panels-backface-invisible');
}
function visible4() {
  $('#frontdisplay').addClass('panels-backface-invisible');
  $('#backdisplay').addClass('panels-backface-invisible');
  $('#rightdisplay').addClass('panels-backface-invisible');
  $('#leftdisplay').addClass('panels-backface-invisible');
  $('#topdisplay').removeClass('panels-backface-invisible');
}
