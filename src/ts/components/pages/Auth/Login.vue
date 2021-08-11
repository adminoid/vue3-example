<template lang="pug">
.container.d-flex.justify-content-center.h-100.align-items-center
  .login.d-flex.flex-column.justify-content-center.align-items-center.col-7.rounded-3.h-50
    h1 Войдите
    .form-floating.mb-3
      input#floatingLogin.form-control(type='email' placeholder='name@example.com')
      label(for='floatingLogin') Логин
    .form-floating.mb-3
      input#floatingPassword.form-control(type='password' placeholder='Password')
      label(for='floatingPassword') Пароль
    button.btn.btn-primary.btn-lg(@click="login") Войти
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import storage from 't@/modules/storage'
import { useStore } from 'vuex'

const Login = defineComponent({
  setup () {
    const store = useStore()
    const login = () => {
      storage.token = 'logged'
      store.commit('login')
    }

    return {
      login
    }
  }
})

export default Login
</script>
