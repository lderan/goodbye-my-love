import { GBMLActorSheet } from "./GBMLActorSheet";

/**
 * Extend the basic ActorSheet with some very simple modifications
 *
 */
export class ActorSheetPC extends GBMLActorSheet {

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