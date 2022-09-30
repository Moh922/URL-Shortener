const register = document.getElementById|("myform")

register.onsumbmit = () => {
    e.preventDefault();
    var userNaame =document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    fetch ("https://url-shortener-bc.herokuapp.com/api/v1/users/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            userNaame: userNaame,
            email: email,
            password:password,
        }),
    })

    .then((res) => {
        return res.json();
    })
    .then((data) =>{
      if (data != null ){
        window.location.href = '/pages/login.html'
      }
      console.log(data);
    })
    .catch((err) => console.log(err));
}