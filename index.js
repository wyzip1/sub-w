const wareHouse = {
  id: 1,
}

export default class Subscribe {
  constructor() {
    this.__id = wareHouse.id;
    wareHouse[wareHouse.id] = {
      events: {},
      data: {}
    };
    wareHouse.id++;
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