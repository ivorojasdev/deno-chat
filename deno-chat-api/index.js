addEventListener("fetch", (event) => {
  const response = new Response("Hello World, seccond try!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});