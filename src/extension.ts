/* tslint:disable:no-duplicate-imports */

import { TreeDataProvider, TreeItem } from 'vscode';
import * as vscode from 'vscode';

const brew = require('homebrew-services');

class BrewExplorer implements TreeDataProvider<any> {

  private onDidChange: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
  readonly onDidChangeTreeData = this.onDidChange.event;

  refresh() {
    this.onDidChange.fire();
  }

  public async getChildren() {
    const { services } = await brew.list();
    return [...services.entries()];
  }

  public getTreeItem(element: string[]): TreeItem {
    return {
      label: `${element[0]} status: ${element[1]}`,
      contextValue: 'serviceItem',
    };
  }

  public async execute(command: string, args: string[]) {
    const { status } = await brew[command]({ service: args[0] });
    this.refresh();
    return vscode.window.showInformationMessage(`Service: ${args[0]} ${status}`);
  }
}

export function activate(context: vscode.ExtensionContext) {
  const explorer = new BrewExplorer();
  vscode.window.registerTreeDataProvider('brewExplorer', explorer);

  vscode.commands.registerCommand('startService', args => explorer.execute('start', args));
  vscode.commands.registerCommand('stopService', args => explorer.execute('stop', args));
  vscode.commands.registerCommand('refreshButton', () => explorer.refresh());
}

export function deactivate() {
}
