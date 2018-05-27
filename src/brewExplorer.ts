/* tslint:disable:no-duplicate-imports */

import * as vscode from 'vscode';
import { TreeDataProvider, TreeItem } from 'vscode';
import { upperFirst } from './helpers';

const brew = require('homebrew-services');

export default class BrewExplorer implements TreeDataProvider<any> {

  private onDidChange: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
  readonly onDidChangeTreeData = this.onDidChange.event;

  refresh() {
    this.onDidChange.fire();
  }

  public async getChildren() {
    const { services } = await brew.list()
      .catch(() => ({ services: new Map() }));
    return [...services.entries()];
  }

  public getTreeItem(service: string[]): TreeItem {
    const status = service[1] === 'started' ? 'started' : 'stopped';
    const generatePath = (style: string) => `${__dirname}/../resources/${status}${style}.svg`;

    const iconPath = {
      light: generatePath('Light'),
      dark: generatePath('Dark'),
    };

    return {
      iconPath,
      label: `${upperFirst(service[0])}: ${upperFirst(service[1])}`,
      contextValue: 'serviceItem',
    };
  }

  public async execute(command: string, args: string[]) {
    const { status } = await brew[command]({ service: args[0] })
      .catch(() => ({ status: 'error' }));
    this.refresh();
    return vscode.window.showInformationMessage(`Service: ${upperFirst(args[0])} ${status}`);
  }
}
