let search = () => {
    var name = document.getElementById("query").value.toString();
    var pattern = name.toLowerCase();
    var targetId = "";
  
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
       var para = divs[i].getElementsByTagName("p");
       var index = para[0].innerText.toLowerCase().indexOf(pattern);
       if (index != -1) {
          targetId = divs[i].parentNode.id;
          console.log(targetId);
          document.getElementById(targetId).scrollIntoView();
          break;
       }
    }  
 }