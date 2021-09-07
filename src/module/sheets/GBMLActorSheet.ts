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

	/**
	 * Activate event listeners using the prepared sheet HTML
	 * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
	 */
	activateListeners(html) {
		// Owner Only Listeners
		if (this.actor.owner) {

		} else {
			html.find(".rollable").each((i, el) => el.classList.remove("rollable"));
		}

		// Handle default listeners last so system listeners are triggered first
		super.activateListeners(html);
	}

}