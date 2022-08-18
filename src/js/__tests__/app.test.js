import Settings from '../app';

test('Изменение настроек по умолчанию', () => {
  const newSettings = new Settings();
  expect(Array.from(newSettings.settings)).toEqual([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
});
