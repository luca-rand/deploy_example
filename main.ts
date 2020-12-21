addEventListener("fetch", (event) => {
  event.respondWith(handle(event.request));
});

async function handle(request: Request): Promise<Response> {
  return new Response("Hello world!", {
    status: 200,
    headers: {
      "content-type": "text/plain",
    },
  });
}
