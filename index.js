const wareHouse = { }

export default class Subscribe {

  constructor(data = {}) {
    this.__id = guid();
    wareHouse[this.__id] = {
      events: {},
      data: {...data}
    };
  }

  on = (key, cb) => wareHouse[this.__id].events[key] = cb;

  emit = (key, props) => {
    if (typeof wareHouse[this.__id].events[key] !== 'function') return;
    wareHouse[this.__id].events[key](props);
  }

  set = (key, data) => {
    wareHouse[this.__id].data[key] = data;
  };

  get = (key) => {
    return wareHouse[this.__id].data[key];
  };

  remove_data = (key) => {
    delete wareHouse[this.__id].data[key];
  }

  remove_event = (key) => {
    delete wareHouse[this.__id].events[key];
  }

  clear_data = () => {
    delete wareHouse[this.__id].data;
    wareHouse[this.__id].data = {};
  }

  clear_events = () => {
    delete wareHouse[this.__id].events;
    wareHouse[this.__id].events = {};
  }

  static showWareHouse() {
    console.log(wareHouse);
  };
  
}

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}