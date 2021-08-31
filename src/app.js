/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let fours = [".com", ".net", ".us"];

  const domain_container = document.querySelector("#domain-container ul");

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let four of fours) {
          domain_container.insertAdjacentHTML(
            "beforeend",
            `<li>${pronoun + adj + noun + four}</li>`
          );
        }
      }
    }
  }
};
