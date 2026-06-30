function createDomElement(tagName, textContent, container) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  container.appendChild(element);
  return element;
}
const container = document.body;
console.log(
  createDomElement(
    "p",
    "This paragraph has been added to the specified container.",
    container,
  ),
);

function setUserInfoCookie(key, value) {
  const userInfo = `${key}=${value}`;
  const encodedValue = encodeURIComponent(userInfo);
  const date = new Date();
  date.setTime(date.getTime() + 10 * 1000);
  document.cookie = `userInfo=${encodedValue}; expires=${date.toUTCString()}; path=/`;
  console.log("Cookie успішно збережено!");
}
setUserInfoCookie("language", "en");

function saveUserInfo(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Saved ${key}: ${value}`);
}

function getUserInfo(key) {
  const value = sessionStorage.getItem(key);
  console.log(`Retrieved ${key}: ${value}`);
  return value;
}

saveUserInfo("username", "JohnDoe");
console.log(getUserInfo("username"));
