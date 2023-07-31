export const state = () => ({
  timing: 30000,
})

export const getters = {
  getCacheTiming: state => {
    return state.timing
  },
}
