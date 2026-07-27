// ÖNGÖRÜ AKADEMİ
// OTURUM VE YETKİ SİSTEMİ


// GİRİŞ YAPAN KULLANICIYI KAYDETME

function oturumAc(kullanici, rol){


localStorage.setItem(
"aktifKullanici",
kullanici
);



localStorage.setItem(
"rol",
rol
);



}






// AKTİF OTURUM KONTROLÜ


function oturumKontrol(){


let kullanici =
localStorage.getItem("aktifKullanici");


let rol =
localStorage.getItem("rol");



if(!kullanici || !rol){


return false;


}



return true;



}







// YETKİ KONTROLÜ


function kontrolEt(izinliRol){



let aktifRol =

localStorage.getItem("rol");






if(!aktifRol){



alert(
"Oturum bulunamadı. Lütfen giriş yapınız."
);



window.location.href="index.html";


return;


}







if(aktifRol !== izinliRol){



alert(
"Bu sayfaya giriş yetkiniz yok!"
);



window.location.href="index.html";


return;


}



}








// ÇIKIŞ YAP


function cikisYap(){



localStorage.removeItem(
"aktifKullanici"
);



localStorage.removeItem(
"rol"
);





window.location.href="index.html";



}






// AKTİF KULLANICI GETİRME


function aktifKullanici(){


return localStorage.getItem(
"aktifKullanici"
);



}