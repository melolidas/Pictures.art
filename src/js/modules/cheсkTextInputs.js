const checkTextInputs = (selector) => {
  const textInputs = document.querySelectorAll(selector);

  textInputs.forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });

    input.addEventListener("paste", function (e) {
      e.preventDefault();

      const pastedData = e.clipboardData
        .getData("Text")
        .replace(/[^а-яё 0-9]/gi, "");
      const selectionStart = input.selectionStart;
      const selectionEnd = input.selectionEnd;

      input.value =
        input.value.slice(0, selectionStart) +
        pastedData +
        input.value.slice(selectionEnd);

      input.setSelectionRange(
        selectionStart + pastedData.length,
        selectionStart + pastedData.length
      );
    });

    input.addEventListener("input", function () {
      input.value = input.value.replace(/[^а-яё 0-9]/gi, "");
    });
  });
};

export default checkTextInputs;
