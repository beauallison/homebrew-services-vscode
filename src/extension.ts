import * as vscode from 'vscode';
import brewExplorer from './brewExplorer';

export function activate() {
  const explorer = new brewExplorer();
  vscode.window.registerTreeDataProvider('brewExplorer', explorer);

  vscode.commands.registerCommand('startService', args => explorer.execute('start', args));
  vscode.commands.registerCommand('stopService', args => explorer.execute('stop', args));
  vscode.commands.registerCommand('refreshButton', () => explorer.refresh());
}
