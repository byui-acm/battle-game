/*********************************************************
 *********************************************************
 ** Chat.js was created by Edward Ricks for experimenting
 ** This may be implemented in the future for using a chat feature
 **
 ** TODO: Create an AJAX request to update text
 ** TODO: Create SERVER application to return the messages
 *********************************************************
 *********************************************************/


/****************************************
 * This function will send off the message to the server so 
 * it can be read by a client.
 ****************************************/
function send()
{
   var name = "name="+document.getElementById("name").value;
   var time = "&time="+Date();
   var mess = "&mess="+document.getElementById("mess").value;

   alert(name + '\n' + time + "\n" + mess);


//   loadXMLDoc(name+time+mess);
   document.getElementById("mess").value="";
   document.getElementById("mess").focus();
}

/****************************************
 * This function will refresh the window periodically
 * to get the most up-to-date information from the server
 ****************************************/
function refresh()
{
   setTimeout(loadXMLDoc(),3000);
}


function loadXMLDoc(str)
{
   var xmlhttp;
   if (window.XMLHttpRequest)
   {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
   }
   else
   {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
   }
   xmlhttp.onreadystatechange = function()
   {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
      {
         document.getElementById("ajax").innerHTML=xmlhttp.responseText;
      }
   }
   xmlhttp.open("POST",/*put something here*/"",true);
   xmlhttp.sendRequestHeader("Content-type",
                             "application/x-www-form-urlencoded");
   xmlhttp.send();
}
