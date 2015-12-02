//Javascript file using jquery

  $(function () {
   $("#tabs").tabs();  // to run tabs
   $(".delete").on("click", function (e) {
       bootbox.confirm("Are You Sure You Want to Delete it", function () {
           console.log("Alert Callback");
       });
   });


      //Ajax Service
   $("input#submit").click(function () {
       $.ajax({
           type: "POST",
           url: "process.php", //process to mail
           data: $('form.contact').serialize(),
           success: function (msg) {
               $("#thanks").html(msg) //hide button and show thank you
               $("#form-content").modal('hide'); //hide popup  
           },
           error: function () {
               alert("failure");
           }
       });
   });

});
//$(function () {
//    $("#dialog-confirm").dialog({
//        resizable: false,
//        height: 140,
//        modal: true,
//        buttons: {
//            "Delete all items": function () {
//                $(this).dialog("close");
//            },
//            Cancel: function () {
//                $(this).dialog("close");
//            }
//        }
//    });
//});

