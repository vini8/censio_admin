// tailwind configuration

tailwind.config = {
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      // Remove default checkbox background color
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "checkbox-bg": "transparent",
      }),
    },
  },
};

// function for reusable components

document.addEventListener("DOMContentLoaded", function () {
  function includeHTML(file, elementId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(elementId).innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
  }

  // Include header.html
  includeHTML("./components/header.html", "header");
});

// function for dark mode toggle in sidebar

const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");
const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};
//calling the function directly toggleDarkMode();
if (checkbox) {
  checkbox.addEventListener("click", toggleDarkMode);
}

// function for collapsible sidebar

function mainSidebar() {
  const sidebar = document.querySelector("#sidebar");
  const sidebarToggle = document.querySelector("#sidebar-toggle");
  const mainSection = document.querySelector("#main_section");
  const vector = document.querySelector("#menu_vector");
  const lightIcon = document.querySelector("#light_icon");
  const darkIcon = document.querySelector("#dark_icon");

  sidebar.classList.toggle("!w-64");
  sidebar.classList.toggle("md:!w-20");
  // sidebarToggle.classList.toggle("");
  mainSection.classList.toggle("md:w-full");
  mainSection.classList.toggle("lg:w-full");
  mainSection.classList.toggle("xl:w-full");
  mainSection.classList.toggle("2xl:w-full");
  mainSection.classList.toggle("3xl:w-full");
  vector.classList.toggle("w-0");
  lightIcon.classList.toggle("w-0");
  darkIcon.classList.toggle("w-0");
  vector.classList.toggle("md:opacity-0");
  lightIcon.classList.toggle("md:opacity-0");
  darkIcon.classList.toggle("md:opacity-0");
}
//   sidebarToggle.addEventListener("click", () => {});
// }

// function for search toogle in mobile viewport

function searchToggle() {
  document.getElementById("search-block").classList.toggle("hidden");
}
// function for user profile toggle

function userToggle() {
  document.querySelector("#userProfile").classList.toggle("top-24");
  document.querySelector("#userProfile").classList.toggle("opacity-100");
}

// pie chart

const chart_1 = document.getElementById("statusChart");

new Chart(chart_1, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "statusChart",
        data: [150, 300, 300],
        backgroundColor: ["#1B75BC", "#A4D1F4", "#ECF7FF"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    elements: {
      arc: {
        borderRadius: "99",
        borderWidth: 1,
        borderColor: "transparent",
      },
    },
    spacing: 10,
    cutout: 65,
  },
});

const chart_2 = document.getElementById("myChart_1");
new Chart(chart_2, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "statusChart",
        data: [150, 300, 300],
        backgroundColor: ["#1B75BC", "#A4D1F4", "#ECF7FF"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    elements: {
      arc: {
        borderRadius: "99",
        borderWidth: 1,
        borderColor: "transparent",
      },
    },
    spacing: 10,
    cutout: 45,
  },
});

const chart_3 = document.getElementById("myChart_2");
new Chart(chart_3, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "statusChart",
        data: [150, 300, 300],
        backgroundColor: ["#1B75BC", "#A4D1F4", "#ECF7FF"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    elements: {
      arc: {
        borderRadius: "99",
        borderWidth: 1,
        borderColor: "transparent",
      },
    },
    spacing: 10,
    cutout: 45,
  },
});
const chart_4 = document.getElementById("myChart_3");
new Chart(chart_4, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "statusChart",
        data: [150, 300, 300],
        backgroundColor: ["#1B75BC", "#A4D1F4", "#ECF7FF"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    elements: {
      arc: {
        borderRadius: "99",
        borderWidth: 1,
        borderColor: "transparent",
      },
    },
    spacing: 10,
    cutout: 45,
  },
});
const chart_5 = document.getElementById("myChart_4");
new Chart(chart_5, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "statusChart",
        data: [150, 300, 300],
        backgroundColor: ["#1B75BC", "#A4D1F4", "#ECF7FF"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    elements: {
      arc: {
        borderRadius: "99",
        borderWidth: 1,
        borderColor: "transparent",
      },
    },
    spacing: 10,
    cutout: 45,
  },
});
const chart_6 = document.getElementById("myChart_5");
new Chart(chart_6, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "statusChart",
        data: [150, 300, 300],
        backgroundColor: ["#1B75BC", "#A4D1F4", "#ECF7FF"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    elements: {
      arc: {
        borderRadius: "99",
        borderWidth: 1,
        borderColor: "transparent",
      },
    },
    spacing: 10,
    cutout: 45,
  },
});
