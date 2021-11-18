export const state = () => ({
  title: 'Home - SystemEXE Viet Nam | Japanese Quality Software'
})
export const mutations = {
  updateTitle (state, text) {
    const basic = ' - SystemEXE Viet Nam | Japanese Quality Software'
    state.title = text + basic
  }
}

export const getters = {
  title: state => state.title
}
