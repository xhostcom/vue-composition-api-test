<template>
<div class="brews">
<header>
        <h1>Vue Composition API Test</h1>
</header>
    <h2>Brew Search</h2>
    <section>
      <form @submit.prevent="submitted">
        <input v-model="val" type="text" />
        <button>Submit</button>
      </form>
    </section>
    <div class="search-results"  v-for="brewery in list" :key="brewery.id">
       <ul>
           <li>
               <span class="title">Name:</span>
               <span class="brew">{{ brewery.name }}</span>
           </li>
            <li>
               <span class="title">Street:</span>
               <span class="brew">{{ brewery.street }}</span>
           </li>
            <li>
               <span class="title">City:</span>
               <span class="brew">{{ brewery.city }}</span>
           </li>
            <li>
               <span class="title">Zip:</span>
               <span class="brew">{{brewery.postal_code}}</span>
           </li>
        </ul>
    </div>
</div>
</template>
<script>
import useBrewList from "../composition/use-brew-list";
export default {
    setup (){
      const { val, list, submitted } = useBrewList;
      return { val, list, submitted } ;
  }
}
</script>

<style>
header {
background-color:black;
padding: 15px;
}
header h1 {
    color: white;
}
.brews {
padding-top: 50px;
}
.search-results {
background-color:azure;
padding-top: 5px;
padding-bottom: 5px;
}
.search-results ul {
list-style: none;
}
</style>