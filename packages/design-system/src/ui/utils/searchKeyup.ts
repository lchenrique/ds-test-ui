interface ISearchKeyupConfig {
  typingTimer?: any;
  doneTypingInterval?: number;
}

let typingTimer: any;
const doneTypingInterval = 400;
const searchKeyup = (e: any, callback: (value: any) => void) => {
  if (e.key !== "Enter") {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(
      () => callback(e.target.value),
      doneTypingInterval,
    );
  }
};
export { searchKeyup };
