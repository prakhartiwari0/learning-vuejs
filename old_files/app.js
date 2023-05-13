const app = Vue.createApp(
    {
        //data, functions, template
        data(){
            return{
                text:"Hello Prakhar, I am your app :)",
                stars:[1, 2, 3, 4, 5],
                questions: ["Question 1", "Question 2", "Question 3", "Question 4", "Navbar"],
                coloredStars:[]
                
            }
        },
        methods:{
            colorTillhere(qID, starID) {
                this.coloredStars[qID] = starID;
            }
            }
        }
)

app.mount('#app')