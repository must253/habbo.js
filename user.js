const axios = require("axios");
const moment = require("moment");

var otels = {
    en: 'en',//must253
    br: 'br',//must253
    tr: 'tr',//mustafa8445
    de: 'de',//must253
    es: 'es',//must253
    fi: 'fi',//must
    fr: 'fr',//must
    it: 'it',//must253
    nl: 'nl'//must253
}



var action = require("./user-config/actions")
var actions = Object.values(action)[0]
act = function(mm) {
    if (actions.includes(mm)) {
        return mm
    }
    else{
        mm = "wav"
        return mm
    }
}

var faces = require("./user-config/face")
var face = Object.values(faces)[0]
let facess = function(mm) {
    if (face.includes(mm)) {
        return mm
    }
    else{
        mm = "nor"
        return mm
    }
}

user = async function(name, hotel, action, face) {

    hotelname = !hotel ? "en" : hotel;
    hotelname = otels[hotelname]?hotel:"en"
    var language = require("./languages/"+otels[hotelname])
    let otel = language
    
    moment.locale(otel.locale)
    try {
        const habbo = await axios.get("https://www.habbo."+otel.otel+"/api/public/users?name="+name)
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
            name: data.name,
            motto: data.motto ? data.motto : otel.noMottos,
            online: data.online ? "online":otel.noOnline,
            level: data.currentLevel,
            profilGorunurluk: data.profileVisible? otel.open:otel.close,
            seciliRozetler: selected.join(", ")? selected.join(", "):otel.badges,
            yildizTas: data.starGemCount,
            songGiris: moment(time).format("LL HH:mm:ss") + "(" + moment(time).fromNow()+")",
            kayitTarihi: moment(created).format("LL HH:mm:ss") + "(" + moment(created).fromNow()+")",
            mevcutSeviyeYuzdelik: "%"+data.currentLevelCompletePercent,
            image: "https://www.habbo.com.tr/habbo-imaging/avatarimage?user="+data.name+"&direction=2&head_direction=3&gesture="+facess(face)+"&action="+act(action)+"&size=l"
        }
        return mustData
    } catch (error) {
        const err = error.response.data.error;
        if(err === "not-found") return console.log("[HABBO] "+otel.errors1);
        
        console.log("[HABBO] "+otel.errors2);
        console.log("[ERROR] "+err);
    }
}

module.exports = {
    user
}
