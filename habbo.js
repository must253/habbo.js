const axios = require("axios");
const moment = require("moment");
moment.locale("tr")

module.exports = {
    user: async function(name) {
        try {
            
            const habbo = await axios.get("https://www.habbo.com.tr/api/public/users?name="+name)
            const data = habbo.data
            let selected = [];
            let sayi = 0;
            for(let mst in data.selectedBadges){
                selected.push(data.selectedBadges[sayi].name)
                sayi++
            }
            let lastTıme = new Date(data.lastAccessTime)
            let time = moment(lastTıme).valueOf()
            let createdTıme = new Date(data.memberSince)
            let created = moment(createdTıme).valueOf()
            const mustData={
                id: data.uniqueId,
                isim: data.name,
                motto: data.motto,
                online: data.online ? "Online":"Online Değil",
                level: data.currentLevel,
                profilGorunurluk: data.profileVisible? "Açık":"Kapalı",
                seciliRozetler: selected.join(", "),
                yildizTas: data.starGemCount,
                songGiris: moment(time).format("LL HH:mm:ss") + "(" + moment(time).fromNow()+")",
                kayitTarihi: moment(created).format("LL HH:mm:ss") + "(" + moment(created).fromNow()+")",
                mevcutSeviyeYuzdelik: "%"+data.currentLevelCompletePercent


            }
            return mustData
        } catch (error) {
            console.log("[HABBO] Maalesef bu verilere erişemedim.")
        }
    },
}