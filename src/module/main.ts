
import { ActorSheetPC } from "./sheets/ActorSheetPC";


/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

/**
 * Init hook.
 */
 Hooks.once("init", async function () {
    console.log(`Loading Goodbye My Love System`);
    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("good-bye-my-love", ActorSheetPC, { types: ["character"], makeDefault: true });
 }); 