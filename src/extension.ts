import * as vscode from 'vscode';
import brewExplorer from './brewExplorer';

export function activate() {
  const explorer = new brewExplorer();

  vscode.window.registerTreeDataProvider('brewExplorer', explorer);

  vscode.commands.registerCommand('startService', explorer.execute.bind(explorer, 'start'));
  vscode.commands.registerCommand('stopService', explorer.execute.bind(explorer, 'stop'));
  vscode.commands.registerCommand('restartService', explorer.execute.bind(explorer, 'restart'));

  vscode.commands.registerCommand('refreshButton', explorer.refresh.bind(explorer));
}
