function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

document.getElementById('foo').addEventListener('click', function (e) {

    var img = document.createElement('img');

    img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');

    e.target.appendChild(img);
});