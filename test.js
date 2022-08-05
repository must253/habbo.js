const must_habbo = require("./habbo.js")

async function output() {
    let user = await must_habbo.user("mustafa8445")//kullanıcı isim giriyoruz
    console.log(user.isim)//mustafa8445
    console.log(user.id);//habbo id - hhtr-3808576c5a54f4ad36822fe604f220cc
    console.log(user.motto);//Must is awesome
    console.log(user.online);//Online
    console.log(user.level);//17
    console.log(user.profilGorunurluk);//Açık
    console.log(user.seciliRozetler);//Hades'in Fantiği, Noob merakı, Gizli Rozet 4/12 - Demeter
    console.log(user.yildizTas);//1039
    console.log(user.songGiris);//5 Ağustos 2022 16:06:42(4 saat önce)
    console.log(user.kayitTarihi);//27 Şubat 2016 12:39:10(6 yıl önce)
    console.log(user.mevcutSeviyeYuzdelik);//%35
}
output()