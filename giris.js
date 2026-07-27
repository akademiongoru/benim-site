// ÖNGÖRÜ AKADEMİ GİRİŞ SİSTEMİ


const kullanicilar = [

    {
        kullanici:"emrah",
        sifre:"1637",
        sayfa:"ogrenci-paneli.html"

    },
 

    {
        kullanici:"ogretmen",
        sifre:"1234",
        sayfa:"ogretmen-paneli.html"
    },


    {
        kullanici:"yonetici",
        sifre:"1234",
        sayfa:"yonetim-paneli.html"
    }

];




function girisYap(tip){


let kullanici =
document.getElementById("kullanici").value;


let sifre =
document.getElementById("sifre").value;



let bulunan =
kullanicilar.find(function(k){

return k.kullanici == kullanici &&
k.sifre == sifre;

});



if(bulunan){


window.location.href = bulunan.sayfa;


}

else{


alert("Kullanıcı adı veya şifre hatalı!");

}



}