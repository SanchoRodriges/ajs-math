import Magician from '../class/Magician';

test('Правильно создаётся объект', () => {
  const magician = new Magician('Magician');
  const correct = {
    attack: 100, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician',
  };

  expect(magician).toEqual(correct);
});

test('Правильно считается урон Magician', () => {
  const warior = new Magician('Magician');
  warior.setAttack(2);
  const correct = {
    attack: 90, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician',
  };

  expect(warior).toEqual(correct);
});

test('Правильно считается урон Magician с дурманом', () => {
  const warior = new Magician('Magician');
  warior.setStoned();
  warior.setAttack(2);
  const correct = {
    attack: 85, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician', stoned: true,
  };

  expect(warior).toEqual(correct);
});

test('Проверка на дурман: не задан', () => {
  const warior = new Magician('Magician');

  expect(warior.getStoned()).toEqual(undefined);
});

test('Проверка на дурман: задан', () => {
  const warior = new Magician('Magician');
  warior.setStoned();

  expect(warior.getStoned()).toEqual(true);
});
