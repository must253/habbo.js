# Before you start
languages may have errors, I did it using "google translate"

# habbo.js

```shell
npm install habbo.js
```

# A fast and stable module that provides information about the user
example code
```javascript
const must_habbo = require("habbo.js")

const hotelname = "tr"
const username = "mustafa8445"

const action = "wlk"//If you leave this blank or enter a wrong value, it will automatically take the value "wav"
// wlk
// wave
// sit
// lay
// carry
// wav

const face = "sml" //If you leave this blank or enter a wrong value, it will automatically take the value "nor"
// nor - normal
// sml - smile
// sad - sad
// spk - speak
// eyb - sleep
// srp - surprised
// agr - angry

async function data(name, hotel, act, face) {
    let user = await must_habbo.user(name, hotel, act, face)
    if(!user) return;// [HABBO] Kullanıcı bulunamadı
    console.log(user.name)//mustafa8445
    console.log(user.id);//habbo id - hhtr-3808576c5a54f4ad36822fe604f220cc
    console.log(user.motto);//Must is awesome
    console.log(user.online);//Online değil.
    console.log(user.level);//17
    console.log(user.profilGorunurluk);//Açık
    console.log(user.seciliRozetler);//Hades'in Fantiği, Noob merakı, Gizli Rozet 4/12 - Demeter
    console.log(user.yildizTas);//1039
    console.log(user.songGiris);//5 Ağustos 2022 16:06:42(4 saat önce)
    console.log(user.kayitTarihi);//27 Şubat 2016 12:39:10(6 yıl önce)
    console.log(user.mevcutSeviyeYuzdelik);//%35
    console.log(user.image);//user avatar image url
}
data(username, hotelname, action, face)
```
# License
habbo.js is released under the MIT License. See the bundled [LICENSE](https://github.com/must253/habbo.js/blob/main/LICENSE.txt) file for details.


# Help
If you don't understand something in the documentation,  please don't hesitate asking your questions to ャ 'Mu$t#4528.

# [Server](https://discord.gg/y93aC9MwXC)
