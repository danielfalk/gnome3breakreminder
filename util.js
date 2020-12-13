const Gio = imports.gi.Gio;
const Me = imports.misc.extensionUtils.getCurrentExtension();

function getSettings() {
  let defaultSource = Gio.SettingsSchemaSource.get_default();
  let source = Gio.SettingsSchemaSource.new_from_directory(Me.path + "/schemas/", defaultSource, false);

  let schemaId = "org.gnome.shell.extensions.breakreminder";
  let schema = source.lookup(schemaId, false);

  if (!schema) {
    throw new Error("Schema " + schemaId + " could not be found in the path " + Me.path);
  }

  return new Gio.Settings({ settings_schema: schema });
}
