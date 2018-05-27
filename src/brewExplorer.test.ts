import brewExplorer from './brewExplorer';

describe('brewExplorer', () => {
  const explorer = new brewExplorer();

  describe('getChildren()', () => {
    it('should return services', async () => {
      const services = await explorer.getChildren();
      expect(services).toEqual([['cassandra', 'stopped']]);
    });

    it('should return an empty array on error', async () => {
      const services = await explorer.getChildren();
      expect(services).toEqual([]);
    });
  });

  describe('getTreeItem()', () => {
    it('should return a stopped tree item', () => {
      const { iconPath, ...treeItem } = explorer.getTreeItem(['cassandra', 'stopped']);
      expect(treeItem).toEqual({ contextValue: 'serviceItem', label: 'Cassandra: Stopped' });
      expect(iconPath['dark']).toMatch(/Dark/);
      expect(iconPath['light']).toMatch(/Light/);
    });

    it('should return a started tree item', () => {
      const { iconPath, ...treeItem } = explorer.getTreeItem(['cassandra', 'started']);
      expect(treeItem).toEqual({ contextValue: 'serviceItem', label: 'Cassandra: Started' });
      expect(iconPath['dark']).toMatch(/Dark/);
      expect(iconPath['light']).toMatch(/Light/);
    });
  });

  describe('execute()', () => {
    it('should execute', async () => {
      await explorer.execute('start', ['cassandra', 'stopped']);
    });

    it('should catch execution errors', async () => {
      await explorer.execute('start', ['cassandra', 'stopped']);
    });
  });
});

