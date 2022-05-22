let { UI } = require('sketch')

globalThis.onSelectionChanged = () => {
  UI.message('✅ SelectionChanged.begin')
}

globalThis.onRenameLayer = ()  => {
  UI.message('✅ RenameLayer')
}