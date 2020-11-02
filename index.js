fetch("http://localhost:3000/restaurants")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((p) => {
            const h2 = document.createElement('h2')
            h2.innerText = p.name;
            document.body.appendChild(h2);

            const para = document.createElement("p")
            para.innerText = p.content;
            document.body.appendChild(para);
        })
    })

const createRestaurant = (restInfo) => {
    return fetch("http://localhost:3000/restaurants", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(restInfo)
        })
        //you can add restaurant typing the ff on the console 
        //createRestaurant({restaurant: {name: "yod", content:"fancy",user_id: 1}}).then(r => r.json()).then(data => console.log(data))
}

const handleForm = (e) => {
    const { name, content, username } = e.target
    e.preventDefault();
    createRestaurant({
        POST: {
            name: name.value,
            content: content.value,
            username: username.value
        },
    });
};

document.querySelector('form').addEventListener("submit", handleForm);

//Destracturing 
const wes = {
    first: "wes",
    last: "Bos",
    links: {
        social: {
            twitter: "https://twitter.com/wesbos",
            facebook: "https://facebook.com/wesbos.developers"
        },
        web: {
            blog: "https://wesbos.com"
        },
    },
};

const nameLogger = ({ first, last }) => {
    console.log(first)
    console.log(last)
}
nameLogger(wes)


//sprading 
const array = [5, 4, 3, 2, 1, ["t", "a", "s"]];
const nArray = [...array];

//const newArray = [...array.slice(0, 5), [...array[5]]];

// Correct way of spreading objects 
const newWes = {
    ...wes,
    links: {
        social: {...wes.links.social },
        web: {...wes.links.web }
    }
}

const thing = false;
thing ? console.log("things was true") : console.log("things was false")
const name = thing ? "Tesafaye" : wes;
//let name;if (thing) { name = "Tesfaye"} else {name = wes;}

const num1 = 1
const num2 = 2
const num3 = 3

function add(...rest) {
    let sum = 0;
    rest.forEach((num) => {
        sum += num;
    });
    return sum;
}
sum = add(num1, num2, num3, 21);

// function add(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// let sum = add(num1, num2, num3);
console.log(sum);