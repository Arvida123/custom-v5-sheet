Hooks.once("init", () => {
  console.log("Custom V5 Sheet | Initializing");

  Actors.registerSheet("v5", CustomV5Sheet, {
    types: ["character"],
    makeDefault: false,
    label: "Custom V5 Sheet"
  });
});

class CustomV5Sheet extends ActorSheet {
  get template() {
    return "modules/custom-v5-sheet/templates/sheet.html";
  }
}
