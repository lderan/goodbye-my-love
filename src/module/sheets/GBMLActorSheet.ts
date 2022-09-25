/**
 * Extend the basic ActorSheet with some very simple modifications
 *
 */
 export class GBMLActorSheet extends ActorSheet {

	/** @overrride */
	getData() {
		let data = super.getData();
		return data;
	}

	async rollSkill(event) {
		const dice = event.currentTarget.dataset.die;
		const diceName = event.currentTarget.dataset.name;
		const tn = event.currentTarget.dataset.tn;
		let r = new Roll('1'+dice, {});
		let label = 'Rolling ';

		if (diceName == "classDie") {
			label += '<strong>Class die!</strong>';
		} else {
			label += diceName;
		}

		if(this.actor.system[diceName]) {
			return;
		}

		// Execute the roll
		await r.evaluate({async:true});

		r.toMessage({
			speaker: ChatMessage.getSpeaker({ actor: this.actor }),
			flavor: label
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
		} else {
			html.find(".rollable").each((i, el) => el.classList.remove("rollable"));
		}

		// rolls
		html.find('.click-roll').click(async event => {
		  	this.rollSkill(event);
		});

		// Handle default listeners last so system listeners are triggered first
		super.activateListeners(html);
	}

}