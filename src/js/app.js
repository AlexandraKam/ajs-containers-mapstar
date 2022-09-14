export default class Settings {
  constructor(theme, music, difficulty) {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.userSettings = new Map(theme, music, difficulty);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
