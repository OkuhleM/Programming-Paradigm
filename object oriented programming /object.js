const John = {
  skills: ["Python", "Javascript", "SQL"],
  age: 22,
  language: "English",
  skilled: function skilled() {
    if (this.skills.length > 2) {
      return "He's got some skills";
    } else {
      return "Fair Enough";
    }
  },
};