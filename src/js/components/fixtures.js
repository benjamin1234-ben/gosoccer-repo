export default {
    template: "#fixtures",
    computed: {
        fixtures() {
            if(this.$route.params.league === "epl") {
                return this.$store.state.epl.fixtures;
            } else if(this.$route.params.league === "laliga") {
                return this.$store.state.laliga.fixtures;
            } else if(this.$route.params.league === "seriaA") {
                return this.$store.state.seriaA.fixtures;
            } else if(this.$route.params.league === "bundesliga") {
                return this.$store.state.bundesliga.fixtures;
            } else if(this.$route.params.league === "ligueOne") {
                return this.$store.state.ligueOne.fixtures;
            } else if(this.$route.params.league === "champs") {
                return this.$store.state.champs.fixtures;
            } else if(this.$route.params.league === "europa") {
                return this.$store.state.europa.fixtures;
            } 
        }
    },
    created() {
        if(this.$route.params.league === "champs") {
            this.$store.dispatch("getChampsFixtures");
        } else if(this.$route.params.league === "europa") {
            this.$store.dispatch("getEuropaFixtures");
        } else if(this.$route.params.league === "epl") {
            this.$store.dispatch("getEplFixtures");
        } else if(this.$route.params.league === "laliga") {
            this.$store.dispatch("getlaLigaFixtures");
        } else if(this.$route.params.league === "seriaA") {
            this.$store.dispatch("getseriaAFixtures");
        }  else if(this.$route.params.league === "bundesliga") {
            this.$store.dispatch("getBundesligaFixtures");
        } else if(this.$route.params.league === "ligueOne") {
            this.$store.dispatch("getligueOneFixtures");
        } 
    },
    data() {
        return {
            versus: "VS"
        }
    },
    filters: {
        dateString(val) {
            return val.toString().slice(0, 19);
        }
    },
    methods: {
        link(e) {
            e.preventDefault();
            let id = e.target.id;
            if(this.$route.params.league === "epl") {
                window.location.assign(`/leagues/epl/fixture/2790/${id}`);
            } else if(this.$route.params.league === "laliga") {
                window.location.assign(`/leagues/laliga/fixture/2833/${id}`);
            } else if(this.$route.params.league === "seriaA") {
                window.location.assign(`/leagues/seriaA/fixture/2857/${id}`);
            } else if(this.$route.params.league === "bundesliga") {
                window.location.assign(`/leagues/bundesliga/fixture/2755/${id}`);
            } else if(this.$route.params.league === "ligueOne") {
                window.location.assign(`/leagues/ligueOne/fixture/2664/${id}`);
            } else if(this.$route.params.league === "champs") {
                window.location.assign(`/_leagues/champs/fixture/2771/${id}`);
            } else if(this.$route.params.league === "europa") {
                window.location.assign(`_/leagues/europa/fixture/2777/${id}`);
            } 
        }
    }
}