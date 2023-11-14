const posts = [
    {title: 'Post One', body: 'This is my first post'},
    {title: 'Post Two', body: 'This is my second post'},
    {title: 'Post Three', body: 'This is my third post'}
]

function getPosts(){
    //settimeout takes a callback function AND a time for it to delay.
    setTimeout(() => {
    posts.forEach((post, index)=>{
        console.log(`${post.body} --- ${index} \n`)
    })
    },5000)
}

//this method won't get called because the timeout is 9 seconds and by that time the get posts would have finished running as the timeout is only 5 seconds.
// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post);
//     },9000)
// }

//getPosts();





//HOW TO handle the problem using CALLBACK
// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         console.log("IT IS FINISHED")
//         callback();
//     },9000)
// }

// createPost({title: "Post Four", body: "This is my fourth post"}, getPosts);



//HOW to handle the problem using PROMISES
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
            
//             //for checking error
//             const error = false; 

//             if(!error){resolve()}
//             else{
//                 reject("Something went wrong",null);
//             }


//         },9000)

//     }
//     )
// }

// createPost({title: "Post Four", body: "This is my fourth post"})
// .then(getPosts)
// .catch(err => console.log(err));

//HOW to use Promise.all
// //create a bunch of promises...
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, "Felixified")
// });

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json())

// const promises = [promise1, promise2, promise3, promise4];

// Promise.all(promises)
//         .then(values => console.log(values));





// //HOW to use ASYNC AWAIT
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
            
//             //for checking error
//             const error = false; 

//             if(!error){resolve()}
//             else{
//                 reject("Something went wrong",null);
//             }
//         },9000)
//     }
//     )
// }

// async function init(){
//     await createPost({title: " Post 4", body: "This is my fourth post"});

//     await getPosts();
// }

// init();



//How to use ASYNC AWAIT with FETCH
async function fetchUsersData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);
}

fetchUsersData();