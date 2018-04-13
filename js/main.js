$('.modal').on('shown.bs.modal', function() {
   $(".modal-body").css("margin",'0px');
   $(".modal-dialog").css({
              'position': 'relative',
              'display': 'table',
              'overflow-y': 'auto',
              'overflow-x': 'auto',
              'width': 'auto',
              'min-width': '10px'
   });
});
