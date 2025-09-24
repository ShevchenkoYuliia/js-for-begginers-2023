/**
Розбийте рядок на масив рядків (окремі логіни) і переведіть імена користувачів їх у нижній регістр.
 */

var logins = "Login1, LOgin2, login3, loGin4";
var loginArray = logins.split(',').map(function(login) {
    return login.trim().toLowerCase();
  });
  
console.log(loginArray);