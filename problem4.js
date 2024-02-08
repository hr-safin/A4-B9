//

function password(obj) {
  if (
    !obj.hasOwnProperty("name") ||
    typeof obj.name !== "string" ||
    !obj.hasOwnProperty("birthYear") ||
    typeof obj.birthYear !== "number" ||
    !obj.hasOwnProperty("siteName") ||
    typeof obj.siteName !== "string" ||
    Number(obj.birthYear).toString().length !== 4
  ) {
      return "invalid";
  }
  const password = obj.siteName + "#" + obj.name + "@" + obj.birthYear;

  return password;
}
console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "Google" })
);
console.log(
  password({ name: "kolimuddin", birthYear: 199, siteName: "Google" })
);
