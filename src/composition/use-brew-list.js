import { ref, reactive, toRefs } from '@vue/composition-api';
export default {
    setup (){
      const val = ref("");
      const breweries = reactive({ list: [] })
      const submitted = async () => {
          const response = await fetch(
                `https://api.openbrewerydb.org/breweries/?by_name=${val.value}`
          );
          const json = await response.json();
          console.log(json);
          breweries.list = json;
        };
        return  { val, ...toRefs(breweries), submitted };
  }
}