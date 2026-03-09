 function searchVideos() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const results = document.getElementById("results");
  results.innerHTML = "";

  const videos = [
    {title: "Extreme Let Go", id: "R00xb1wSUts"},
    {title: "Deadlocked Invisible and fast", id: "g0Quj2N3nYc"},
    {title: "Deadlocked fast", id: "hBnF4ZaEwSI"}
  ];

  const filtered = videos.filter(v => v.title.toLowerCase().includes(query));

  if (filtered.length > 0) {
    filtered.forEach(v => {
     
      results.innerHTML += `<iframe src="https://www.youtube.com/embed/${v.id}" allowfullscreen></iframe>`;
    });
  } else {
    results.innerHTML = "<p style='margin-top: 20px;'>No videos found.</p>";
  }
  
}


