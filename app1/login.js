function login() {
    var param = $("#loginForm").serialize();
    console.info(param);
    location.href = "./home.html?" + param;
}