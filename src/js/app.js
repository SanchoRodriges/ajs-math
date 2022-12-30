import Magician from './class/Magician';
import Daemon from './class/Daemon';

const magician = new Magician('magician');
const daemon = new Daemon('daemon');


console.log(magician);
daemon.setStoned();
daemon.setAttack(3);
console.log(daemon.getStoned());
console.log(daemon);
