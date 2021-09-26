# sub-w

## use
```JavaScript
import Subscribe from 'Sub-w';

const sub = new Subscribe({ num: 100, name: 'jack' });

sub.get('num');     // 100
sub.get('name');    // jack

sub.set('age', 20);
sub.get('age');     // 20

sub.remove_data('num');
sub.get('num');     // undefined;

// clear data
sub.clear_data();

sub.on('hello', (str) => {
  console.log(str)  // ?
});

sub.emit('hello', '?');

sub.remove_event('hello');
sub.clear_event();

// look detail
Subscribe.showWareHouse();
```
