<script setup>

</script>

<template>
  <h1>{{ text }}</h1>

  <div v-for="(q, qindex) in questions"
       class="question_div"
       :id="`q${qindex + 1}`">
    <div class="questionText">
      <span>{{ q }}</span>
    </div>
    <div class="ratingDiv">
      <span class="uncolor"
            v-for="(i, rindex) in stars"
            :id="`q${qindex + 1}r${rindex + 1}`"
            @click="colorTillhere(qindex + 1, rindex + 1)"
            :style="{ filter: coloredStars[qindex + 1] && coloredStars[qindex + 1] >= rindex + 1 ? 'grayscale(0%)' : 'grayscale(100%)' }">

        <svg class="rate_icon"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 48 48"
           width="48px"
           height="48px">
        <linearGradient id="q0c2dLEp_4LHk~8cW2fATa"
                        x1="9.009"
                        x2="38.092"
                        y1="6.36"
                        y2="45.266"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0"
                stop-color="#ffda1c" />
          <stop offset="1"
                stop-color="#feb705" />
        </linearGradient>
        <path fill="url(#q0c2dLEp_4LHk~8cW2fATa)"
              d="M24.913,5.186l5.478,12.288l13.378,1.413c0.861,0.091,1.207,1.158,0.564,1.737l-9.993,9.005	l2.791,13.161c0.18,0.847-0.728,1.506-1.478,1.074L24,37.141l-11.653,6.722c-0.75,0.432-1.657-0.227-1.478-1.074l2.791-13.161	l-9.993-9.005c-0.643-0.579-0.296-1.646,0.564-1.737l13.378-1.413l5.478-12.288C23.439,4.395,24.561,4.395,24.913,5.186z" />
      </svg>
    </span>
  </div>
</div>

</template>


<script>
export default{

  
  data(){
    return {
      text: "Hello Prakhar, I am your app :)",
      stars: [1, 2, 3, 4, 5],
      questions: ["Question 1", "Question 2", "Question 3", "Question 4", "Navbar"],
      coloredStars: []
    }
  },
  methods: {
    colorTillhere(qID, starID) {
      this.coloredStars[qID] = starID;
    }
  }
}
</script>


<style>
*{
    user-select: none;
}
.uncolor{
    /* -webkit-filter: grayscale(100%);
    filter: grayscale(100%); */
}


.rate_icon{
    cursor: pointer;
    
}

.question_div{
    display: flex;
    flex-direction: column;
}

</style>