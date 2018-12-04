import Name, {Test1} from './module-test'
import Image from './image';
require('./styles/style.css');

let app = document.getElementById('app');
app.innerHTML = `<p>${Test1}</p>`;

if(module.hot){
    module.hot.accept();
}