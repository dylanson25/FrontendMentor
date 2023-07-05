"use strict";
(() => {
  const markAllAsRead = document.querySelector("#mark-all-as-read");
  const notificationCount = document.querySelector("#notification-count");
  markAllAsRead.addEventListener("click", () => {
    const messageUnread = document.querySelectorAll(
      ".notification-item__unread"
    );
    messageUnread.forEach((notification) =>
      notification.classList.remove("notification-item__unread")
    );
    notificationCount.innerHTML = "0";
  });
})();
