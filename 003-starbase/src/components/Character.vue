<template>
  <div class="col-sm-4" @click="switchCharacter">
    <div class="character-card">
      <div class="card-block">
        <h4 class="card-title">
          {{character.name}}
        </h4>
        <p class="card-text">
          Height: {{character.height}}
        </p>
        <p class="card-text">
          Mass: {{character.mass}}
        </p>
        <p class="card-text">
          Hair Color: {{character.hair_color}}
        </p>
        <p class="card-text">
          Eye Color: {{character.eye_color}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`http://swapi.co/api/people/${id}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => this.character = json)
    },
    switchCharacter(){
      let random_id = Math.floor(Math.random()*83) + 1;
      this.fetchCharacter(random_id)
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }

}
</script>