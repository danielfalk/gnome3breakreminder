const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Indicator = Me.imports.breaktimerIndicator.Indicator;

var indicator;

function init() {}

function enable() {
  indicator = new Indicator();
  Main.panel.addToStatusArea("breakIndicator", indicator);
}

function disable() {
  Main.panel.statusArea.breakIndicator.destroy();
  delete Main.panel.statusArea.breakIndicator;
}
