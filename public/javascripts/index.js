//adjusting places of pages
$(".content").css("margin-left", $(".main-sidebar").width()+5)
//colors of lables.

$(".status").each(function(){
  //red => rejected, blue =>called, green => accepted, yellow=> applied, purple=>interviewed,black=> blacklist rbna y7mena
  let status = $(this).html();
  status == "Called"? $(this).addClass("label-primary"): status == "Applied"? $(this).addClass("label-info"): status == "Interviewed"?$(this).addClass("label-warning"): status == "Accepted"?$(this).addClass("label-success"): status == "Rejected"?$(this).addClass=("label-danger"): $(this).addClass("label-default")
})

function search(){//by name
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("applicants");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}
$("#applicants .less-data").click(function(){//to show the full data pop-up.
  $(this).next().css("display","block")
})

$(".close").click(function(){//to close the (any) pop-up.
 $(this).parent().parent().css("display","none")
})
//fill the form of when and who called the applicant when admin presses the Called btn.
$("#applicants #call-btn").click(function(){
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  var date = dt.getFullYear() + "/" + dt.getMonth() + "/" + dt.getDate();

  $(this).html("Called")
  $(this).addClass("btn-success");
  $("#applicants .call-info").css("display","block");

  $('input[name="callTime"]').val(time);
  $('input[name="callDate"]').val(date);
  return false;//to stop propagation.
}) 