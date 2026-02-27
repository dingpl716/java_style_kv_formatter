import * as vscode from "vscode";
import { formatJavaStyleKV } from "./formatter";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "javaStyleKvFormatter.formatSelection",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("No active editor found.");
        return;
      }

      const selection = editor.selection;
      const hasSelection = !selection.isEmpty;
      const range = hasSelection
        ? selection
        : new vscode.Range(
            editor.document.positionAt(0),
            editor.document.positionAt(editor.document.getText().length)
          );

      const text = editor.document.getText(range);
      const formatted = formatJavaStyleKV(text);

      editor.edit((editBuilder) => {
        editBuilder.replace(range, formatted);
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
