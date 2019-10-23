//adjusting places of pages
$(".content").css("margin-left", $(".main-sidebar").width()+5)
var request = new XMLHttpRequest()
var url = 'https://jsonplaceholder.typicode.com/users' //dumb data till we get data from backend :D
request.open('GET', url, true)
request.onload = function () {
    var data = JSON.parse(this.response)     
    if(request.status >= 200 && request.status < 400){
        console.log("data=>",data)
        for(user of data){
            $("#applicants tbody").append('<tr><td>'+Object.values(user)[0]+'</td><td>'+Object.values(user)[1]+'</td><td>'+Object.values(user)[5]+'</td><td>'+Object.values(user)[3]+'</td><td><span class="status label label-success">Approved</span></td><td>empty for now</td><td>empty for now</td></tr>')
            console.log(Object.values(user))
          }
    }
    else{console.log("ess",x)}
}
request.send()
//this api part should be done in the route js.. will fix it later!
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