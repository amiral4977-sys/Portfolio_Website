// =============================
// Doughnut Chart
// =============================

const skillChart = new Chart(document.getElementById("skillChart"), {

    type: "doughnut",

    data: {

        labels: [

            "Excel",
            "Power BI",
            "SQL",
            "Python"

        ],

        datasets: [{

            data: [95,90,85,80],

            backgroundColor: [

                "#16a34a",
                "#facc15",
                "#3b82f6",
                "#f97316"

            ],

            borderWidth:0,
            hoverOffset:15

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                position:"bottom",

                labels:{

                    color:"#fff",
                    padding:20,
                    font:{
                        size:14
                    }

                }

            }

        }

    }

});


// =============================
// Line Chart
// =============================

const progressChart = new Chart(document.getElementById("progressChart"), {

    type:"line",

    data:{

        labels:[
            "2022",
            "2023",
            "2024",
            "2025",
            "2026"
        ],

        datasets:[{

            label:"Learning Progress",

            data:[
                45,
                60,
                72,
                86,
                95
            ],

            borderColor:"#38bdf8",

            backgroundColor:"rgba(56,189,248,.20)",

            fill:true,

            tension:.4,

            pointRadius:5,

            pointBackgroundColor:"#38bdf8"

        }]

    },

    options:{

        responsive:true,

        scales:{

            x:{

                ticks:{
                    color:"#fff"
                },

                grid:{
                    color:"#334155"
                }

            },

            y:{

                beginAtZero:true,

                max:100,

                ticks:{
                    color:"#fff"
                },

                grid:{
                    color:"#334155"
                }

            }

        },

        plugins:{

            legend:{

                labels:{
                    color:"#fff"
                }

            }

        }

    }

});



// =============================
// Counter Animation
// =============================

const counters=document.querySelectorAll(".summary-box h1");

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

let speed=25;

let update=()=>{

if(count<target){

count++;

counter.innerText=count+"+";

setTimeout(update,speed);

}

}

update();

});




// =============================
// KPI Card Hover Animation
// =============================

const cards=document.querySelectorAll(".kpi-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});




// =============================
// Tech Badge Animation
// =============================

const tech=document.querySelectorAll(".tech-list span");

tech.forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="scale(1.08)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="scale(1)";

});

});