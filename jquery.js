jQuery(function () {
  console.log('jQuery is ready!' , $('#btn'));
  $('.btn').click(function () {
    console.log('Button clicked!',$('.sidebar'));
    $('.sidebar').toggleClass('sidebar-active');
  })


  $(document).mouseup(function(e) 
  {
      var container = $(".sidebar");
  
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
        $('.sidebar').removeClass('sidebar-active');
      }
  });
})
