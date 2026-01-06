export function random(len: number) {
  const options = "qwertyuiopasdfghjklzxcvbnm0123456789";
  const length = options.length;

  let ans = "";

  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * length);
    ans += options[index];
  }

  return ans;
}
