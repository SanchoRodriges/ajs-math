import Character from '../class/Character';

test('Ошибка в name', () => {
  expect(() => new Character('A', 'Bowman')).toThrow(new Error('Имя должно содержать от 2 до 10 символов'));
});

test('Ошибка в type', () => {
  expect(() => new Character('Alex', 'Bow')).toThrow(new Error('Неизвестное существо'));
});

test('Правильно создаётся объект', () => {
  const warior = new Character('Alex', 'Bowman');
  const correct = {
    attack: undefined, defence: undefined, health: 100, level: 1, name: 'Alex', type: 'Bowman',
  };

  expect(warior).toEqual(correct);
});
