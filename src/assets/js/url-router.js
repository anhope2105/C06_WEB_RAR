const urlPageTitle = "JS Single Page Application Router";
document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav > a")) {
    return;
  }
  if (
    target.matches(
      ".dropdown-item.detail, .dropdown-item.edit, .dropdown-item.remove"
    )
  ) {
    e.preventDefault();
    return;
  }
  e.preventDefault();
  urlRoute();
});

const urlRoutes = {
  404: {
    template: "",
    title: "404 | " + urlPageTitle,
    description: "Page not found",
  },
  "/": {
    template: "/src/views/quan-tri/san-pham/danh-sach",
    title: "Home | " + urlPageTitle,
    description: "This is the home page",
  },
  "/san-pham": {
    template: "/src/views/quan-tri/san-pham",
    title: "About Us | " + urlPageTitle,
    description: "This is the about page",
  },
  "/bai-viet": {
    template: "/src/views/quan-tri/bai-viet/index.html",
    title: "Contact Us | " + urlPageTitle,
    description: "This is the contact page",
  },
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }
  const route = urlRoutes[location] || urlRoutes["404"];
  const html = await fetch(route.template).then((response) => response.text());
  document.getElementById("content").innerHTML = html;
  loadScript(`/src/views/quan-tri/san-pham/danh-sach/danh-sach.js`);
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};
window.onpopstate = urlLocationHandler;
window.route = urlRoute;

window.onload = () => {
  urlLocationHandler();
  const trangChu = document.getElementById("home");
  if (trangChu) {
    trangChu.click();
  }
};

function loadScript(scriptPath) {
  var script = document.createElement("script");
  script.src = scriptPath;
  document.body.appendChild(script);
}
