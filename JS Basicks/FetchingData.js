async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}

let url = "https://jsonplaceholder.typicode.com/posts";
fetchData(url).then(data => {
    console.log("Fetched data:", data);
});
