fetch("signers.json")
  .then(response => response.json())
  .then(json => {
  		var signerslist = document.getElementById("signerslist");
  		for (i in json)
		{
		  //document.write(json[i].name + "<br />");
		  var item = document.createElement('li');
		  item.innerHTML = '<a class="signerlink" target="_blank" href="' + json[i].uri + '">' + json[i].name + '</a>';
		  signerslist.appendChild(item);
		}});