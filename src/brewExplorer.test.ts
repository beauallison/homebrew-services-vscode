import brewExplorer from './brewExplorer';

describe('brewExplorer', () => {
  const explorer = new brewExplorer();

  it('getChildren()', async () => {
    const services = await explorer.getChildren();
    expect(services).toEqual([['cassandra', 'stopped']]);
  });

  it('getTreeItem()', () => {
    const treeItem = explorer.getTreeItem(['cassandra', 'stopped']);
    expect(treeItem).toEqual({ contextValue: 'serviceItem', label: 'Cassandra: Stopped' });
  });

  it('execute()', async () => {
    const output = await explorer.execute('start', ['cassandra', 'stopped']);
    expect(output).toBeUndefined();
  });
});

