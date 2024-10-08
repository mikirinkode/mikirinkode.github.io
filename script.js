window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    document.getElementById("scrollToTopBtn").classList.add("show");
  } else {
    document.getElementById("scrollToTopBtn").classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
      observer.unobserve(entry.target);
    }
  });
});

let aboutElement = document.querySelector("#statistics");
observer.observe(aboutElement);

let projects = [
  {
    name: "QuestMD",
    link: "https://play.google.com/store/apps/details?id=id.questmd.app",
    image: "/assets/images/projects/questmd.png",
    alt: "QuestMD App",
  },
  {
    name: "Sewanue",
    link: "https://play.google.com/store/apps/details?id=com.sewanue.sewanue",
    image: "/assets/images/projects/sewanue.png",
    alt: "Sewanue App",
  },
  {
    name: "TrackThisJob",
    link: "https://play.google.com/store/apps/details?id=com.coolva.trackthisjob",
    image: "/assets/images/projects/trackthisjob.png",
    alt: "TrackThisJob App",
  },
  {
    name: "Pikul",
    link: "https://youtu.be/CAmM8bM1W80?si=q-4cogcCwB_Iqygw",
    image: "/assets/images/projects/pikul.png",
    alt: "Pikul App",
  },
  {
    name: "LatihSpeaking",
    link: "https://play.google.com/store/apps/details?id=com.coolva.speaking",
    image: "/assets/images/projects/latihspeaking.png",
    alt: "Latih Speaking App",
  },
  {
    name: "ECTRO",
    link: "https://github.com/mikirinkode/ECTRO",
    image: "/assets/images/projects/ectro.png",
    alt: "ECTRO App",
  },
  {
    name: "METAPOL",
    link: "https://github.com/Coolva-ID/Metapol",
    image: "/assets/images/projects/metapol.png",
    alt: "METAPOL App",
  },
  // {
  //   name: "CodeHub",
  //   link: "https://github.com/mikirinkode/CodeHub-DicodingBFAA",
  //   image: "/assets/images/mockups/codehub.png",
  //   alt: "CodeHub App Mockup",
  // },
  // {
  //   name: "KotakMovie",
  //   link: "https://play.google.com/store/apps/details?id=com.mikirinkode.kotakmovie",
  //   image: "/assets/images/mockups/kotakmovie.png",
  //   alt: "KotakMovie App Mockup",
  // },
  // {
  //   name: "Spod",
  //   link: "https://play.google.com/store/apps/details?id=com.mikirinkode.spod",
  //   image: "/assets/images/mockups/spod.png",
  //   alt: "Spod App Mockup",
  // },
  // {
  //   name: "Text Recognition",
  //   link: "https://github.com/mikirinkode/TextRecognition-Android",
  //   image: "/assets/images/mockups/textrecognition.png",
  //   alt: "Text Recognition App Mockup",
  // },
  // {
  //   name: "FINANCIAR",
  //   link: "https://github.com/mikirinkode/Financiar",
  //   image: "/assets/images/mockups/financiar.png",
  //   alt: "FINANCIAR App Mockup",
  // },
];

let projectList = document.querySelector(".project-list");

projects.forEach((project) => {
  let projectTile = document.createElement("section");
  projectTile.className = "project-tile";

  let link = document.createElement("a");
  link.id = "profile-link";
  link.href = project.link;
  link.target = "_blank";

  let img = document.createElement("img");
  img.className = "mockup-image";
  img.alt = project.alt;
  img.src = project.image;

  link.appendChild(img);
  projectTile.appendChild(link);
  projectList.appendChild(projectTile);
});

let articles = [
  {
    link: "https://mikirinkode.com/ubah-gambar-jadi-blur/",
    image: "/assets/images/articles/opencv.png",
    alt: "opencv article",
  },
  {
    link: "https://mikirinkode.com/instalasi-wordpress-di-ubuntu-server/",
    image: "/assets/images/articles/wordpress.png",
    alt: "wordpress article",
  },
  {
    link: "https://mikirinkode.com/stack/",
    image: "/assets/images/articles/stack.png",
    alt: "article",
  },
];

let articleList = document.querySelector(".article-list");

articles.forEach((article) => {
  let articleTile = document.createElement("section");
  articleTile.className = "article-tile";

  let link = document.createElement("a");
  link.href = article.link;
  link.target = "_blank";

  let img = document.createElement("img");
  img.className = "article-img";
  img.alt = article.alt;
  img.src = article.image;

  link.appendChild(img);
  articleTile.appendChild(link);
  articleList.appendChild(articleTile);
});