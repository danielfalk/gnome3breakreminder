const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Indicator = Me.imports.breaktimerIndicator.Indicator;

class Extension {
  constructor(uuid) {
    this._uuid = uuid;
  }

  enable() {
    this._indicator = new Indicator();
    Main.panel.addToStatusArea(this._uuid, this._indicator);
  }

  disable() {
    this._indicator.destroy();
    this._indicator = null;
  }
}

function init(meta) {
  return new Extension(meta.uuid);
}
