export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('Неизвестное существо');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  // насылаем дурман
  setStoned() {
    this.stoned = true;
  }

  // получаем true или undefined
  getStoned() {
    return this.stoned;
  }

  // рассчитываем атаку по клеткам и при дурмане
  setAttack(cell) {
    // без дурмана
    const percent = (10 - (cell - 1)) / 10;
    this.attack *= percent;
    // если дурман
    if (this.stoned) {
      this.attack -= Math.log2(cell) * 5;
    }
  }

  // получаем уровень атаки
  getAttack() {
    return this.attack;
  }
}
