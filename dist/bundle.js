(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActorSheetPC_1 = require("./sheets/ActorSheetPC");
/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
/**
 * Init hook.
 */
Hooks.once("init", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Loading Goodbye My Love System`);
        // Register sheet application classes
        Actors.unregisterSheet("core", ActorSheet);
        Actors.registerSheet("good-bye-my-love", ActorSheetPC_1.ActorSheetPC, { types: ["character"], makeDefault: true });
    });
});
},{"./sheets/ActorSheetPC":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorSheetPC = void 0;
const GBMLActorSheet_1 = require("./GBMLActorSheet");
/**
 * Extend the basic ActorSheet with some very simple modifications
 *
 */
class ActorSheetPC extends GBMLActorSheet_1.GBMLActorSheet {
    /**
     * Extend and override the default options used by the 5e Actor Sheet
     * @returns {Object}
     */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["character", "sheet", "actor"],
            template: "systems/good-bye-my-love/dist/templates/actor/character.html",
            width: 830,
            height: 900,
            closeOnSubmit: false,
            submitOnChange: true,
            submitOnClose: true,
            top: 0,
            left: 0,
            editable: true,
            baseApplication: 'good-bye-my-love',
            id: "idlarp",
            popOut: true,
            minimizable: true,
            resizable: true,
            title: "null",
            scrollY: [],
            tabs: [],
            dragDrop: [],
            filters: []
        });
    }
}
exports.ActorSheetPC = ActorSheetPC;
},{"./GBMLActorSheet":3}],3:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GBMLActorSheet = void 0;
/**
 * Extend the basic ActorSheet with some very simple modifications
 *
 */
class GBMLActorSheet extends ActorSheet {
    /** @overrride */
    getData() {
        let data = super.getData();
        return data;
    }
    rollSkill(event) {
        return __awaiter(this, void 0, void 0, function* () {
            const dice = event.currentTarget.dataset.die;
            const diceName = event.currentTarget.dataset.name;
            const tn = event.currentTarget.dataset.tn;
            let r = new Roll('1' + dice, {});
            let label = 'Rolling ';
            if (diceName == "classDie") {
                label += '<strong>Class die!</strong>';
            }
            else {
                label += diceName;
            }
            if (this.actor.system[diceName]) {
                return;
            }
            // Execute the roll
            yield r.evaluate({ async: true });
            r.toMessage({
                speaker: ChatMessage.getSpeaker({ actor: this.actor }),
                flavor: label
            });
        });
    }
    /**
     * Activate event listeners using the prepared sheet HTML
     * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
     */
    activateListeners(html) {
        // Owner Only Listeners
        if (this.actor.owner) {
            console.log("woo");
        }
        else {
            html.find(".rollable").each((i, el) => el.classList.remove("rollable"));
        }
        // rolls
        html.find('.click-roll').click((event) => __awaiter(this, void 0, void 0, function* () {
            this.rollSkill(event);
        }));
        // Handle default listeners last so system listeners are triggered first
        super.activateListeners(html);
    }
}
exports.GBMLActorSheet = GBMLActorSheet;
},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
