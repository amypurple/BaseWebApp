function myFunction() {
  var divDemo = document.getElementById("demo");
  var divImage = document.getElementById("image");
  divDemo.textContent = "The paragraph changed! #vanilla #javascript";
  var image = document.createElement('img');
  image.src="images/amylogo.jpg";
  image.alt="Amy Bienvenu's Logo";
  image.height="140";
  image.width="140";
  divImage.appendChild(image);
}

