// $(function(){
//     alert('test');
// });

$(function () {
  $(".form-control").on("focus", function () {
    $(this).parents(".form-group").addClass("focused");
  });

  $(".form-control").on("blur", function () {
    $(this).parents(".form-group").addClass("focused");
  });
});

$(".txtDate").datepicker({
    maxDate: 0
});

