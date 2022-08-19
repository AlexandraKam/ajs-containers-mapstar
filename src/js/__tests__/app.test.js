import Settings from '../app';

test('Изменение настроек по умолчанию', () => {
  const newSettings = new Settings();
  newSettings.userSettings = [['theme', 'light'], ['music', 'trance'], ['difficulty', 'nightmare']];
  expect(Array.from(newSettings.settings)).toEqual([['theme', 'light'], ['music', 'trance'], ['difficulty', 'nightmare']]);
});
