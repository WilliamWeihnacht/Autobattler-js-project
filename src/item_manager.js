const Item = require("./item");
const Util = require("./util");

class ItemManager {

    constructor() {
        this.items = [];
        this.generateItemList();
    }

    generateItemList() {
        const hpUp = new Item(50,0,0,0,0,"Health Up","./images/items/health.png");
        this.items.push(hpUp);

        const dmgUp = new Item(0,3,0,0,0,"Damage Up","./images/items/damage.png");
        this.items.push(dmgUp);

        const hitChanceUp = new Item(0,0,.05,0,0,"Hit Chance Up","./images/items/hitchance.png");
        this.items.push(hitChanceUp);

        const armorUp = new Item(0,0,0,3,0,"Armor Up","./images/items/armor.png");
        this.items.push(armorUp);

        const lifeStealUp = new Item(0,0,0,0,0.1,"Lifesteal Up","./images/items/lifesteal.png");
        this.items.push(lifeStealUp);

        const lsUpHpDown = new Item(-50,0,0,0,0.2,"Lifesteal +2/HP -1","./images/items/ls2hp-1.png");
        this.items.push(lsUpHpDown);
        
        // const item = new Item(0,0,0,0,0,"","");
        // this.items.push(item);
    }

    get3RandomItems() {
        let items = [];
        while (items.length < 3) {
            let i = Util.getRandomInt(0,this.items.length);
            if (!items.includes(this.items[i])) items.push(this.items[i]);
        }
        return items;
    }
}

module.exports = ItemManager;