// Function to load the navigation bar dynamically
function loadNavigationBar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
}

// Call the loadNavigationBar function on page load for all pages
loadNavigationBar();





document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // إذا تم إدخال اسم المستخدم وكلمة المرور، قم بتوجيه المستخدم إلى صفحة index.html
        window.location.href = "index.html";
    } else {
        // إذا لم يتم إدخال بيانات، عرض رسالة تنبيه
        alert("يجب إدخال بيانات للدخول.");
    }
});
