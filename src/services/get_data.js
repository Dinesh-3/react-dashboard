const URL = "http://localhost:2020/data"

async function getData() {
    const xAxis = []
    const yAxis = []
    const data = await fetch(URL)
    data.forEach(element => {
        x_axis.push(element.country)
        y_axis.push(element.density)
    });
    console.log("Done")
    return {
        xAxis,
        yAxis
    }
}