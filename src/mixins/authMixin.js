import {LOGIN} from "../store/actions.type";

export default {
    async created() {
      await this.handleIncomingToken()
    },
    methods: {
        async handleIncomingToken() {
            if (this.$route.hash) {
                let hash = this.$route.hash
                let token = hash.substring(hash.indexOf('=')+1, hash.indexOf('&'))
                await this.$store.dispatch(LOGIN, token)
                await this.$router.push('/')
            }
        }
    }
}