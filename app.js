const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addGif(res){
  let numResults = res.data.length;
  if(numResults){
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
    $("form").on("submit", asyncfunction(e) {
                 e.preventDefault();
    let searchTerm = $searchInput.val();
    $searchInput.val("");
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKyXfNYdLoOIym"
      }
    });
    addGift(response.data);
  });
  $("#remove").on("click", function(){
    $gifArea.empty();
  });
