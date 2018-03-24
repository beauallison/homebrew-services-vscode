/* tslint:disable:no-duplicate-imports */

import { TreeDataProvider, TreeItem } from 'vscode';
import * as vscode from 'vscode';

const brew = require('homebrew-services');

const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

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
      label: `${upperFirst(element[0])}: ${upperFirst(element[1])}`,
      contextValue: 'serviceItem',
    };
  }

  public async execute(command: string, args: string[]) {
    const { status } = await brew[command]({ service: args[0] });
    this.refresh();
    return vscode.window.showInformationMessage(`Service: ${upperFirst(args[0])} ${status}`);
  }
}

export function activate(context: vscode.ExtensionContext) {
  const explorer = new BrewExplorer();
  vscode.window.registerTreeDataProvider('brewExplorer', explorer);

  vscode.commands.registerCommand('startService', args => explorer.execute('start', args));
  vscode.commands.registerCommand('stopService', args => explorer.execute('stop', args));
  vscode.commands.registerCommand('refreshButton', () => explorer.refresh());
}
