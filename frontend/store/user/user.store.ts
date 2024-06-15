export conts useUserStore = defineStore('user', {
  state: () => ({
    users: [] as Users[],
  })
})
