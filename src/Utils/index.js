export const Utils = {
  setColor: (hex, percent) => {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, "");

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length == 3) {
      hex = hex.replace(/(.)/g, "$1$1");
    }

    var r = parseInt(hex.substr(0, 2), 16),
      g = parseInt(hex.substr(2, 2), 16),
      b = parseInt(hex.substr(4, 2), 16);

    return (
      "#" +
      (0 | ((1 << 8) + r + ((256 - r) * percent) / 100))
        .toString(16)
        .substr(1) +
      (0 | ((1 << 8) + g + ((256 - g) * percent) / 100))
        .toString(16)
        .substr(1) +
      (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
    );
  },

  truncate: (str, n) => {
    if (str) return str.length > n ? str.substr(0, n - 1) + "..." : str;
  },

  compareChars: (keyname) => {
    return (a, b) => {
      const key = keyname;
      if (
        a[key].substring(0, 1).toLowerCase() >
        b[key].substring(0, 1).toLowerCase()
      )
        return 1;
      if (
        a[key].substring(0, 1).toLowerCase() <
        b[key].substring(0, 1).toLowerCase()
      )
        return -1;
      return 0;
    };
  },
};
