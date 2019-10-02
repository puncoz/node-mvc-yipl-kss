import App from "./bootstrap/app"

const app = (new App()).app

app.listen(8081, () => {
    console.log("App started at port 8081")
})