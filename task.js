function Search(){
	var name = document.getElementsByClassName("search_name").value;
	var surname = document.getElementsByClassName('search_surname').value;
	var city = document.getElementsByClassName('search_city').value;
	var body = `firstName=${encodeURIComponent(name)}&lastName=${encodeURIComponent(surname)}&city=${encodeURIComponent(city)}&searchButton=${encodeURIComponent('Найти')}`;

	fetch("http://nomer.cc/allukraina/", {
		method: "POST",
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		body
	})
	.then(res => res.text())
	.then(text => {
      const html = document.createElement('html');
      html.innerHTML = text.response;
      const table = html.querySelector('w3-table w3-bordered w3-striped');
      document.querySelector('table').innerHTML = table.innerHTML;
    });
}
	