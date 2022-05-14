export const validateEmail = (value) => {
  if (!value || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }
  return false;
};

export const validatePassword = (value) => {
  if (
    !value ||
    !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
  ) {
    return true;
  }
  return false;
};

export const validateName = (value) => {
  if (!value || value.length < 1) {
    return true;
  }
  return false;
};

export const validatePhone = (value) => {
  if (!value) {
    return false;
  } else if (
    !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)
  ) {
    return true;
  }
  return false;
};
