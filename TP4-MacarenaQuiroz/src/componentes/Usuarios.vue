<template>

  <section class="src-componentes-usuarios">
    <h1>Usuarios Mockapi</h1>

    <button class="btn btn-danger ml-3" @click="getUsuarios()">GET</button>

        <p>Datos recibidos</p>
        <table class="table table-dark">
        <div class="table-responsive" v-for="(usuario,index) in usuarios" :key="index">
          <td>ID: {{ usuario.id }}</td>
          <td>Nombre: {{ usuario.nombre }}</td>
          <td>Telefono: {{ usuario.telefono }}</td>
          <td>Email: {{ usuario.mail }}</td>
        </div>
        </table>


  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-usuarios',
    props: [],
    mounted () {

    },
    data () {
      return {
        urlUsuarios : 'https://60b90cc780400f00177b612c.mockapi.io/DatosPersona',
        usuarios : []
      }
    },
    methods: {

      async getUsuarios() {
        try{
          let respuesta = await this.axios(this.urlUsuarios)
            console.log('AXIOS GET USUARIOS', respuesta.data)
            this.usuarios = respuesta.data
        }
          catch(error) { console.log(error) }
      },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-usuarios {

  }
</style>
