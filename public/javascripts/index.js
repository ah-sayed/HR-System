//adjusting places of pages
$(".content").css("margin-left", $(".main-sidebar").width()+5)
//colors of lables.

$(".status").each(function(){
  let status = $(this).html();
  status == "Called"? $(this).addClass("label-primary"): status == "Applied"? $(this).addClass("label-info"): status == "Interviewed"?$(this).addClass("label-warning"): status == "Accepted"?$(this).addClass("label-success"): status == "Rejected"?$(this).addClass=("label-danger"):status == "Blacklisted"?$(this).addClass("black"): $(this).addClass("label-default")
})
$("#applicants .less-data").click(function(){//to show the full data pop-up.
  $(this).next().css("display","block")
})

$(".close").click(function(){//to close the (any) pop-up.
 $(this).parent().parent().css("display","none")
})
//fill the form of when and who called the applicant when admin presses the Called btn.
$("#applicants .call-btn").click(function(){
  let dt = new Date();
  let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  let date = dt.getFullYear() + "/" + dt.getMonth() + "/" + dt.getDate();
  let pId = $(this).parent().siblings().html();
  let hrName = $(this).parent().parent().find("td.hr-name").html();
  let interviewDate = $(this).parent().parent().find("td.interview-date").html()
  let interviewTime = $(this).parent().parent().find("td.interview-time").html();

  $("#applicants .call-info").css("display","block");

  $('input[name="callTime"]').val(time);
  $('input[name="callDate"]').val(date);
  $('input[name="pId"').val(pId);
  $('input[name="hrName"').val(hrName);
  $('input[name="interviewDate"').val(interviewDate);
  $('input[name="interviewTime"').val(interviewTime);
  return false;//to stop propagation.
}); 

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
//drop down menu update applicant stored status in the database using ajax
function updateStatus(id){
  //get the status chosen by the user form the dropdown menu
  const newStatus = $("#updateStatus :selected").html();
  console.log("id=>",id,"newStat=>",newStatus)

  //make parameters to be sent in the ajax request
  const params = JSON.stringify({ id: id , status: newStatus});

  //where the database update will occur
  const url = '/update/status';

  const xhr = new XMLHttpRequest();

  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(params);
}

function arrivalTime(){
  let interviewTime = $(".int-time span strong").html().split(":")
  let time = ''+new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()+''
  let arrivalByHours = Number(interviewTime[0]) - new Date().getHours()
  let arrivalByMins = Number(interviewTime[1]) - new Date().getMinutes()
  let arrivalBySecs = Number(interviewTime[2]) - new Date().getSeconds()
  $("#arrival").html(time)

  if(arrivalByHours < 0){
    $("#late-or-early").html("Late by: "+Math.abs(arrivalByHours)+"H, "+Math.abs(arrivalByMins)+"M, "+Math.abs(arrivalBySecs)+"S")
  }
  else{
    $("#late-or-early").html("Early by: "+Math.abs(arrivalByHours)+"H, "+Math.abs(arrivalByMins)+"M, "+Math.abs(arrivalBySecs)+"S")
  }
}
