
//adjusting places of pages
$(".content").css("margin-left", $(".main-sidebar").width()+5)
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


//drop down menu update applicant stored status in the database
function updateStatus(){

  //both next params are hard coded values that should be updated later
  //to get the real id and the new status chosen for the applicant
  const id = 9;
  const status = 4;


  //make parameters to be sent in the ajax request
  const params = JSON.stringify({ id: id , status: status});
  //where the database update will occur
  const url = '/update/status';

  const xhr = new XMLHttpRequest();

  
  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(params);

}

