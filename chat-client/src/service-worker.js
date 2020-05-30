self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => {});

self.addEventListener("push", () => {
  self.registeration.showNotification("Messages", {
    body: "hello",
  });
});
