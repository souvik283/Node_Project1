const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express();
let port=4000;

app.get("/api/users", (req, res)=>{
    return res.json(users);
})

app.get("/users", (req, res)=>{
    let html = `
    <ul>
    ${users.map((user)=>`<li> ${user.first_name} ${user.last_name} </li>`).join("")}
    </ul>
    `
    res.send(html)
})

app.get("/users/:id", (req, res)=>{
    const id2= Number(req.params.id)
    const user = users.find((user)=> user.id === id2)
    let inhtml = ` <h2>
    ${user.first_name} ${user.last_name} is the user having userId: ${user.id}. His/Her number is: ${user.mobile_no}
    </h2>`
    res.send(inhtml)
})

app.route("/api/users/:id")
.get((req, res)=>{
    let id1 = Number(req.params.id)
    console.log(id1)
    const user1 = users.find((user)=> user.id === id1)

    return res.json(user1)
}).patch((req, res)=>{
    return res.json({ staus : "pending"})
}).delete((req, res)=>{
    return res.json({ staus : "pending"})
})

app.post("/api/users", (req, res)=>{
    return res.json({ staus : "pending"})
})


app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})