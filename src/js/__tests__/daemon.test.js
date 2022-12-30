import Daemon from '../class/Daemon';

test('Правильно создаётся объект', () => {
  const daemon = new Daemon('Daemon');
  const correct = {
    attack: 100, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
  };

  expect(daemon).toEqual(correct);
});

test('Правильно считается урон Daemon', () => {
  const warior = new Daemon('Daemon');
  warior.setAttack(2);
  const correct = {
    attack: 90, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon',
  };

  expect(warior).toEqual(correct);
});

test('Правильно считается урон Daemon с дурманом', () => {
  const warior = new Daemon('Daemon');
  warior.setStoned();
  warior.setAttack(4);
  const correct = {
    attack: 60, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon', stoned: true,
  };

  expect(warior).toEqual(correct);
});

test('Проверка на дурман: не задан', () => {
  const warior = new Daemon('Daemon');

  expect(warior.getStoned()).toEqual(undefined);
});

test('Проверка на дурман: задан', () => {
  const warior = new Daemon('Daemon');
  warior.setStoned();

  expect(warior.getStoned()).toEqual(true);
});
