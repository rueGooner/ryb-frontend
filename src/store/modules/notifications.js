const defaultState = () => ({
  messages: {},
  displayNotification: false,
  notificationType: 'notice'
});

const state = defaultState();

const getters = {
  displayNotification: state => state.displayNotification,
  notifications: state => state.messages,
  notificationType: state => state.notificationType
};

const mutations = {
  DISPLAY_NOTIFICATION: (state, display) => {
    state.displayNotification = display;
  },

  SET_NOTIFICATION: (state, { messages, type }) => {
    state.messages = messages;
    state.notificationType = type;
  },

  CLEAR_NOTIFICATIONS: (state) => {
    state.messages = [];
    state.notificationType = 'notice';
  }
}

const actions = {
  handleNotification({ commit }, { message, type }) {
    commit('DISPLAY_NOTIFICATION', true);
    console.log(typeof message);
    commit('SET_NOTIFICATION', {
      messages: message,
      type: type
    });
    setTimeout(() => {
      commit('DISPLAY_NOTIFICATION', false);
      commit('CLEAR_NOTIFICATIONS');
    }, 12500);
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};
