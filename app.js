const app = Vue.createApp(
    {
        //data, functions, template
        data(){
            return{
                text:"Hello Prakhar, I am your app :)",
                stars:[1, 2, 3, 4, 5],
                questions: ["Question 1", "Question 2", "Question 3", "Question 4", "Navbar"],
                
            }
        },
        methods:{
            colorTillhere(qID, starID){
                let spanElement;
                for (let i = 1; i <= starID; i++ ) {
                    spanElement = document.getElementById(`q${qID}r${i}`);
                    spanElement.classList.remove('uncolor');
                }
                for (let i = 5; i > starID; i--) {
                    spanElement = document.getElementById(`q${qID}r${i}`);
                    spanElement.classList.add('uncolor');
                }

                }
            }
        }
)

app.mount('#app')