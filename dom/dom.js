// dom  class操作

document.getElementById('app').classList.add('mystyle');

document
  .getElementById('app')
  .classList.add('mystyle', 'anotherClass', 'thirdClass');

document.getElementById('app').classList.remove('mystyle');

document
  .getElementById('app')
  .classList.remove('mystyle', 'anotherClass', 'thirdClass');

document.getElementById('app').setAttribute('class', 'mystyle');

console.log(document.getElementById('app').getAttribute('class'));
// 检查是否含有某个CSS类
console.log(app.classList.contains('mystyle'));
