# Reproduction `RenameLayer`

A minimal reproduction demonstrating Sketch's [`RenameLayer`](https://developer.sketch.com/reference/action/renamelayer/) Action failing to trigger.

## Steps to Reproduce

1. Clone this repository:

   ```sh
   git clone https://github.com/loilo/repro-sketch-renamelayer.git
   ```

2. Install the `reproduction-renamelayer.sketchplugin` from the cloned repository.

3. Rename a layer and notice how no UI message appears as the `RenameLayer` action is not triggered.

   (For comparison, an analogous listener for the `SelectionChanged.begin` action is also registered and _should_ show a UI message on layer selection, just to make it clear that it's not the plugin that is at fault here.)
